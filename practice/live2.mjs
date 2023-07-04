import fs, { existsSync } from "fs"

// fs.readFile("./files/readme.txt", "utf8", (error, data) => {
//     if (error) {
//         console.log(error)
//         return
//     } 

//     console.log(data)
// })


// fs.writeFile("./files/readme2.txt", "helloooooooooo", (error, data) => {
//     if (error) {
//         console.log(error)
//         return
//     }

//     console.log("file scritto")
// })

// if (!fs.existsSync("./new-directory")) {

//     fs.mkdir("./new-directory", (error, data) => {
//         if (error) {
//             console.log(error)
//             return
//         }
    
//         console.log("cartella creata")
//     })
// } else {
//     fs.rmdir("./new-directory", (error, data) => {
//         if (error) {
//             console.log(error)
//             return
//         }
    
//         console.log("cartella rimossa")
//     })
// }


fs.unlink("./files/readme2.txt", (error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log("file rimosso")
})





