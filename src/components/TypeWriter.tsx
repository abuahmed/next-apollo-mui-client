import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

function TypeWriter() {
  const [text, setText] = useState("");
  React.useEffect(() => {
    loop();
  }, []);

  const phrases: string[] = [
    "Modern",
    "Mobile Friendly",
    "User Friendly",
    "Fast and Efficient",
    "Installable",
  ];
  let i = 0;
  let j = 0;
  let currentPhrase: string[] = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    isEnd = false;
    setText(currentPhrase.join(""));
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        setText(currentPhrase.join(""));
      }

      if (isDeleting && j > 0) {
        currentPhrase.pop();
        j--;
        setText(currentPhrase.join(""));
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
    const spedUp = 50;
    const normalSpeed = 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
  }
  const theme = useTheme();
  return (
    <Stack spacing={1}>
      <Typography variant="h2" component="div">
        Get websites that are: <br />
        <Typography
          fontWeight="700"
          variant="h2"
          sx={{
            color: theme.palette.secondary.main,
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          {text}|
        </Typography>
      </Typography>
    </Stack>
  );
}

export default TypeWriter;
