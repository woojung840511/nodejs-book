const {odd, even} = require('./var');

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

// 이미 다른 모듈에서 넘겨받은 객체를 다시 내보낼 수도 있음
/*
module.exports = {
    checkOddOrEven,
    odd,
    even
}*/
module.exports = checkOddOrEven;