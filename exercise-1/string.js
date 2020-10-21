function ucfirst(string) {
    return typeof string === "string" && string !== '' ? string[0].toUpperCase()+string.slice(1) : '';
}

function capitalize(string) {
    let res = '';
    if (typeof string !== "string" || string === '') {
        return '';
    }
    const split = string.split(' ');
    for (let i=0; i<split.length; i++) {
        res += ucfirst(split[i])+' ';
    }
    return res.trim();
}

function camelCase(string) {
    return capitalize(string).replaceAll(' ', '');
}

function snake_case(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    return string.toLowerCase().replace(/ /g, '_');
}

function leet(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    const letter = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
    const crypt  = ["4", "3", "1", "0", "_", "7", "4", "3", "1", "0", "_", "7"];

    let res = '';
    for (let i = 0; i<string.length; i++) {
        if (letter.includes(string[i])) {
            res += crypt[letter.indexOf(string[i])];
        } else res += string[i];
    }
    return res;
}

function verlan(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    let res = '';
    const split = string.split(' ');
    for (let word of split) {
        for (let i = word.length; i > 0; i--) {
            res += word[i-1]
        }
        res += ' ';
    }
    return res.trim();
}

function yoda(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    let res = '';
    const split = string.split(' ');
    for (let i = split.length; i > 0; i--) {
        res += split[i-1] + ' ';
    }
    return res.trim();
}

function prop_access(object, path) {

}

function vig(string) {

}
