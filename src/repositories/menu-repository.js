'use strict'



const getItensFromMenu = async() => {
    return {
        cardapio: [
            {
                produto: "sanduiche",
                valor: 10
            },
            {
                produto: "bolo",
                valor: 5
            },
        ]
    }
}



exports.getItensFromMenu = getItensFromMenu;