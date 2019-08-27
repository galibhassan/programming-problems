
// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for(let i=0; i<a.length; i++) {
        if(a[i]<1 || b[i]<1 || a[i]>100 || b[i]>100) {
            return [0,0]
        }

        if(a[i] > b[i]) {
            aliceScore ++;
        } else if(a[i] < b[i]){
            bobScore++
        } else {}
    }

    return [aliceScore, bobScore]
}


// test
a = [1,2,3];
b = [30,20,10];
console.log(compareTriplets(a,b))