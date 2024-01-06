import { useState } from "react";
import {
  Box,
  Select,
  SelectChangeEvent,
  MenuItem,
  Button,
} from "@mui/material";

interface OptionsRandomiserProps {
  options: string[][];
}

const OptionsRandomiser: React.FC<OptionsRandomiserProps> = ({ options }) => {
  const [selectedOption1, setSelectedOption1] = useState(options[0][0]);
  const [selectedOption2, setSelectedOption2] = useState(options[1][0]);
  const [selectedOption3, setSelectedOption3] = useState(options[2][0]);

  const handleOptionChange = (
    e: SelectChangeEvent,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSelectedOption(e.target.value);
  };

  const handleRandom = () => {
    setSelectedOption1(
      options[0][Math.floor(Math.random() * options[0].length)]
    );
    setSelectedOption2(
      options[1][Math.floor(Math.random() * options[1].length)]
    );
    setSelectedOption3(
      options[2][Math.floor(Math.random() * options[2].length)]
    );
  };
  return (
    <div>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Select
          sx={{ width: "25%" }}
          onChange={(e: SelectChangeEvent<string>) =>
            handleOptionChange(e, setSelectedOption1)
          }
          value={selectedOption1}
        >
          {options[0].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Select
          sx={{ width: "25%" }}
          onChange={(e: SelectChangeEvent<string>) =>
            handleOptionChange(e, setSelectedOption2)
          }
          value={selectedOption2}
        >
          {options[1].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Select
          sx={{ width: "25%" }}
          onChange={(e: SelectChangeEvent<string>) =>
            handleOptionChange(e, setSelectedOption3)
          }
          value={selectedOption3}
        >
          {options[2].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <div
        style={{
          margin: "30px",
          fontSize: "2rem",
          fontWeight: "500",
          color: "darkblue",
        }}
      >
        {`${selectedOption2} ${selectedOption1} with ${selectedOption3}`}
      </div>
      <Button variant={"contained"} onClick={handleRandom}>
        Random!
      </Button>
    </div>
  );
};

export default OptionsRandomiser;
