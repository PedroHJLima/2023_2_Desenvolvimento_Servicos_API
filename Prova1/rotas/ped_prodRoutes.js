const ped_prodController = require('../controllers/ped_prodController');

function ped_prodRotas(servidor) {
  servidor.get('/ped_prod', ped_prodController.getPed_Prod);
  servidor.post('/ped_prod', ped_prodController.adicionarPed_Prod);
}

module.exports = ped_prodRotas;