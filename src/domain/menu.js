'use strict';

let _dataRepository = null;
const itensBalcao = [ 'doce', 'salgado']; //Aberto-Fechado (O): Se quiser mais itens no balcão, apenas mexer aqui


const setDataRepository = async(dataRepository) => { //Inversão de Dependência (D): Se eu quiser usar outro banco, apenas uso outro repositorio de dados, o código do dominio nunca vai mudar
    _dataRepository = dataRepository;
}


const getItensFromMenu = async() => {
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

exports.setDataRepository = setDataRepository;
exports.getItensFromMenu = getItensFromMenu;
exports.getItensBalcao = getItensBalcao;