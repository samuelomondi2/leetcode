
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    if(x <= 1) return x;

    while(left < right){
        const middle = Math.floor((left + right) / 2)
        const square = middle * middle;

        if(square === x) return middle;
        if(square < x) left = middle + 1;
        else right = middle;
    }

    return left - 1;
};