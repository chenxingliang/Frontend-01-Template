let pattern = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let color = 1;

function show(pattern) {
    let board = document.getElementsByClassName('container')[0];
    let fragment = document.createDocumentFragment();
    board.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = 
                pattern[i][j] == 2 ? 'x' :
                pattern[i][j] == 1 ? 'o' :
                '';
            cell.addEventListener('click', () => move(j, i));
            fragment.appendChild(cell);
        }
    }
    board.appendChild(fragment);

    function move(x, y) {
        if (pattern[y][x] !== 0) {
            return;
        }
        pattern[y][x] = color;
        show(pattern);
        if (check(pattern, color)) {
            alert(`${color == 1 ? 'o' : 'x'} is win`);
        }
        if(willWin(pattern, color)) {
            alert(`${color == 1 ? 'o' : 'x'} is will win`);
        }
        color = 3 - color;
    }

    function check(pattern, color) {
        for (let i = 0; i < 3; i++) {
            let win = true;
            for (let j = 0; j < 3; j++) {
                if (pattern[i][j] !== color) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            let win = true;
            for (let j = 0; j < 3; j++) {
                if (pattern[j][i] !== color) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }

        {
            let win = true;
            for (let j = 0; j < 3; j++) {
                if (pattern[j][j] !== color) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }

        {
            let win = true;
            for (let j = 0; j < 3; j++) {
                if (pattern[j][2 - j] !== color) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }
    }

    function clone(pattern) {
        return JSON.parse(JSON.stringify(pattern));
    }

    function willWin(pattern, color) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (pattern[i][j] !== 0) {
                    continue;
                }
                let temp = clone(pattern);
                temp[i][j] = color;
                if (check(temp, color)) {
                    return [j, i];
                }
            }
        }
        return null;
    }

    function baseChoice(pattern, color) {
        let point = willWin(pattern, color);
        if (point) {
            return {
                point: point,
                result: 1
            }
        }

        let result = -1;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (pattern[i][j] !== 0) {
                    continue;
                }
                let temp = clone(pattern);
                temp[i][j] = color;
                let opp = baseChoice(pattern, 3 - color);
                if (-opp.result >= result) {
                    point = [j, i];
                    result = -opp.result;
                }
            }
        }

        return {
            point: point,
            result: point ? result : 0
        }
    }
}

show(pattern);