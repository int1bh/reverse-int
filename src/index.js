module.exports = function reverse (n) {
    let nString = String(n).split('');
    let filtered = nString.filter(element => {
        if (element != '-') {
            return element;
        }
        
    } );
    return Number((filtered.reverse().join('')));
};

  