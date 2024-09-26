function extractPreLyrics(content) {
  let preLyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      preLyrics = content.substring(0, i + 2);
      return preLyrics;
    }
  }
  return preLyrics;
}

function extractLyrics(content) {
  let lyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      lyrics = content.substring(i + 2);
      return lyrics;
    }
  }
  return lyrics;
}

function calculateFontSize(text) {
  let textLength = text.length;
  if (textLength <= 130) return 66;
  if (textLength <= 135) return 64;
  if (textLength <= 140) return 62;
  if (textLength <= 170) return 60;
  console.log("Error: Text too long");
  return 100;
}

function calcFontDapCa(text) {
  let textLength = text.length;
  if (textLength <= 110) return 66;
  if (textLength <= 115) return 64;
  if (textLength <= 120) return 62;
  if (textLength <= 150) return 60;
  console.log("Error: Text too long");
  return 100;
}

export { extractLyrics, extractPreLyrics, calculateFontSize, calcFontDapCa };
