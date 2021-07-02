let songList;
let gameVersion;
let allocatedEntryCount;

let filePickerComponent;
let saveBtn;
let panelComponent;
let songListComponent;
let editingsongidComponent;
let titleComponent;
let asciiTitleComponent;
let genreComponent;
let artistComponent;
let entryIdComponent;
let versionComponent;
let afpflagComponent;
let volumeComponent;
let spbComponent;
let spnComponent;
let sphComponent;
let spaComponent;
let splComponent;
let dpbComponent;
let dpnComponent;
let dphComponent;
let dpaComponent;
let dplComponent;
let ispbComponent;
let ispnComponent;
let isphComponent;
let ispaComponent;
let isplComponent;
let idpbComponent;
let idpnComponent;
let idphComponent;
let idpaComponent;
let idplComponent;
let textitleComponent;
let texartistComponent;
let texgenreComponent;
let texloadComponent;
let texlistComponent;
let bgafilenameComponent;
let bgadelayComponent;
let otherfolderComponent;
let bemanifolderComponent;
let splittablediffComponent;
let entryfontComponent;
let newentryBtn;
let deleteentryBtn;
let updateBtn;

const HEAD_LENGTH = 0x10;
const HEAD_VERSION_POS = 4;
const HEAD_TOTAL_ENTRY_POS = 8;
const HEAD_ALLOCATED_ENTRY_POS = 0xa;

const SINGLE_SONG_LENGTH = 0x52c;

const TITLE_MAX_LENGTH = 64;
const TITLE_POS = 0;
const ASCII_TITLE_POS = 0x40;
const GENRE_POS = 0x80;
const ARTIST_POS = 0xc0;
const ENTRY_TEXTURE_FLAGS_TITLE_POS = 0x100;
const ENTRY_TEXTURE_FLAGS_ARTIST_POS = 0x104;
const ENTRY_TEXTURE_FLAGS_GENRE_POS = 0x108;
const ENTRY_TEXTURE_FLAGS_LOAD_POS = 0x10c;
const ENTRY_TEXTURE_FLAGS_LIST_POS = 0x110;
const ENTRY_FONT_POS = 0x114;
const VERSION_POS = 0x118;
const OTHER_FOLDER_POS = 0x11a;
const BEMANI_FOLDER_POS = 0x11c;
const SPLITTABLE_DIFF_POS = 0x11e;
const DIFFICULTIES_POS = 0x120;
const ENTRY_ID_POS = 0x3b0;
const VOLUME_POS = 0x3b4;
const FILE_IDENTIFIER_POS = 0x3b8;
const BGA_DELAY_POS = 0x3c2;
const BGA_FILENAME_POS = 0x3c4;
const BGA_FILENAME_MAX_LENGTH = 0x13;
const AFP_FLAG_POS = 0x3e4;

window.onload = function () {
  filePickerComponent = $('#filepicker');
  saveBtn = $('#savebtn');
  panelComponent = $('#panel');
  songListComponent = $('#songlist');
  editingsongidComponent = $('#editingsongid');
  titleComponent = $('#title');
  asciiTitleComponent = $('#asciititle');
  genreComponent = $('#genre');
  artistComponent = $('#artist');
  entryIdComponent = $('#entryid');
  versionComponent = $('#version');
  afpflagComponent = $('#afpflag');
  volumeComponent = $('#volume');
  spbComponent = $('#spb');
  spnComponent = $('#spn');
  sphComponent = $('#sph');
  spaComponent = $('#spa');
  splComponent = $('#spl');
  dpbComponent = $('#dpb');
  dpnComponent = $('#dpn');
  dphComponent = $('#dph');
  dpaComponent = $('#dpa');
  dplComponent = $('#dpl');
  ispbComponent = $('#ispb');
  ispnComponent = $('#ispn');
  isphComponent = $('#isph');
  ispaComponent = $('#ispa');
  isplComponent = $('#ispl');
  idpbComponent = $('#idpb');
  idpnComponent = $('#idpn');
  idphComponent = $('#idph');
  idpaComponent = $('#idpa');
  idplComponent = $('#idpl');
  textitleComponent = $('#textitle');
  texartistComponent = $('#texartist');
  texgenreComponent = $('#texgenre');
  texloadComponent = $('#texload');
  texlistComponent = $('#texlist');
  bgafilenameComponent = $('#bgafilename');
  bgadelayComponent = $('#bgadelay');
  otherfolderComponent = $('#otherfolder');
  bemanifolderComponent = $('#bemanifolder');
  splittablediffComponent = $('#splittablediff');
  entryfontComponent = $('#entryfont');
  newentryBtn = $('#newentry');
  deleteentryBtn = $('#deleteentry');
  updateBtn = $('#updatebtn');

  songListComponent.on('change', function () {
    titleComponent.empty();
    if (songList) {
      const song = songList[this.value];
      editingsongidComponent.val(this.value);
      loadSingleSongOnForm(song);
    }
  });
  filePickerComponent.on('change', function () {
    if (this.files && this.files.length > 0) {
      loadFile(this.files[0]);
    }
  });
  newentryBtn.click(function() {
    const newSongId = prompt('Enter new song ID from 00000-' + (allocatedEntryCount - 1));
    if (!newSongId) {
      return;
    }
    if (Object.keys(songList).indexOf(newSongId) >= 0) {
      alert('Song ID already used!');
      return;
    }
    editingsongidComponent.val(newSongId);
    // emptyForm();
    entryIdComponent.val(Number(newSongId));
    afpflagComponent.val(0);
  });
  deleteentryBtn.click(function () {
    delete songList[editingsongidComponent.val()];
    loadSongListOnUI();
  });
  updateBtn.click(function () {
    const editingSongId = editingsongidComponent.val();
    songList[editingSongId] = {
      "title": titleComponent.val(),
      "asciiTitle": asciiTitleComponent.val(),
      "genre": genreComponent.val(),
      "artist": artistComponent.val(),
      "entryTextureFlags": {
        "title": textitleComponent.is(':checked') ? 1 : 0,
        "artist": texartistComponent.is(':checked') ? 1 : 0,
        "genre": texgenreComponent.is(':checked') ? 1 : 0,
        "load": texloadComponent.is(':checked') ? 1 : 0,
        "list": texlistComponent.is(':checked') ? 1 : 0
      },
      "entryFont": Number(entryfontComponent.val()),
      "version": Number(versionComponent.val()),
      "otherFolder": otherfolderComponent.is(':checked') ? 1 : 0,
      "bemaniFolder": bemanifolderComponent.is(':checked') ? 1 : 0,
      "splittableDiff": splittablediffComponent.is(':checked') ? 1 : 0,
      "difficulties": {
        "sp": {
          "beginner": Number(spbComponent.val()),
          "normal": Number(spnComponent.val()),
          "hyper": Number(sphComponent.val()),
          "another": Number(spaComponent.val()),
          "legendaria": Number(splComponent.val())
        },
        "dp": {
          "beginner": Number(dpbComponent.val()),
          "normal": Number(dpnComponent.val()),
          "hyper": Number(dphComponent.val()),
          "another": Number(dpaComponent.val()),
          "legendaria": Number(dplComponent.val())
        }
      },
      "entryId": Number(entryIdComponent.val()),
      "volume": Number(volumeComponent.val()),
      "fileIdentifiers": {
        "sp": {
          "beginner": ispbComponent.val(),
          "normal": ispnComponent.val(),
          "hyper": isphComponent.val(),
          "another": ispaComponent.val(),
          "legendaria": isplComponent.val()
        },
        "dp": {
          "beginner": idpbComponent.val(),
          "normal": idpnComponent.val(),
          "hyper": idphComponent.val(),
          "another": idpaComponent.val(),
          "legendaria": idplComponent.val()
        }
      },
      "bgaDelay": Number(bgadelayComponent.val()),
      "bgaFileName": bgafilenameComponent.val(),
      "afpFlag": Number(afpflagComponent.val()),
      "restValidBuffer": songList[editingSongId] ? songList[editingSongId].restValidBuffer : {}
    };
    loadSongListOnUI();
  });
  saveBtn.click(saveModifiedBuffer);

  saveBtn.hide();
  panelComponent.hide();
}

function loadFile(file) {
  saveBtn.hide();
  panelComponent.hide();
  const reader = new FileReader();
  reader.onload = function (e) {
    loadBuffer(e.target.result);
  }
  reader.readAsArrayBuffer(file);
}

function loadBuffer(loadedFile) {
  songListComponent.empty();
  emptyForm();
  const buffer = new Uint8Array(loadedFile);
  if (checkPatchBytes(buffer)) {
    loadOnUI(buffer);
    saveBtn.show();
    panelComponent.show();
  } else {
    alert('Not valid music_data.bin file!');
  }
}

function emptyForm() {
  titleComponent.val('');
  asciiTitleComponent.val('');
  genreComponent.val('');
  artistComponent.val('');
  entryIdComponent.val('');
  versionComponent.val('');
  afpflagComponent.val('');
  volumeComponent.val('');
  spbComponent.val('');
  spnComponent.val('');
  sphComponent.val('');
  spaComponent.val('');
  splComponent.val('');
  dpbComponent.val('');
  dpnComponent.val('');
  dphComponent.val('');
  dpaComponent.val('');
  dplComponent.val('');
  ispbComponent.val('');
  ispnComponent.val('');
  isphComponent.val('');
  ispaComponent.val('');
  isplComponent.val('');
  idpbComponent.val('');
  idpnComponent.val('');
  idphComponent.val('');
  idpaComponent.val('');
  idplComponent.val('');
  // textitleComponent.val('');
  // texartistComponent.val('');
  // texgenreComponent.val('');
  // texloadComponent.val('');
  // texlistComponent.val('');
  bgafilenameComponent.val('');
  bgadelayComponent.val('');
  // otherfolderComponent.val('');
  // bemanifolderComponent.val('');
  // splittablediffComponent.val('');
}

function checkPatchBytes(buffer) {
  // first 8 byte should be "IIDX"
  return bytesMatch(buffer, 0x00000000, [0x49, 0x49, 0x44, 0x58]);
}

function bytesMatch(buffer, offset, bytes) {
  for (let i = 0; i < bytes.length; i++) {
    if (buffer[offset + i] != bytes[i]) {
      return false;
    }
  }
  return true;
}

function convertBufferToNumber(...bufferItems) {
  return Number('0x' + bufferItems.map(function (item) { return item.toString(16).padStart(2, '0'); }).join(''));
}

function loadOnUI(buffer) {
  gameVersion = buffer[HEAD_VERSION_POS];
  // const totalEntryCount = convertBufferToNumber(buffer[HEAD_TOTAL_ENTRY_POS + 1], buffer[HEAD_TOTAL_ENTRY_POS]);
  allocatedEntryCount = convertBufferToNumber(buffer[HEAD_ALLOCATED_ENTRY_POS + 1], buffer[HEAD_ALLOCATED_ENTRY_POS]);
  const startOffset = HEAD_LENGTH + allocatedEntryCount * 2;
  songList = {};
  for (let cursor = startOffset; cursor < buffer.length; cursor += SINGLE_SONG_LENGTH) {
    const titleBuffer = buffer.slice(cursor + TITLE_POS, cursor + TITLE_POS + TITLE_MAX_LENGTH);
    const title = new TextDecoder('shift-jis').decode(titleBuffer.slice(0, titleBuffer.indexOf(0)));

    const asciiTitleBuffer = buffer.slice(cursor + ASCII_TITLE_POS, cursor + ASCII_TITLE_POS + TITLE_MAX_LENGTH);
    const asciiTitle = new TextDecoder().decode(asciiTitleBuffer.slice(0, asciiTitleBuffer.indexOf(0)));

    const genreBuffer = buffer.slice(cursor + GENRE_POS, cursor + GENRE_POS + TITLE_MAX_LENGTH);
    const genre = new TextDecoder('shift-jis').decode(genreBuffer.slice(0, genreBuffer.indexOf(0)));

    const artistBuffer = buffer.slice(cursor + ARTIST_POS, cursor + ARTIST_POS + TITLE_MAX_LENGTH);
    const artist = new TextDecoder('shift-jis').decode(artistBuffer.slice(0, artistBuffer.indexOf(0)));
    const entryTextureFlags = {
      title: buffer[cursor + ENTRY_TEXTURE_FLAGS_TITLE_POS],
      artist: buffer[cursor + ENTRY_TEXTURE_FLAGS_ARTIST_POS],
      genre: buffer[cursor + ENTRY_TEXTURE_FLAGS_GENRE_POS],
      load: buffer[cursor + ENTRY_TEXTURE_FLAGS_LOAD_POS],
      list: buffer[cursor + ENTRY_TEXTURE_FLAGS_LIST_POS]
    }
    const entryFont = buffer[cursor + ENTRY_FONT_POS];
    const version = buffer[cursor + VERSION_POS];
    const otherFolder = buffer[cursor + OTHER_FOLDER_POS];
    const bemaniFolder = buffer[cursor + BEMANI_FOLDER_POS];
    const splittableDiff = buffer[cursor + SPLITTABLE_DIFF_POS];
    const difficulties = {
      sp: {
        beginner: buffer[cursor + DIFFICULTIES_POS],
        normal: buffer[cursor + DIFFICULTIES_POS + 1],
        hyper: buffer[cursor + DIFFICULTIES_POS + 2],
        another: buffer[cursor + DIFFICULTIES_POS + 3],
        legendaria: buffer[cursor + DIFFICULTIES_POS + 4],
      },
      dp: {
        beginner: buffer[cursor + DIFFICULTIES_POS + 5],
        normal: buffer[cursor + DIFFICULTIES_POS + 6],
        hyper: buffer[cursor + DIFFICULTIES_POS + 7],
        another: buffer[cursor + DIFFICULTIES_POS + 8],
        legendaria: buffer[cursor + DIFFICULTIES_POS + 9],
      },
    };
    const entryId = convertBufferToNumber(buffer[cursor + ENTRY_ID_POS + 1], buffer[cursor + ENTRY_ID_POS]);
    const volume = convertBufferToNumber(buffer[cursor + VOLUME_POS + 1], buffer[cursor + VOLUME_POS]);
    const fileIdentifiers = {
      sp: {
        beginner: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS]),
        normal: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 1]),
        hyper: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 2]),
        another: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 3]),
        legendaria: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 4])
      },
      dp: {
        beginner: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 5]),
        normal: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 6]),
        hyper: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 7]),
        another: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 8]),
        legendaria: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 9])
      },
    }
    const bgaDelayRaw = convertBufferToNumber(buffer[cursor + BGA_DELAY_POS + 1], buffer[cursor + BGA_DELAY_POS]);
    const bgaDelay = bgaDelayRaw < 0x8000 ? bgaDelayRaw : bgaDelayRaw - 0x10000;
    const bgaFileNameBuffer = buffer.slice(cursor + BGA_FILENAME_POS, cursor + BGA_FILENAME_POS + BGA_FILENAME_MAX_LENGTH);
    const bgaFileName = new TextDecoder().decode(bgaFileNameBuffer.slice(0, bgaFileNameBuffer.indexOf(0)));
    const afpFlag = buffer[cursor + AFP_FLAG_POS];
    const restValidBuffer = {};
    for (let i = cursor + AFP_FLAG_POS + 1; i < cursor + SINGLE_SONG_LENGTH; i++) {
      if (buffer[i] != 0) {
        restValidBuffer[(i - cursor).toString()] = buffer[i];
      }
    }

    songList[entryId.toString()] = {
      title,
      asciiTitle,
      genre,
      artist,
      entryTextureFlags,
      entryFont,
      version,
      otherFolder,
      bemaniFolder,
      splittableDiff,
      difficulties,
      entryId,
      volume,
      fileIdentifiers,
      bgaDelay,
      bgaFileName,
      afpFlag,
      restValidBuffer
    };
  }
  loadSongListOnUI();
}

function loadSongListOnUI() {
  songListComponent.empty();
  for (const songId of Object.keys(songList).map(Number).sort(function (a, b) { return a - b; })) {
    const song = songList[songId];
    songListComponent.append($('<option>').attr('value', song.entryId).text(song.title));
  }
}

function loadSingleSongOnForm(song) {
  titleComponent.val(song.title);
  asciiTitleComponent.val(song.asciiTitle);
  genreComponent.val(song.genre);
  artistComponent.val(song.artist);
  entryIdComponent.val(song.entryId);
  versionComponent.val(song.version);
  afpflagComponent.val(song.afpFlag);
  volumeComponent.val(song.volume);
  spbComponent.val(song.difficulties.sp.beginner);
  spnComponent.val(song.difficulties.sp.normal);
  sphComponent.val(song.difficulties.sp.hyper);
  spaComponent.val(song.difficulties.sp.another);
  splComponent.val(song.difficulties.sp.legendaria);
  dpbComponent.val(song.difficulties.dp.beginner);
  dpnComponent.val(song.difficulties.dp.normal);
  dphComponent.val(song.difficulties.dp.hyper);
  dpaComponent.val(song.difficulties.dp.another);
  dplComponent.val(song.difficulties.dp.legendaria);
  ispbComponent.val(song.fileIdentifiers.sp.beginner);
  ispnComponent.val(song.fileIdentifiers.sp.normal);
  isphComponent.val(song.fileIdentifiers.sp.hyper);
  ispaComponent.val(song.fileIdentifiers.sp.another);
  isplComponent.val(song.fileIdentifiers.sp.legendaria);
  idpbComponent.val(song.fileIdentifiers.dp.beginner);
  idpnComponent.val(song.fileIdentifiers.dp.normal);
  idphComponent.val(song.fileIdentifiers.dp.hyper);
  idpaComponent.val(song.fileIdentifiers.dp.another);
  idplComponent.val(song.fileIdentifiers.dp.legendaria);
  textitleComponent.attr('checked', song.entryTextureFlags.title === 1);
  texartistComponent.attr('checked', song.entryTextureFlags.artist === 1);
  texgenreComponent.attr('checked', song.entryTextureFlags.genre === 1);
  texloadComponent.attr('checked', song.entryTextureFlags.load === 1);
  texlistComponent.attr('checked', song.entryTextureFlags.list === 1);
  bgafilenameComponent.val(song.bgaFileName);
  bgadelayComponent.val(song.bgaDelay);
  otherfolderComponent.attr('checked', song.otherFolder === 1);
  bemanifolderComponent.attr('checked', song.bemaniFolder === 1);
  splittablediffComponent.attr('checked', song.splittableDiff === 1);
  entryfontComponent.val(song.entryFont);
}

function saveModifiedBuffer() {
  const headBuffer = buildHeadBuffer();
  let entryAllocationBuffer = [];
  let entryDetailsBuffer = [];

  const songIdList = Object.keys(songList).map(Number).sort(function (a, b) { return a - b; });
  let lastHandledSongVersion;
  for (let i = 0, allocateIndex = 0; i < allocatedEntryCount; i++) {
    if (songIdList.indexOf(i) >= 0) {
      entryAllocationBuffer = entryAllocationBuffer.concat(convertNumberToBuffer(allocateIndex, 4));
      entryDetailsBuffer = entryDetailsBuffer.concat(buildNewSongBuffer(songList[i.toString()]));
      allocateIndex++;
      lastHandledSongVersion = songList[i.toString()].version;
    } else {
      if (allocateIndex >= songIdList.length || lastHandledSongVersion >= gameVersion)
        entryAllocationBuffer.push(0, 0);
      else
        entryAllocationBuffer.push(0xff, 0xff);
    }
  }

  const resultBuffer = new Uint8Array(headBuffer.concat(entryAllocationBuffer).concat(entryDetailsBuffer));
  const blob = new Blob([resultBuffer], { type: "application/octet-stream" });
  saveAs(blob, 'test.bin');
}

function buildHeadBuffer() {
  const result = [0x49, 0x49, 0x44, 0x58];
  result.push(gameVersion); result.push(0, 0, 0);
  return result
    .concat(convertNumberToBuffer(Object.keys(songList).length, 4))
    .concat(convertNumberToBuffer(allocatedEntryCount))
    .concat([0, 0, 0, 0]);
}

function buildNewSongBuffer(song) {
  const result = [];
  // Title
  const titleBuffer = Encoding.convert(song.title, { from: 'UNICODE', to: 'SJIS', type: 'array' });
  for (let i = 0; i < TITLE_MAX_LENGTH; i++) {
    if (i < titleBuffer.length)
      result.push(titleBuffer[i]);
    else
      result.push(0);
  }
  // ASCII Title
  const asciiTitleBuffer = Encoding.convert(song.asciiTitle, { from: 'UNICODE', to: 'SJIS', type: 'array' });
  for (let i = 0; i < TITLE_MAX_LENGTH; i++) {
    if (i < asciiTitleBuffer.length)
      result.push(asciiTitleBuffer[i]);
    else
      result.push(0);
  }
  // Genre
  const genreBuffer = Encoding.convert(song.genre, { from: 'UNICODE', to: 'SJIS', type: 'array' });
  for (let i = 0; i < TITLE_MAX_LENGTH; i++) {
    if (i < genreBuffer.length)
      result.push(genreBuffer[i]);
    else
      result.push(0);
  }
  // Artist
  const artistBuffer = Encoding.convert(song.artist, { from: 'UNICODE', to: 'SJIS', type: 'array' });
  for (let i = 0; i < TITLE_MAX_LENGTH; i++) {
    if (i < artistBuffer.length)
      result.push(artistBuffer[i]);
    else
      result.push(0);
  }
  // Entry Texture Flags
  result.push(song.entryTextureFlags.title);result.push(0, 0, 0);
  result.push(song.entryTextureFlags.artist);result.push(0, 0, 0);
  result.push(song.entryTextureFlags.genre);result.push(0, 0, 0);
  result.push(song.entryTextureFlags.load);result.push(0, 0, 0);
  result.push(song.entryTextureFlags.list);result.push(0, 0, 0);
  // Entry Font
  result.push(song.entryFont);result.push(0, 0, 0);
  // Version
  result.push(song.version);result.push(0);
  // Other Folder, Bemani Folder, Splittable Diff
  result.push(song.otherFolder);result.push(0);
  result.push(song.bemaniFolder);result.push(0);
  result.push(song.splittableDiff);result.push(0);
  // Difficulties
  result.push(song.difficulties.sp.beginner);
  result.push(song.difficulties.sp.normal);
  result.push(song.difficulties.sp.hyper);
  result.push(song.difficulties.sp.another);
  result.push(song.difficulties.sp.legendaria);
  result.push(song.difficulties.dp.beginner);
  result.push(song.difficulties.dp.normal);
  result.push(song.difficulties.dp.hyper);
  result.push(song.difficulties.dp.another);
  result.push(song.difficulties.dp.legendaria);
  // Unknown
  for (let i = result.length; i < ENTRY_ID_POS; i++) {
    if (i === 0x130)
      result.push(1);
    else if (i === 0x134)
      result.push(2);
    else if (i === 0x1b0)
      result.push(3);
    else if (i === 0x1b4)
      result.push(4);
    else
      result.push(0);
  }
  // Entry ID
  const entryIdBuffer = convertNumberToBuffer(song.entryId, 4);
  for (const i of entryIdBuffer)
    result.push(i);
  result.push(0, 0);
  // Volume
  const volumeBuffer = convertNumberToBuffer(song.volume, 4);
  for (const i of volumeBuffer)
    result.push(i);
  result.push(0, 0);
  // File Identifier
  result.push(Encoding.stringToCode(song.fileIdentifiers.sp.beginner)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.sp.normal)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.sp.hyper)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.sp.another)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.sp.legendaria)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.dp.beginner)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.dp.normal)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.dp.hyper)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.dp.another)[0]);
  result.push(Encoding.stringToCode(song.fileIdentifiers.dp.legendaria)[0]);
  // BGA Delay
  const bgaDelayAsBin = song.bgaDelay < 0 ? song.bgaDelay + 0x10000 : song.bgaDelay;
  const bgaDelayBuffer = convertNumberToBuffer(bgaDelayAsBin, 4);
  for (const i of bgaDelayBuffer)
    result.push(i);
  // BGA Filename
  const bgaFilenameBuffer = Encoding.convert(song.bgaFileName, { from: 'UNICODE', to: 'SJIS', type: 'array' });
  for (let i = 0; i < BGA_FILENAME_MAX_LENGTH; i++) {
    if (i < bgaFilenameBuffer.length)
      result.push(bgaFilenameBuffer[i]);
    else
      result.push(0);
  }
  // The rest
  for (let i = result.length; i < SINGLE_SONG_LENGTH; i++) {
    if (i === AFP_FLAG_POS)
      result.push(song.afpFlag);
    else if (song.restValidBuffer[i.toString()])
      result.push(song.restValidBuffer[i.toString()]);
    else
      result.push(0);
  }
  return result;
}

function convertNumberToBuffer(num, maxHexStringLength) {
  const result = [];
  const hexString = num.toString(16).padStart(maxHexStringLength, '0');
  for (let i = hexString.length - 2; i >= 0; i -= 2) {
    result.push(Number('0x' + hexString.slice(i, i + 2)));
  }
  return result;
}
