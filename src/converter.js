// Key maps for the two Windows Persian keyboard layouts.
// Uses "var" so the file can be injected into a page more than once.

var COMMON_KEYS = {
  q: 'ض', w: 'ص', e: 'ث', r: 'ق', t: 'ف', y: 'غ', u: 'ع', i: 'ه', o: 'خ', p: 'ح',
  '[': 'ج', ']': 'چ',
  a: 'ش', s: 'س', d: 'ی', f: 'ب', g: 'ل', h: 'ا', j: 'ت', k: 'ن', l: 'م',
  ';': 'ک', "'": 'گ',
  z: 'ظ', x: 'ط', c: 'ز', v: 'ر', b: 'ذ', n: 'د', ',': 'و',
  '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
  '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹',
  '?': '؟',
};

var LAYOUTS = {
  // Windows "Persian" (the older default layout)
  persian: Object.assign({}, COMMON_KEYS, {
    '\\': 'پ', m: 'ئ',
    Q: 'ً', W: 'ٌ', E: 'ٍ', T: '،', Y: '؛',
    A: 'َ', S: 'ُ', D: 'ِ', F: 'ّ', G: 'ۀ', H: 'آ', J: 'ـ', K: '«', L: '»',
    Z: 'ة', X: 'ي', C: 'ژ', V: 'ؤ', B: 'إ', N: 'أ', M: 'ء',
  }),
  // Windows "Persian (Standard)" (ISIRI 9147)
  standard: Object.assign({}, COMMON_KEYS, {
    m: 'پ',
    Q: 'ْ', W: 'ٌ', E: 'ٍ', R: 'ً', T: 'ُ', Y: 'ِ', U: 'َ', I: 'ّ',
    A: 'ؤ', S: 'ئ', D: 'ي', F: 'إ', G: 'أ', H: 'آ', J: 'ة', K: '»', L: '«', '"': '؛',
    Z: 'ك', X: 'ٓ', C: 'ژ', V: 'ٰ', B: '\u200c', N: 'ٔ', M: 'ء',
    '@': '٬', '#': '٫', '$': '﷼', '%': '٪', '^': '×', '&': '،',
  }),
};

function getMaps(layout) {
  var toFa = LAYOUTS[layout] || LAYOUTS.persian;
  var toEn = {};
  for (var en in toFa) toEn[toFa[en]] = en;
  if (!toEn['ي']) toEn['ي'] = 'd';   // Arabic yeh
  if (!toEn['ك']) toEn['ك'] = ';';   // Arabic kaf
  return { toFa: toFa, toEn: toEn };
}

function convertToFarsi(text, layout) {
  var m = getMaps(layout).toFa, out = '';
  for (var ch of text) out += m[ch] !== undefined ? m[ch] : (m[ch.toLowerCase()] !== undefined ? m[ch.toLowerCase()] : ch);
  return out;
}

function convertToEnglish(text, layout) {
  var m = getMaps(layout).toEn, out = '';
  for (var ch of text) out += m[ch] !== undefined ? m[ch] : ch;
  return out;
}

// Detects which way the text was mistyped and fixes it
function fixLayout(text, layout) {
  var fa = (text.match(/[\u0600-\u06FF\uFDFC]/g) || []).length;
  var en = (text.match(/[A-Za-z]/g) || []).length;
  return fa > en ? convertToEnglish(text, layout) : convertToFarsi(text, layout);
}
