import fs from "fs"

fs.writeFile("./readme.txt", "prova prova", (error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log("file scritto")
})