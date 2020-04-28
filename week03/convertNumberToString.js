function convertNumberToString(num, hex) {
    if (hex > 36 || hex < 1) {
        throw new Error('请输入正确的进制，范围在1到36之间');
    }

    let map = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f',
        16: 'g',
        17: 'h',
        18: 'i',
        19: 'g',
        20: 'k',
        21: 'l',
        22: 'm',
        23: 'n',
        24: 'o',
        25: 'p',
        26: 'q',
        27: 'r',
        28: 's',
        29: 't',
        30: 'u',
        31: 'v',
        32: 'w',
        33: 'x',
        34: 'y',
        35: 'z'
    }

    let res = [];

    while (num > 0) {
        res.unshift(map[num % hex]);
        num = num / hex | 0;
    }

    return res.join('');
}

console.log(convertNumberToString(11, 8));