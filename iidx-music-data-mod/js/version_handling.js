function getRelativePosAndLen(version) {
  if (version == 20 || version == 21) {
    return {
      SINGLE_SONG_LENGTH: 0x320,
      TITLE_MAX_LENGTH: 64,
      TITLE_POS: 0,
      ASCII_TITLE_POS: 0x40,
      GENRE_POS: 0x80,
      ARTIST_POS: 0xc0,

      ENTRY_TEXTURE_FLAGS_TITLE_POS: 0x100,
      ENTRY_TEXTURE_FLAGS_ARTIST_POS: 0x104,
      ENTRY_TEXTURE_FLAGS_GENRE_POS: 0x108,
      ENTRY_TEXTURE_FLAGS_LOAD_POS: 0x10c,
      ENTRY_TEXTURE_FLAGS_LIST_POS: 0x110,
      ENTRY_FONT_POS: 0x114,
      VERSION_POS: 0x118,
      OTHER_FOLDER_POS: 0x11a,
      BEMANI_FOLDER_POS: 0x11c,
      SPLITTABLE_DIFF_POS: 0x11e,
      DIFFICULTIES_POS: 0x120,
      ENTRY_ID_POS: 0x1c8,

      VOLUME_POS: 0x1cc,
      FILE_IDENTIFIER_POS: 0x1d0,
      BGA_DELAY_POS: 0x1d8,
      BGA_FILENAME_POS: 0x1dc,
      BGA_FILENAME_MAX_LENGTH: 0x13,//
      AFP_FLAG_POS: 0x1fc,//
    }
  }
  if (version >= 22 && version <= 25) {
    return {
      SINGLE_SONG_LENGTH: 0x340,
      TITLE_MAX_LENGTH: 64,
      TITLE_POS: 0,
      ASCII_TITLE_POS: 0x40,
      GENRE_POS: 0x80,
      ARTIST_POS: 0xc0,

      ENTRY_TEXTURE_FLAGS_TITLE_POS: 0x100,
      ENTRY_TEXTURE_FLAGS_ARTIST_POS: 0x104,
      ENTRY_TEXTURE_FLAGS_GENRE_POS: 0x108,
      ENTRY_TEXTURE_FLAGS_LOAD_POS: 0x10c,
      ENTRY_TEXTURE_FLAGS_LIST_POS: 0x110,
      ENTRY_FONT_POS: 0x114,
      VERSION_POS: 0x118,
      OTHER_FOLDER_POS: 0x11a,
      BEMANI_FOLDER_POS: 0x11c,
      SPLITTABLE_DIFF_POS: 0x11e,
      DIFFICULTIES_POS: 0x120,
      ENTRY_ID_POS: 0x1c8,

      VOLUME_POS: 0x1cc,
      FILE_IDENTIFIER_POS: 0x1d0,
      BGA_DELAY_POS: 0x1d8,
      BGA_FILENAME_POS: 0x1dc,
      BGA_FILENAME_MAX_LENGTH: 0x13,//
      AFP_FLAG_POS: 0x1fc,//
    }
  }
  if (version == 26) {
    return {
      SINGLE_SONG_LENGTH: 0x344,
      TITLE_MAX_LENGTH: 64,
      TITLE_POS: 0,
      ASCII_TITLE_POS: 0x40,
      GENRE_POS: 0x80,
      ARTIST_POS: 0xc0,

      ENTRY_TEXTURE_FLAGS_TITLE_POS: 0x100,
      ENTRY_TEXTURE_FLAGS_ARTIST_POS: 0x104,
      ENTRY_TEXTURE_FLAGS_GENRE_POS: 0x108,
      ENTRY_TEXTURE_FLAGS_LOAD_POS: 0x10c,
      ENTRY_TEXTURE_FLAGS_LIST_POS: 0x110,
      ENTRY_FONT_POS: 0x114,
      VERSION_POS: 0x118,
      OTHER_FOLDER_POS: 0x11a,
      BEMANI_FOLDER_POS: 0x11c,
      SPLITTABLE_DIFF_POS: 0x11e,
      DIFFICULTIES_POS: 0x120,
      ENTRY_ID_POS: 0x1c8,

      VOLUME_POS: 0x1cc,
      FILE_IDENTIFIER_POS: 0x1d0,
      BGA_DELAY_POS: 0x1d8,
      BGA_FILENAME_POS: 0x1dc,
      BGA_FILENAME_MAX_LENGTH: 0x13,//
      AFP_FLAG_POS: 0x1fc,//
    }
  }
  if (version >= 27) {
    return {
      SINGLE_SONG_LENGTH: 0x52c,
      TITLE_MAX_LENGTH: 64,
      TITLE_POS: 0,
      ASCII_TITLE_POS: 0x40,
      GENRE_POS: 0x80,
      ARTIST_POS: 0xc0,
      ENTRY_TEXTURE_FLAGS_TITLE_POS: 0x100,
      ENTRY_TEXTURE_FLAGS_ARTIST_POS: 0x104,
      ENTRY_TEXTURE_FLAGS_GENRE_POS: 0x108,
      ENTRY_TEXTURE_FLAGS_LOAD_POS: 0x10c,
      ENTRY_TEXTURE_FLAGS_LIST_POS: 0x110,
      ENTRY_FONT_POS: 0x114,
      VERSION_POS: 0x118,
      OTHER_FOLDER_POS: 0x11a,
      BEMANI_FOLDER_POS: 0x11c,
      SPLITTABLE_DIFF_POS: 0x11e,
      DIFFICULTIES_POS: 0x120,
      ENTRY_ID_POS: 0x3b0,
      VOLUME_POS: 0x3b4,
      FILE_IDENTIFIER_POS: 0x3b8,
      BGA_DELAY_POS: 0x3c2,
      BGA_FILENAME_POS: 0x3c4,
      BGA_FILENAME_MAX_LENGTH: 0x13,
      AFP_FLAG_POS: 0x3e4,
    }
  }
  throw new Error('Version not supported!');
}

function getDifficulties(version, buffer, cursor, DIFFICULTIES_POS) {
  if (version <= 26) {
    return {
      sp: {
        beginner: buffer[cursor + DIFFICULTIES_POS + 6],
        normal: buffer[cursor + DIFFICULTIES_POS + 0],
        hyper: buffer[cursor + DIFFICULTIES_POS + 1],
        another: buffer[cursor + DIFFICULTIES_POS + 2],
        legendaria: 0,
      },
      dp: {
        beginner: 0,
        normal: buffer[cursor + DIFFICULTIES_POS + 3],
        hyper: buffer[cursor + DIFFICULTIES_POS + 4],
        another: buffer[cursor + DIFFICULTIES_POS + 5],
        legendaria: 0,
      },
    }
  }
  return {
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
  }
}

function getFileIdentifiers(version, buffer, cursor, FILE_IDENTIFIER_POS) {
  if (version <= 26) {
    return {
      sp: {
        beginner: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 6]),
        normal: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 0]),
        hyper: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 1]),
        another: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 2]),
        legendaria: '0'
      },
      dp: {
        beginner: '0',
        normal: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 3]),
        hyper: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 4]),
        another: String.fromCharCode(buffer[cursor + FILE_IDENTIFIER_POS + 5]),
        legendaria: '0'
      },
    };
  }
  return {
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
  };
}