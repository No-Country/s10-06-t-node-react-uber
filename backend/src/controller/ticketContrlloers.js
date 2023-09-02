import Ticket from "../models/ticketModels.js";

// const crearTicket = async (req, res) => {
//   try {
//     const ticketData = req.body;
//     const nuevoTicket = new Ticket(ticketData);
//     const resultado = await nuevoTicket.save();
//     res.json(resultado);
//   } catch (error) {
//     res.status(500).json({ error: "Error al crear el ticket" });
//   }
// };

const obtenerTickets = async (req, res) => {
    console.log("HOLA")
  try {
    const tickets = await Ticket.find().populate("id_conductor").exec();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los tickets" });
  }
};


const obtenerTicketPorId = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate("id_conductor")
      .exec();

    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).json({ error: "Ticket no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el ticket" });
  }
};

const actualizarTicket = async (req, res) => {
  try {
    const ticketActualizado = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (ticketActualizado) {
      res.json(ticketActualizado);
    } else {
      res.status(404).json({ error: "Ticket no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el ticket" });
  }
};

const eliminarTicket = async (req, res) => {
  try {
    const ticketEliminado = await Ticket.findByIdAndRemove(req.params.id);
    if (ticketEliminado) {
      res.json({ mensaje: "Ticket eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Ticket no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el ticket" });
  }
};

export {
  //   crearTicket,
  obtenerTickets,
  obtenerTicketPorId,
  actualizarTicket,
  eliminarTicket,
};
