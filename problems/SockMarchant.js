/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in . 
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where 
Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
*/


const sockMerchant = (n, ar) => {

    // checking the first constraint
    if(n<1 || n>100 ) {
        console.log('n must be within the range 1 to 100');
        return;
    }

    // checkint the second constraint
    const max = ar.reduce((a, b) => Math.max(a,b));
    const min = ar.reduce((a, b) => Math.min(a,b));    
    if(min<1) {
        console.log('Color tag numbers must be within the range 1 to 100');
        console.log(`ar[${ar.indexOf(min)}] = ${min} violates this rule.`)
        return 0;
    }
    
    if(max>100) {
        console.log('Color tag numbers must be within the range 1 to 100');
        console.log(`ar[${ar.indexOf(max)}] = ${max} violates this rule.`)
        return 0;
    }
    

    // main implementation of SockMarchant
    const colorSet = new Set(ar)

    // initialization 
    let matchFound = 0;

    colorSet.forEach(color => {
        let count = 0;
        ar.forEach(item => {
            if(item === color) {
                count++;
            }
        });
        
        // counting matches
        count%2 === 0 ? matchFound += count/2 : matchFound += (count-1)/2
    });
    return matchFound;
}

// test
const testArr = [11,1,1,200,2,2,1,22,3,1,2,1,2,4,3,4,5,3,5];
console.log(sockMerchant(testArr.length, testArr));
console.log(testArr.sort((a,b)=>a-b));