
exports.min = function min (array) {
    if (array && array.length > 0) {
        return array.reduce((a, b) => Math.min(a, b));
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length > 0) {
        return array.reduce((a, b) => Math.max(a, b));
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length > 0) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {

        return 0;
    }
}
