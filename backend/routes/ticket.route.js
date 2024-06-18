const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket.controller');

router.post('/', ticketCtrl.crearTicket);
router.get('/', ticketCtrl.obtenerTickets);
router.delete('/:id', ticketCtrl.eliminarTicket);
router.put('/:id', ticketCtrl.modificarTicket);
router.get('/categoria/:categoria', ticketCtrl.obtenerTicketsPorCategoria);

module.exports = router;