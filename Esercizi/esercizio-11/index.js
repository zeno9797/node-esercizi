import express from "express"

const app = express()
const port = 3000

app.use(express.json());

let planets = [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];

app.get("/api/planets", (req, res) => {
    res.status(200).json(planets)
})

app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params
    const planet = planets.find((p) => p.id === id)
    res.status(200).json(planets)
})

app.post("/api/planets", (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]
    console.log(planets)
    res.status(201).json({ msg: "the planet was created" })
})

app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map(p => p.id === id ? ({ ...p, name }) : p)

    console.log(planets)

    res.status(200).json({msg: "planet updated"})
})

app.delete("/api/planet/:id", (req, res) => {
    const {id } = req.params
    planets = planets.filter(p=> p.id !== id)
    res.status(200).json({msg: "planet deleted"})
})

app.listen(port, () => {
    console.log("listening on port http://localhost:3000")
})