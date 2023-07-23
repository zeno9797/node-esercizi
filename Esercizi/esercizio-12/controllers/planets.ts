import { request, response } from "express";


let planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars"}
];

const getAll = (req: request, res: response) => {
    res.status(200).json(planets)
}

const getOneById = (req: request, res: response) => {
    const { id } = req.params
    const planet = planets.find((p) => p.id === id)
    res.status(200).json(planets)
}

const create = (req: request, res: response) => {
    const { id, name } = req.body;
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]
    console.log(planets)
    res.status(201).json({ msg: "the planet was created" })
}
const updateById = (req: request, res: response) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map(p => p.id === id ? ({ ...p, name }) : p)

    console.log(planets)

    res.status(200).json({ msg: "planet updated" })
}
const deleteById = (req: request, res: response) => {
    const { id } = req.params
    planets = planets.filter(p => p.id !== id)
    res.status(200).json({ msg: "planet deleted" })
}

export {getAll, getOneById, create, updateById, deleteById}