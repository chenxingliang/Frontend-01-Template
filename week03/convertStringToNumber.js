function convertStringToNumber(str, hex = 10) {
    if (hex > 36 || hex < 1) {
        throw new Error('请输入正确的进制，范围在1到36之间');
    }
    let map = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 10,
        'b': 11,
        'c': 12,
        'd': 13,
        'e': 14,
        'f': 15,
        'g': 16,
        'h': 17,
        'i': 18,
        'g': 19,
        'k': 20,
        'l': 21,
        'm': 22,
        'n': 23,
        'o': 24,
        'p': 25,
        'q': 26,
        'r': 27,
        's': 28,
        't': 29,
        'u': 30,
        'v': 31,
        'w': 32,
        'x': 33,
        'y': 34,
        'z': 35,
    }
    let res = 0;
    for (let char of str) {
        if (map[char] > hex) {
            throw new Error(`传入的字符串超过${hex}进制解析范围`);
        }
        res *= hex;
        res += map[char];
    }
    return res;
}

let test = convertStringToNumber('a', 1);
console.log(test);