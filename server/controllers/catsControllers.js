const Cat = require("../model/Cat");

const getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find()
        res.status(200).json(cats)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}

const getCatById = async (req, res) => {
    try {
        const { id } = req.params
        const selectedCat = await Cat.findOne({id})
        res.status(200).json(selectedCat)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}


module.exports = {
    getAllCats,
    getCatById
}