'use strict'

const _dataRepositoryMongo = require('../repositories/menu-repository');
const _menu = require('../domain/menu');

_menu.setDataRepository(_dataRepositoryMongo);


exports.get = async(req, res, next) => {//Responsabilidade Única (S): Apenas faz o necessário para retornar os itens do cardápio, e nada a mais
    try{    

        var data = await _menu.getItensFromMenu();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha',
            error: e
        });
    }
}