// arr must be a square number. too lazy to check. 
const SquarMatrixify = (arr) => {
    const dim = Math.sqrt(arr.length);

    let sqrMat = [];
    for(let i=0; i<dim; i++) {
        sqrMat.push([]);
        for(let j=0; j<dim; j++) {
            (sqrMat[i]).push(arr[i*dim+j])
        }
    }

    return sqrMat;
}


// test 
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(SquarMatrixify(arr));