'use strict'

const moongose = require('mongoose');
const Menu = moongose.model('Menu');

const getItensFromMenu = async() => {
    return await Menu.find({
        active: true
    });
}

exports.getItensFromMenu = getItensFromMenu;