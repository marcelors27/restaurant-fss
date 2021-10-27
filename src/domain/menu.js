'use strict';

const _cardapioBuilder = require('./cardapio-builder')

let _dataRepository = null;
//@readonly()//Decorador: indicando que os itens são apenas para leitura (Javascript não permite nessa versão ainda)
const itensBalcao = [ 'doce', 'salgado']; //Aberto-Fechado (O): Se quiser mais itens no balcão, apenas mexer aqui


const setDataRepository = async(dataRepository) => { //Inversão de Dependência (D): Se eu quiser usar outro banco, apenas uso outro repositorio de dados, o código do dominio nunca vai mudar
    _dataRepository = dataRepository;
}


const getItensFromMenu = async() => {

    const cardapio = await _cardapioBuilder.adicionaSessao(_dataRepository.getItensByType('salgado')) //Construtor: Construindo o cardápio
                                            .adicionaItensPromocionais(_dataRepository.getItensByType('salgado'))
                                            .adicionaSobremesasDoDia(_dataRepository.getItensByType('doce'))
                                            .getCardapio();

    return _dataRepository.getItensFromMenu();
}

const getItensBalcao = async() => {
    
    let data= [];
    itensBalcao.forEach(element => {
        let dataByType = _dataRepository.getItensByType(element);

        data.push(dataByType);
    });
    return data;
}

const setCommand = async(command) => {

    if(command.action == "adicionar")
    {
        _dataRepository.create(command.data);
    }
}

exports.setDataRepository = setDataRepository;
exports.getItensFromMenu = getItensFromMenu;
exports.getItensBalcao = getItensBalcao;
exports.setCommand = setCommand;
