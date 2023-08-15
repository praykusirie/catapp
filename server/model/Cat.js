const mongoose = require('mongoose')
const Schema = mongoose.Schema


const catSchema = new Schema({
    
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    temperament: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    life_span: {
        type: String,
        required: true
    },
    adaptability: {
        type: Number,
        required: true
    },
    affection_level: {
        type: Number,
        required: true
    },
    child_friendly: {
        type: Number,
        required: true
    },
    grooming: {
        type: Number,
        required: true
    },
    health_issues: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    social_needs: {
        type: Number,
        required: true
    },
    stranger_friendly: {
        type: Number,
        required: true
    },
    images: {
        type: Object,
        required: true
    }
})





module.exports = mongoose.model('cat', catSchema)