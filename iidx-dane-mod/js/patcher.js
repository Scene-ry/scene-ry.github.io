let modifiedBuffer = null;

// const html = $('html');
// const filePickerContainer = $('filepickercontainer');
let songnameinpComponent;
let songfinderresultComponent;
let filePickerComponent;
let daneDetailsComponent;
let textEncoder = new TextEncoder();

window.onload = function () {
  songnameinpComponent = $('#songnameinp');
  songfinderresultComponent = $('#songfinderresult');
  filePickerComponent = $('#filepicker');
  daneDetailsComponent = $('#danedetails');

  songfinderresultComponent.hide();
  songnameinpComponent.on('blur', function (e) {
    const kw = e.target.value;
    let resultList;
    if (/^:[0-9]+$/g.test(kw)) {
      resultList = SONG_LIST.filter(function(song) {
        return song.id.toString().substring(0, song.id.toString().length - 3) === kw.substring(1);
      });
    } else if (textEncoder.encode(kw).byteLength >= 2) {
      resultList = SONG_LIST.filter(function(song) {
        return song.id.toString() === kw
          || song.title.toLowerCase().indexOf(kw.toLowerCase()) > -1
          || song.title_ascii.toLowerCase().indexOf(kw.toLowerCase()) > -1
          || song.genre.toLowerCase().indexOf(kw.toLowerCase()) > -1
          || song.artist.toLowerCase().indexOf(kw.toLowerCase()) > -1;
      });
    }
    if (resultList && resultList.length > 0) {
      const tbody = $('<tbody>');
      for (const res of resultList) {
        const tr = $('<tr>')
          .append($('<td>').append(res.id))
          .append($('<td>').append(res.genre))
          .append($('<td>').append(res.title))
          .append($('<td>').append(res.title_ascii))
          .append($('<td>').append(res.artist));
        tbody.append(tr);
      }
      $('#songfinderresult tbody').remove();
      songfinderresultComponent.append(tbody);
      songfinderresultComponent.show();
      return;
    }
    songfinderresultComponent.hide();
  });

  filePickerComponent.on('change', function () {
    if (this.files && this.files.length > 0) {
      loadFile(this.files[0]);
    }
  });
  // html.on("dragover dragenter dragleave dragend drop", function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // });
  // filePickerContainer.on("drop", function (e) {
  //   var files = e.originalEvent.dataTransfer.files;
  //   if (files && files.length > 0) {
  //     loadFile(files[0]);
  //   }
  // });
}

function loadFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    loadBuffer(e.target.result);
  }
  reader.readAsArrayBuffer(file);
}

function loadBuffer(loadedFile) {
  daneDetailsComponent.empty();
  const buffer = new Uint8Array(loadedFile);
  if (checkPatchBytes(buffer)) {
    modifiedBuffer = buffer;
    loadDaneOnUI(buffer);
  } else {
    alert('Not valid IIDX DANE file!');
  }
}

function checkPatchBytes(buffer) {
  // first 8 byte should be "IIDXDANE"
  return bytesMatch(buffer, 0x00000000, [0x49, 0x49, 0x44, 0x58, 0x44, 0x41, 0x4E, 0x45]);
}

function bytesMatch(buffer, offset, bytes) {
  for (let i = 0; i < bytes.length; i++) {
    if (buffer[offset + i] != bytes[i]) {
      return false;
    }
  }
  return true;
};

function loadDaneOnUI(buffer) {
  const saveBtn = $('<button>');
  saveBtn.text('Save IIDX DANE File').click(saveDaneFile);

  daneDetailsComponent.append(saveBtn);
  const daneTable = $('<table>');
  const daneTableBody = $('<tbody>');
  for (let i = 0; i < DANE_LIST.length; i++) {
    daneTableBody.append($('<tr colspan="4">').text(DANE_LIST[i]))
    readDaneWithDifficulty(daneTableBody, i, buffer);
    daneTableBody.append($('<tr colspan="4">').append($('<td>').html('<p> </p>')));
  }
  daneTable.append(daneTableBody);
  daneDetailsComponent.append(daneTable);
}

function readDaneWithDifficulty(daneTableBody, daneIndex, buffer) {
  const offset = 0x188 * daneIndex + 0x0000009c;

  const firstSongId = getSongId(buffer[offset], buffer[offset + 1], buffer[offset + 2], buffer[offset + 3]);
  const secondSongId = getSongId(buffer[offset + 4], buffer[offset + 5], buffer[offset + 6], buffer[offset + 7]);
  const thirdSongId = getSongId(buffer[offset + 8], buffer[offset + 9], buffer[offset + 10], buffer[offset + 11]);
  const finalSongId = getSongId(buffer[offset + 12], buffer[offset + 13], buffer[offset + 14], buffer[offset + 15]);

  const firstSongDifficulty = buffer[offset + 128];
  const secondSongDifficulty = buffer[offset + 132];
  const thirdSongDifficulty = buffer[offset + 136];
  const finalSongDifficulty = buffer[offset + 140];

  buildSingleSongRow(daneTableBody, daneIndex, '1st', firstSongId, firstSongDifficulty);
  buildSingleSongRow(daneTableBody, daneIndex, '2nd', secondSongId, secondSongDifficulty);
  buildSingleSongRow(daneTableBody, daneIndex, '3rd', thirdSongId, thirdSongDifficulty);
  buildSingleSongRow(daneTableBody, daneIndex, 'final', finalSongId, finalSongDifficulty);
}

function buildSingleSongRow(daneTableBody, daneIndex, songIndex, songId, songDifficulty) {
  const tr = $('<tr>');
  const songIdInput = $('<input type="text" id="' + daneIndex + '-' + songIndex + '-songid">').val(songId);
  songIdInput.change(function (e) { $('#' + daneIndex + '-' + songIndex + '-songtitle').text(getSongDetails(Number(e.target.value)).title); })
  tr
    .append($('<td>').append(songIdInput))
    .append($('<td>').append($('<b id="' + daneIndex + '-' + songIndex + '-songtitle">').text(getSongDetails(songId).title)))
    .append($('<td>').append(buildSelectBox(daneIndex, songIndex, songDifficulty)));
  daneTableBody.append(tr);
}

function buildSelectBox(daneIndex, songIndex, difficultyIndex) {
  const select = $('<select id="' + daneIndex + '-' + songIndex + '-difficulty">');
  for (let i = 0; i < DIFFICULTY_LIST.length; i++) {
    const option = $('<option value="' + i + '">').text(DIFFICULTY_LIST[i]);
    if (difficultyIndex === i) {
      option.attr('selected', 'selected');
    }
    select.append(option);
  }
  return select;
}

function getSongId(b1, b2, b3, b4) {
  return Number('0x' + b4.toString(16).padStart(2, '0') + b3.toString(16).padStart(2, '0') + b2.toString(16).padStart(2, '0') + b1.toString(16).padStart(2, '0'));
}

function getSongDetails(songId) {
  const findResult = SONG_LIST.filter(function (song) { return song.id === songId; });
  return findResult.length > 0 ? findResult[0] : { title: 'Song not found!' };
}

function saveDaneFile() {
  if (confirm('Please notice:\n'
    + '- DO NOT play DANE analyze with modified DANE file when connecting to public network (e.g. Arcana)\n'
    + '- Remember to backup your original DANE file')) {
    try {
      for (let i = 0; i < DANE_LIST.length; i++) {
        const firstSongId = Number($('#' + i + '-1st-songid').val());
        const secondSongId = Number($('#' + i + '-2nd-songid').val());
        const thirdSongId = Number($('#' + i + '-3rd-songid').val());
        const finalSongId = Number($('#' + i + '-final-songid').val());
        const firstSongDifficulty = Number($('#' + i + '-1st-difficulty').val());
        const secondSongDifficulty = Number($('#' + i + '-2nd-difficulty').val());
        const thirdSongDifficulty = Number($('#' + i + '-3rd-difficulty').val());
        const finalSongDifficulty = Number($('#' + i + '-final-difficulty').val());
  
        modifySongAndDifficultyInDane(i, 0, firstSongId, firstSongDifficulty);
        modifySongAndDifficultyInDane(i, 1, secondSongId, secondSongDifficulty);
        modifySongAndDifficultyInDane(i, 2, thirdSongId, thirdSongDifficulty);
        modifySongAndDifficultyInDane(i, 3, finalSongId, finalSongDifficulty);
      }
  
      const blob = new Blob([modifiedBuffer], { type: "application/octet-stream" });
      saveAs(blob, 'class_course_data.bin');
    } catch (e) {
      alert(e.message);
    }
  }
}

function modifySongAndDifficultyInDane(daneIndex, songIndex, songId, difficulty) {
  if (SONGID_LIST.indexOf(songId) < 0) {
    throw Error('DANE containing invalid song ID. Please correct.')
  }
  const offset = 0x188 * daneIndex + 0x0000009c;

  const [b1, b2, b3, b4] = getBinaryBytes(songId);
  modifiedBuffer[4 * songIndex + offset] = b1;
  modifiedBuffer[4 * songIndex + offset + 1] = b2;
  modifiedBuffer[4 * songIndex + offset + 2] = b3;
  modifiedBuffer[4 * songIndex + offset + 3] = b4;

  modifiedBuffer[4 * songIndex + offset + 128] = difficulty;
}

function getBinaryBytes(songId) {
  const hex = songId.toString(16).padStart(8, '0');
  return [
    Number('0x' + hex.slice(6, 8)),
    Number('0x' + hex.slice(4, 6)),
    Number('0x' + hex.slice(2, 4)),
    Number('0x' + hex.slice(0, 2))
  ];
}
