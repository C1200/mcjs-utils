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
}

const colorToHtml = function (str = "", char = "&") {
    return str.split(char).map((piece, index) => {
        if (index !== 0) {
            if (Object.keys(colors).find(key => key === piece.charAt(0))) {
                return `<span class="${colors[piece.charAt(0)]}">${piece.substr(1)}</span>`;
            } else {
                return "&" + piece;
            }
        } else {
            return piece;
        }
    }).join("");
}

String.prototype.colorToHtml = function (char = "&") {
    return colorToHtml(this.toString(), char);
}

module.exports = colorToHtml;