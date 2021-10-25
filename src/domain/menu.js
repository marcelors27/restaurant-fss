'use strict';

let _dataRepository = null;


const setDataRepository = async(dataRepository) => { //Inversão de Dependência (D): Se eu quiser usar outro banco, apenas uso outro repositorio de dados, o código do dominio nunca vai mudar
    _dataRepository = dataRepository;
}


const getItensFromMenu = async() => {
    return _dataRepository.getItensFromMenu();
}

exports.setDataRepository = setDataRepository;
exports.getItensFromMenu = getItensFromMenu;