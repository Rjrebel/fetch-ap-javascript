let card = document.getElementById("card");
let btn = document.getElementById("btn");


btn.addEventListener("click", getRandomImage);


// function learnFetch(){
//     console.log("1 => Before fetch")
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"Rohit .dacbsdjvcm asdv","salary":"123","age":"23"}';
//     params = {
//         method : 'post',
//         headers : {
//             'content-Type' : 'application/json'
//         },
//         body : data

//     }
//     fetch(url, params)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

function getRandomImage(){
    fetch('https://picsum.photos/300/400')
    .then( data => {
        console.log(data);
        card.innerHTML = `<img height="300px" width="400px" class="rounded" src="${data.url}">`
    })
    .catch(error => {
        console.log("error");
    })
}