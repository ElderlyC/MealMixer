import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./App.css";
import OptionsRandomiser from "./Components/OptionsRandomiser";

const App: React.FC = () => {
  const savedOptions = localStorage.getItem("ingredients");
  const initialOptions = savedOptions
    ? JSON.parse(savedOptions)
    : [
        ["Noodles", "Sandwich", "Rice"],
        ["Chicken Breast", "Mince", "Steak"],
        ["Gravy", "BBQ Sauce", "Yoghurt Sauce"],
      ];

  const [options, setOptions] = useState<string[][]>(initialOptions);

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(options));
  }, [options]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Typography variant={"h1"}>MealMixer</Typography>
          <Typography variant={"h2"} sx={{ fontSize: "2rem", margin: "50px" }}>
            Choose your meal or generate a random mix!
          </Typography>
          <div>
            <Typography variant={"h3"} sx={{ fontSize: "1.7rem" }}>
              Add your ingredients here:
            </Typography>
            <div
              style={{
                display: "flex",
                margin: "30px",
                justifyContent: "space-between",
              }}
            >
              {options.map((option, index) => (
                <div key={index}>
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {["Base/carbs", "Meat/protein", "Sauce/seasoning"][index]}
                  </Typography>
                  <TextField
                    multiline
                    value={option.join(", ")}
                    onChange={(e) => {
                      let updatedOptions = [...options];
                      updatedOptions[index] = e.target.value.split(", ");
                      setOptions(updatedOptions);
                    }}
                  ></TextField>
                </div>
              ))}
            </div>
          </div>
          <OptionsRandomiser options={options} />
        </div>
      </header>
    </div>
  );
};

export default App;
