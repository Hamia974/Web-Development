import express from "express";
const router = express.Router();

let bookings = [];

// Save booking
router.post("/", (req, res) => {
  const booking = { id: Date.now(), ...req.body };
  bookings.push(booking);
  res.json({ message: "Booking saved!", booking });
});

// Get all bookings (admin only later)
router.get("/", (req, res) => {
  res.json(bookings);
});

export default router;
