export function defineVerseType(verse) {
  let preLyrics = extractPreLyrics(verse);
  preLyrics = preLyrics.trim().toUpperCase();
  switch (preLyrics) {
    case "1.":
      return 1;
    case "2.":
      return 2;
    case "3.":
      return 3;
    case "4.":
      return 4;
    case "5.":
      return 5;
    case "6.":
      return 6;
    case "7.":
      return 7;
    case "8.":
      return 8;
    case "9.":
      return 9;
    case "10.":
      return 10;
    case "ĐK.":
      return 0;
    default: {
      console.log("Error: Invalid verse type");
      console.log("Verse: ", verse);
      return -1;
    }
  }
}

export function patchVerse(songVerses, orderOfVerses) {
  let patchedSongVerses = [];
  for (let i = 0; i < orderOfVerses.length; i++) {
    for (let j = 0; j < songVerses.length; j++) {
      if (songVerses[j].type === orderOfVerses[i]) {
        patchedSongVerses.push(songVerses[j].verse);
      }
    }
  }
  return patchedSongVerses;
}

export function definePartType(part) {
  switch (part) {
    case "nhaple":
      return "Nhập Lễ";
    case "dangle":
      return "Dâng Lễ";
    case "hieple":
      return "Hiệp Lễ";
    case "chame":
      return "";
    case "ketle":
      return "Kết Lễ";
    default: {
      console.log("Error: Invalid part type");
      console.log("Part: ", part);
      return "";
    }
  }
}

export function extractPreLyrics(content) {
  let preLyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      preLyrics = content.substring(0, i + 2);
      return preLyrics;
    }
  }
  return preLyrics;
}

export function extractLyrics(content) {
  let lyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      lyrics = content.substring(i + 2);
      return lyrics;
    }
  }
  return lyrics;
}

export function calculateFontSize(text) {
  let textLength = text.length;
  if (textLength <= 130) return 66;
  if (textLength <= 135) return 64;
  if (textLength <= 140) return 62;
  if (textLength <= 170) return 60;
  console.log("Error: Text too long");
  return 100;
}

export function calcFontDapCa(text) {
  let textLength = text.length;
  if (textLength <= 110) return 66;
  if (textLength <= 115) return 64;
  if (textLength <= 120) return 62;
  if (textLength <= 150) return 60;
  console.log("Error: Text too long");
  return 100;
}

