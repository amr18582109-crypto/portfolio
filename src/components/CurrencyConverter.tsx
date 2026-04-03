import { useState } from "react";

const rates: Record<string, { from: string; to: string; rate: number }> = {
  "1": { from: "EGP", to: "USD", rate: 1 / 51.13 },
  "2": { from: "USD", to: "EGP", rate: 51.13 },
  "3": { from: "EGP", to: "EUR", rate: 1 / 58.14 },
  "4": { from: "EUR", to: "EGP", rate: 58.14 },
};

const CurrencyConverter = () => {
  const [lines, setLines] = useState<string[]>([
    "===== Currency Converter by Amr Khaled =====",
    "",
    "1. EGP → USD",
    "2. USD → EGP",
    "3. EGP → EUR",
    "4. EUR → EGP",
    "",
    "Enter your choice (1-4):",
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<"choice" | "amount">("choice");
  const [choice, setChoice] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const newLines = [...lines, `> ${input}`];

    if (step === "choice") {
      if (rates[input]) {
        setChoice(input);
        newLines.push(`Enter amount in ${rates[input].from}:`);
        setStep("amount");
      } else {
        newLines.push("Invalid choice. Enter 1-4:");
      }
    } else {
      const amount = parseFloat(input);
      if (isNaN(amount) || amount <= 0) {
        newLines.push("Invalid amount. Try again:");
      } else {
        const r = rates[choice];
        const result = (amount * r.rate).toFixed(2);
        newLines.push(`${amount} ${r.from} = ${result} ${r.to}`);
        newLines.push("");
        newLines.push("Thanks for using Currency Converter by Amr Khaled");
        newLines.push("");
        newLines.push("Enter your choice (1-4):");
        setStep("choice");
      }
    }
    setLines(newLines);
    setInput("");
  };

  return (
    <div className="bg-[#0d0d0d] border border-border rounded-xl p-4 font-mono text-sm max-h-80 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-2 space-y-0.5">
        {lines.map((line, i) => (
          <div key={i} className="text-[#4ade80]">{line}</div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 bg-transparent text-[#4ade80] outline-none font-mono text-sm"
          placeholder="Type here..."
          style={{ cursor: "text" }}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
