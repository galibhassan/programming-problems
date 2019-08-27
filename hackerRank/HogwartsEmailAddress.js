// problem
// https://www.hackerrank.com/contests/openbracket-2017/challenges/because-owlery-is-too-lazy?h_r=profile



function isValid(email) {
    const arraydecomposedEmail = email.split('@');
    if(arraydecomposedEmail[1] !== 'hogwarts.com') {
        return 'No';
    }

    const wizardName = arraydecomposedEmail[0];
    if(wizardName.length != 5) {
        return 'No'
    }
    for(let i=0; i<wizardName.length; i++) {
        if(wizardName.charCodeAt(i)<97 || wizardName.charCodeAt(i)>122){
            return 'No';
        }
    }

    return 'Yes'
}



// test
const email = 'harsy@hogwartss.com'
console.log(isValid(email))