const boilWater = callback => {
    setTimeout(() => {
        callback('water ready')
    }, 4000);
}

const prepareOnions = callback => {
    setTimeout(() => {
        callback('onions ready')
    }, 3000);
}

const prepareEggs = callback => {
    setTimeout(() => {
        callback('eggs ready')
    }, 1000);
}

const mix = callback => {
    setTimeout(() => {
        callback('mixed and ready to eat')
    }, 2000);
}

function eatRamen() {

    boilWater(elem => {
        console.log(elem);
        prepareOnions(elem => {
            console.log(elem);
            prepareEggs(elem => {
                console.log(elem);
                mix(elem => {
                    console.log(elem)
                })
            })
        })
    }) 
}

eatRamen();