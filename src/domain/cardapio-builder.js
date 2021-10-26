'use strict';

let _cardapioConstruido = []


const adicionaItensPromocionais = async(sessao) => {
    _cardapioConstruido.push(sessao);
    return this;
}

const adicionaSessao = async(sessao) => {
    _cardapioConstruido.push(sessao);
    return this;
}


const adicionaSobremesasDoDia = async(sessao) => {
    _cardapioConstruido.push(sessao);
    return this;
}

const getCardapio = async() => {
    return _cardapioConstruido;
}

exports.adicionaItensPromocionais = adicionaItensPromocionais;
exports.adicionaSessao = adicionaSessao;
exports.adicionaSobremesasDoDia = adicionaSobremesasDoDia;
exports.getCardapio = getCardapio;