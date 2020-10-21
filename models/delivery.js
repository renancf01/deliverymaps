'use strict'

let newDelivery = {
    name: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        number: {type: String},
        neighborhood: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        latitude: {type: String},
        longitude: {type: String}
    },
    weigth: {type: String, required: true},
}

module.exports = {
    newDelivery
}