function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('FINISHED!!');
        }, 2000);
    });
}

// resolveAfter2Seconds()
//     .then(data => {
//         console.log(data.length)
//     })

// async function play() {
//     let result = await resolveAfter2Seconds();
//     console.log(result)
// }

// play();

const getTriviaData = async () => {
    const dataEndPoint = `https://opentdb.com/api.php?amount=10`;
    
    const request = await fetch(dataEndPoint);
    const data = await request.json();

    console.log(data);
} 

getTriviaData();