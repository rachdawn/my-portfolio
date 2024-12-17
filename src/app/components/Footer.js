"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EED6C4",
      dark: "#B86782",
    },
    secondary: {
      light: "#EEECEB",
      main: "rgb(234, 205, 207)",
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        //   p: "0.5rem",
          bgcolor: "transparent",
          position: "absolute",
          height: "2rem",
          width: "100%",
          bottom: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            color: "primary.main",
            bgcolor: "transparent",

            textAlign: "center",
            fontWeight: 500,
            fontSize: { xs: "0.5rem", sm: "0.7rem" },
            letterSpacing: "0.0125rem",
          }}
        >
          designed and developed by Rachel Little, built with Next.js
        </Typography>
        <IconButton
          onClick={() =>
            window.open("https://github.com/rachdawn/my-portfolio")
          }
          target="_blank"
          rel="noopener noreferrer"
          color="primary.main"
          size="small"
          aria-label="GitHub"
          sx={{
            color: "primary.main",
            p: "0.25rem",
          }}
        >
          <GitHubIcon
            sx={{
              height: { xs: "1rem", sm: "1.15rem" },
              width: { xs: "1rem", sm: "1.15rem" },
            }}
          />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}
