const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("promise risolta")
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
} )


async function newPromise() {
    const resolve = await myPromise
    console.log(resolve)
}

newPromise()