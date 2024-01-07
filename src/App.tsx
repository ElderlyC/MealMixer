import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
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

  const handleOptionChange = (index: number, newValue: string) => {
    let updatedOptions = [...options];
    updatedOptions[index] = newValue.split(", ");
    setOptions(updatedOptions);
  };

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(options));
  }, [options]);

  return (
    <div className="App">
      <header className="App-header" style={{ maxWidth: "100%" }}>
        <div style={{ maxWidth: "100%" }}>
          <Typography
            sx={{
              "@media (max-width:600px)": { fontSize: "3rem" },
            }}
            variant={"h1"}
          >
            MealMixer
          </Typography>
          <Typography
            variant={"h2"}
            sx={{
              fontSize: "2rem",
              margin: "50px",
              "@media (max-width:600px)": {
                fontSize: "1.2rem",
                margin: "20px",
              },
            }}
          >
            Choose your meal or generate a random mix!
          </Typography>
          <div>
            <Typography
              variant={"h3"}
              sx={{
                fontSize: "1.7rem",
                "@media (max-width:600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Add your ingredients here:
            </Typography>
            <Box
              sx={{
                display: "flex",
                margin: "30px",
                justifyContent: "space-between",
                "@media (max-width:600px)": {
                  marginTop: "10px",
                },
              }}
            >
              {options.map((option, index) => (
                <div key={index}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      "@media (max-width:600px)": { fontSize: "0.8rem" },
                    }}
                  >
                    {["Base/carbs", "Meat/protein", "Sauce/seasoning"][index]}
                  </Typography>
                  <TextField
                    InputProps={{
                      sx: {
                        "@media (max-width:600px)": { fontSize: "0.6rem" },
                        fontSize: "1rem",
                      },
                    }}
                    multiline
                    value={option.join(", ")}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  ></TextField>
                </div>
              ))}
            </Box>
          </div>
          <OptionsRandomiser options={options} />
        </div>
      </header>
    </div>
  );
};

export default App;
