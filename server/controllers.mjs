import pgPromise from "pg-promise"

const db = pgPromise()("postgres://postgres:paperino@localhost:5433/esercizi")



const setupDb = async () => {
   await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL 
        );
    `)

    await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)
    
}

setupDb()


const getAll = async (req, res) => {
    const planets = await db.any("SELECT * FROM planets")
    res.status(200).json(planets)
}

const getOneById = async (req, res) => {
    const { id } = req.params;
    const planet = await db.oneOrNone("SELECT * FROM planets")
    res.status(200).json(planets)
}

export {getAll, getOneById}


