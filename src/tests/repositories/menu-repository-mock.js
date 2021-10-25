'use strict'


const getItensFromMenu = async() => {
    return [
        {
            description: 'ABC',
            price: 99,
            active:true,
            type: 'salgado'
        }
    ]
}


const getItensByType = async(foodType) => {
    return [
        {
            description: 'ABC',
            price: 99,
            active:true,
            type: foodType
        }
    ]
}

exports.getItensFromMenu = getItensFromMenu;
exports.getItensByType = getItensByType;