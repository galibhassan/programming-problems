// Problem
// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
    let hourSums = [];
    for(let i=0; i+14< arr.length; i++){

        if(i%6 === 4 || i%6 === 5) {
            continue;
        }

        currentHourSum = 
            arr[i]      +   arr[i+1]    +   arr[i+2] +
                            arr[i+7]    +
            arr[i+12]   +   arr[i+13]   + arr[i+14];

        hourSums.push(currentHourSum);        
    }
    
    return hourSums.reduce((a,b)=> Math.max(a,b))
}

// test
const arr = [
    1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 2, 4, 4, 0,
    0, 0, 0, 2, 0, 0,
    0, 0, 1, 2, 4, 0,
]
console.log(hourglassSum(arr));