import { useState } from "react";
import { motion } from "framer-motion";

type SeatStatus = "available" | "booked" | "pre-booked";
interface Seat {
  id: number;
  category: string;
  status: SeatStatus;
}

const initSeats = (): Seat[] => {
  const seats: Seat[] = [];
  for (let i = 1; i <= 50; i++) {
    let category = "Economy";
    let status: SeatStatus = "available";
    if (i >= 11 && i <= 20) { category = "Standard"; status = "pre-booked"; }
    else if (i >= 21 && i <= 30) { category = "VIP"; }
    else if (i >= 31 && i <= 40) { category = "VIP"; status = "pre-booked"; }
    else if (i >= 41) { category = "Premium"; }
    seats.push({ id: i, category, status });
  }
  return seats;
};

const categoryColors: Record<string, string> = {
  Economy: "bg-emerald-600",
  Standard: "bg-red-600",
  VIP: "bg-amber-500",
  Premium: "bg-blue-500",
};

const CinemaBooking = () => {
  const [seats, setSeats] = useState(initSeats);
  const [selected, setSelected] = useState<Seat | null>(null);

  const book = (seat: Seat) => {
    if (seat.status !== "available") return;
    setSeats((prev) => prev.map((s) => s.id === seat.id ? { ...s, status: "booked" } : s));
    setSelected(seat);
  };

  return (
    <div className="bg-[#0d0d0d] border border-border rounded-xl p-4">
      {/* Screen */}
      <div className="text-center mb-4">
        <div className="mx-auto w-48 h-2 bg-muted-foreground/30 rounded-full mb-1" />
        <span className="text-xs text-muted-foreground font-mono">SCREEN</span>
      </div>

      {/* Seats grid */}
      <div className="grid grid-cols-10 gap-1.5 mb-4">
        {seats.map((seat) => (
          <motion.button
            key={seat.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => book(seat)}
            disabled={seat.status !== "available"}
            className={`w-full aspect-square rounded text-[9px] font-mono flex items-center justify-center transition-colors ${
              seat.status === "booked"
                ? "bg-primary text-primary-foreground"
                : seat.status === "pre-booked"
                ? "bg-red-900/50 text-red-400 cursor-not-allowed"
                : `${categoryColors[seat.category]} text-foreground cursor-pointer hover:opacity-80`
            }`}
          >
            {seat.id}
          </motion.button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-[10px] font-mono text-muted-foreground mb-3">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <span key={cat} className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded ${color}`} /> {cat}
          </span>
        ))}
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded bg-primary" /> Booked
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded bg-red-900/50" /> Unavailable
        </span>
      </div>

      {/* Confirmation */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm font-body"
        >
          <p className="text-foreground font-medium">Booking Confirmed ✓</p>
          <p className="text-muted-foreground text-xs mt-1">
            Seat #{selected.id} · {selected.category} · Booked
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CinemaBooking;
