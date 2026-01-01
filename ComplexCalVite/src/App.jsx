import { useState } from "react";
import { evaluate } from "mathjs";

const buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",

  "sin","cos","tan",
  "log","ln","√",
  "π","e","^","x²",
  "!","mod","(", ")"
];

export default function App() {
  const [input, setInput] = useState("");
  const [isDegree, setIsDegree] = useState(true);

  const factorial = (n) => {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n === 0) return 1;
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
  };

  const handleClick = (value) => {
    if (value === "=") {
      calculate();
      return;
    }

    if (value === "AC") {
      setInput("");
      return;
    }

    if (value === "x²") {
      setInput(prev => prev + "^2");
      return;
    }

    if (value === "√") {
      setInput(prev => prev + "sqrt(");
      return;
    }

    if (value === "π") {
      setInput(prev => prev + "pi");
      return;
    }

    if (value === "e") {
      setInput(prev => prev + "e");
      return;
    }

    if (value === "sin" || value === "cos" || value === "tan") {
      setInput(prev => prev + value + "(");
      return;
    }

    if (value === "log") {
      setInput(prev => prev + "log10(");
      return;
    }

    if (value === "ln") {
      setInput(prev => prev + "log(");
      return;
    }

    if (value === "!") {
      setInput(prev => `factorial(${prev})`);
      return;
    }
    if (value === "mod") {
  setInput(prev => prev + " mod ");
  return;
}


    setInput(prev => prev + value);
  };

  const calculate = () => {
    try {
      let expr = input;

      if (isDegree) {
        expr = expr
          .replace(/sin\(/g, "sin(pi/180*")
          .replace(/cos\(/g, "cos(pi/180*")
          .replace(/tan\(/g, "tan(pi/180*");
      }

      const result = evaluate(expr, { factorial });
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="header">
        <h2>Scientific Calculator</h2>
        <button onClick={() => setIsDegree(!isDegree)}>
          {isDegree ? "DEG" : "RAD"}
        </button>
      </div>

      <div className="display">{input || "0"}</div>

      <div className="controls">
        <button onClick={() => setInput("")}>AC</button>
        <button onClick={() => setInput(prev => prev.slice(0, -1))}>⌫</button>
      </div>

      <div className="grid">
        {[
          "7","8","9","/",
          "4","5","6","*",
          "1","2","3","-",
          "0",".","=","+",
          "sin","cos","tan","!",
          "log","ln","√","x²",
          "π","e","^","mod",
          "(",")"
        ].map((btn, i) => (
          <button
            key={i}
            className={btn === "=" ? "equal" : ""}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
