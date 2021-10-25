'use strict'

const moongose = require('mongoose');
const Menu = moongose.model('Menu');

const getItensFromMenu = async() => {
    return await Menu.find({
        active: true
    }, 'description price type');
}


const getItensByType = async(foodType) => {
    return await Menu.find({
        active: true,
        type: foodType
    }, 'description price type');
}

exports.getItensFromMenu = getItensFromMenu;
exports.getItensByType = getItensByType;