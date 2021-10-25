'use strict'

const _dataRepositorySQL = require('../repositories/menu-repository');
const _menu = require('../domain/menu');


exports.get = async(req, res, next) => {
    try{

        await _menu.setDataRepository(_dataRepositorySQL);

        var data = await _menu.getItensFromMenu();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha',
            error: e
        });
    }
}