// defining a list
let list = [
    "one",
    "two",
    "three"
]

// redering to the DOM
const render = (list) => {
    list.map(x => {
        document.body.innerHTML += `<li>${x}</li>`
    })
}

// // a function returning a promise, and it calls a callback function
// const createPost = (post, callback) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             list.push(post)
//             callback(list)
//             const err = false

//             if (!err) {
//                 resolve()
//             } else {
//                 reject("Data not fetched")
//             }
//         }, 1000)
//     })
// }

//the second parameter is the callback function
// createPost("four", render)
//end the first test




///////////////////////////////////////////////////////////////////
//// "A FUNCTION RETURNING A PROMISE, AND USING THEN AND CATCH"

// a function returning a promise, and it calls a callback function
const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            list.push(post)

            const err = false

            if (!err) {
                resolve()
            } else {
                reject("Data not fetched")
            }
        }, 1000)
    })
}

// createPost("four")
//     .then(() => render(list))
//     .catch(err => console.log(err))
//end the second test




/////////////////////////////////////////////////////////////////
//Multiple PROMISES AT ONCE
// const promise1 = Promise.resolve("hello world")
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "hey there man")
// })

// const promise4 = fetch("https://randomuser.me/api/").then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(data => console.log(data))



/////////////////////////////////////////////////////////////////
//ASYNC AWAIT
// const init = async() => {
//     await createPost("four");
//     render(list)
// }

// init()


const fetchUser = async() => {
    const res = await fetch("https://restcountries.eu/rest/v2/name/united")
    const data = await res.json()
    const coutriesName = data.map(x => x.name)
    render(coutriesName)
}

fetchUser()