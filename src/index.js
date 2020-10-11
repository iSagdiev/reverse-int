module.exports = function reverse (n) {
    let a = '';
    n = Math.abs(n);
    a = n.toString().split('').reverse().join('');
    a = Number.parseInt(a);
    return(a) ;
}


