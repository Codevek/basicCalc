import { useState } from "react";
import Button from "./components/button";
import calculate from "../../engine/calc";

function App() {
  const [input, setInput] = useState("0");

  const requiredButtons = [
    { id: "allClear", title: "AC", className: "text-green-500" },
    { id: "delete", title: "DEL", className: "text-red-500" },
    { id: "percent", title: "%" },
    { id: "divide", title: "/" },
    { id: "7", title: "7" },
    { id: "8", title: "8" },
    { id: "9", title: "9" },
    { id: "multiply", title: "*" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
    { id: "6", title: "6" },
    { id: "minus", title: "-" },
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "add", title: "+" },
    { id: "00", title: "00" },
    { id: "0", title: "0" },
    { id: ".", title: "." },
    { id: "=", title: "=", className: "bg-amber-500" },
  ];

  const appendValue = (value) => {
    setInput((prev) => {
      if (prev === "0" && value !== ".") return value;
      if (value === "." && prev.includes(".")) return prev;
      return prev + value;
    });
  };

  const handleButtonClick = (item) => {
    if (item.id === "allClear") {
      setInput("0");
    } else if (item.id === "delete") {
      setInput((prev) => {
        const result = prev.slice(0, -1);
        return result === "" ? "0" : result;
      });
    } else if (item.id === "=") {
      const result = calculate(input);
      setInput(result.toString());
    } else if (["percent", "divide", "multiply", "minus", "add"].includes(item.id)) {
      appendValue(item.title);
    } else {
      appendValue(item.title);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-tr from-[#0a0a0a] via-zinc-900 to-[#3a4452] flex justify-evenly items-center">
      <div className="h-[80vh] w-[50vw] border border-[#717377] rounded-md shadow-md shadow-[#71737780] bg-zinc-900">
        <div className="h-[21%] text-zinc-100 flex items-center justify-end pl-6 pr-6 pb-1 pt-2">
          <span className="text-5xl">{input}</span>
        </div>
        <div className="h-[79%] grid grid-cols-4 grid-rows-5 gap-3 p-4">
          {requiredButtons.map((item) => {
            return (
              <Button
                key={item.id}
                title={item.title}
                className={item.className || "bg-zinc-800 text-zinc-200"}
                click={() => {
                  console.log("working");
                  handleButtonClick(item);
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
