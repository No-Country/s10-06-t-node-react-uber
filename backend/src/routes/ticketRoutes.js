import Router from "express";
import {
  obtenerTickets,
  obtenerTicketPorId,
  actualizarTicket,
  eliminarTicket
} from "../controller/ticketContrlloers.js";

const router = Router();
router.get("/", obtenerTickets);
router.put("/:id", actualizarTicket);
router.get("/:id", obtenerTicketPorId);
router.delete("/:id", eliminarTicket);

export default router;
