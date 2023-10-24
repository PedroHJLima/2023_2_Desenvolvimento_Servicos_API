const ped_prodController = require('../controllers/ped_prodController');

function ped_prodController(servidor) {
  servidor.get('/ped_prod', ped_prodController.getPed_Prod);
  servidor.post('/ped_prod', categoriaController.adicionarPed_Prod);
}

module.exports = ped_prodController;