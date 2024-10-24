"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AboutDialog from "./AboutDialog";

const theme = createTheme({
  palette: {
    primary: {
        main: "#707070",
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
      {/* <AppBar
        position="sticky"
        backgroundColor="transparent"
        sx={{ top: "auto", bottom: 0, m: "0 auto", display: "flex" }}
      >
        <Toolbar sx={{ justifyContent: "center", display: "flex", p: 0 }}> */}
          <Box
          component="footer"
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              p: "0.125rem",
              bgcolor: "transparent",
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
                // lineHeight: 1.75,
                  letterSpacing: "0.0125rem",
              }}
            //   disableGutters
            >
              designed and developed by Rachel Little, built with Next.js
            </Typography>
            <IconButton
              onClick={() => window.open("https://github.com/rachdawn/my-portfolio")}
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
              <GitHubIcon sx={{ height: { xs: "1rem", sm: "1.15rem" }, width: { xs: "1rem", sm: "1.15rem" } }}/>
            </IconButton>
            </Box>
        {/* </Toolbar>
      </AppBar> */}
    </ThemeProvider>
  );
}
