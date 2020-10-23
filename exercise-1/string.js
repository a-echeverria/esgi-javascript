function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine
        .split(" ")
        .map((word) => ucfirst(word.toLowerCase()))
        .join(" ");
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    return chaine.replace(/[aeiouy]/gi, function (e) {
        switch (e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    });
}

function verlan(chaine) {
    return chaine
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
}

function yoda(chaine) {
    return chaine.split(" ").reverse().join(" ");
}

function vig(string, code) {
    if (typeof string !== "string") return "";
    if (string.length === 0) return string;

    while (code.length < string.length) {
        code += code;
    }
    code = code.substr(0, string.length);
    let codeIndex = 0;

    return string
        .split("")
        .map((letter, index) => {
            letter = letter.toLowerCase();
            const aCode = "a".charCodeAt(0);
            const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

            if (letterNumber < 0 || letterNumber > 25) return letter;

            const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
            codeIndex++;

            return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
        })
        .join("");
}
