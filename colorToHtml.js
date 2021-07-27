var colors = {
    "0": "black",
    "1": "dark_blue",
    "2": "dark_green",
    "3": "dark_aqua",
    "4": "dark_red",
    "5": "dark_purple",
    "6": "gold",
    "7": "gray",
    "8": "dark_gray",
    "9": "blue",
    "a": "green",
    "b": "aqua",
    "c": "red",
    "d": "light_purple",
    "e": "yellow",
    "f": "white",

    "k": "obu",
    "l": "bold",
    "m": "strike",
    "n": "under",
    "o": "italic",
}

const colorToHtml = function (str = "", char = "&") {
    var out = str;

    Object.keys(colors).forEach((key) => {
        out = out.replace(new RegExp(`${char}${key}`, "g"), `</span><span class="${colors[key]}">`);
    });

    return out.replace(char+"r", "</span>").replace("\n", "<br>");
}

String.prototype.colorToHtml = function (char = "&") {
    return colorToHtml(this.toString(), char);
}

module.exports = colorToHtml;