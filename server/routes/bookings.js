
const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Event = require("../models/Event");

router.post("/", async (req, res) => {
  try {
    const { eventId, userName, userEmail } = req.body;

    const event = await Event.findById(eventId);
    if (!event || event.seatsAvailable <= 0) {
      return res.status(400).json({ message: "No seats available." });
    }

    const booking = new Booking({ eventId, userName, userEmail });
    await booking.save();

    event.seatsAvailable -= 1;
    await event.save();

    res.status(201).json({ message: "Booking confirmed!", booking });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
});

module.exports = router;
