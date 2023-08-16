const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = Array.from(expr);
    let arrCodedWords = [];
    let len = (arr.length) / 10;
    for (i = 0; i < len; i++) {
        let el = arr.splice(0, 10);
        arrCodedWords.push(el);
    }
    const strArr = arrCodedWords.map(i => i.join(','));
    const arrCode = [];
    strArr.forEach ((i) => {
        arrCode.push(i.replace(/,/ig,''));
    });
    const arrMorse = arrCode.map(i => i.replace(/00/ig,'').replace(/\*{2,}/g, ' ').replace(/11/ig,'-').replace(/10/ig,'.'));
    const str = arrMorse.join(' ');
    const words = str.split('   ').map(a => a.split(' '));
    const decodeArr = [];
    words.forEach(function(i) {
        decodeArr.push(i.map(b => MORSE_TABLE[b]));
    });
    return decodeArr.join(' ').replace(/,/ig,'');
}

module.exports = {
    decode
}