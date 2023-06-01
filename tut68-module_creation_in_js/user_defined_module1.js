console.log('this is a user defined module/liberary')

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

const SF_bridge = 1.29; // constant exported to be used

module.exports = { 
    average, 
    SF_bridge 
};