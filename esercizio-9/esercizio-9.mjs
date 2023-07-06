// Create agetResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}


async function getResult() {
    try {
        const joe = await luckyDraw("Joe") 
        console.log(joe)
        const caroline = await luckyDraw("Caroline")
        console.log(caroline)
        const sabrina = await luckyDraw("Sabrina")
        console.log(sabrina)
    } catch (error) {
        console.log(error.message)
    }

}

getResult()
