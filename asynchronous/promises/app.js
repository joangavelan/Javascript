// Angela wants to be a nurse
let hasStudied = true;

const takeTest = _ => {
    return new Promise((resolve, reject) => {
        const license = {
            name: 'Registered Nurse Licence',
            year: 2020
        }
        if (hasStudied) {
            resolve(license);
        }
        else {
            reject('No. You partied too much.');
        }
    })
}

const applyJob = () => {
    return new Promise((resolve, reject) => {
        let isInGoodMood = true;
        if(isInGoodMood) {
            resolve('You have the job!');
        }
        else {
            reject('Invalid license');
        }
    })
}

takeTest()
    .then(applyJob)
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })





// const happy = false;

// const greeting = new Promise((resolve, reject) => {
//     if(happy) {
//         resolve('hello how are you?');
//     }
//     else {
//         reject('nope');
//     }
// }) 

// greeting.then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })