const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.crearTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.json({'status': '1', 'msg': 'Ticket guardado.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

ticketCtrl.obtenerTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

ticketCtrl.eliminarTicket = async (req, res) => {
  try {
    await Ticket.deleteOne({_id: req.params.id});
    res.json({'status': '1', 'msg': 'Ticket removed.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

ticketCtrl.modificarTicket = async (req, res) => {
  try {
    const vticket = new Ticket(req.body);
    await Ticket.updateOne({_id: req.body._id}, vticket);
    res.json({'status': '1', 'msg': 'Ticket updated.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

ticketCtrl.obtenerTicketsPorCategoria = async (req, res) => {
  try {
    const tickets = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate('espectador');
    res.json(tickets);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

module.exports = ticketCtrl;