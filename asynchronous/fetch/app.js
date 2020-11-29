let categoryEndPoint = 'https://opentdb.com/api_category.php';
let url = 'https://opentdb.com/api.php?amount=10';

fetch(categoryEndPoint)
    .then(res => res.json())
    .then(data => {
        // console.log(data.trivia_categories);
        let categories = data.trivia_categories;

        return categories.map(elem => {
            return elem.id;
        })
    })
    .then(data => {
        console.log(data)
    })

// fetch(url)
//     .then(obj => {
//         return obj.json();
//     })
//     .then(data => {
//         console.log(data)
//         console.log("🔥")
//         console.log(data.results)
//         data.results.forEach(elem => {
//             console.log(elem.incorrect_answers)
//         });
//     })