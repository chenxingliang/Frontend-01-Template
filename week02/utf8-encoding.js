function utf8Encoding(str) {
    let res = '';
    for (let s of str) {
        res += `\\u${((10000 + s.codePointAt()) + '').slice(1)}`;
    }
    return res;
}

console.log(utf8Encoding('xx'))