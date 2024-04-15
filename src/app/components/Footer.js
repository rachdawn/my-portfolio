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
      main: "rgb(234, 205, 207)",
      dark: "#B86782",
    },
    secondary: {
      light: "#EEECEB",
      main: "#707070",
    },
  },
});

// const phone = `tel:${process.env.PHONE}`
const email = `mailto:${process.env.EMAIL}`

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, m: "0 auto", display: "flex" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
          {/* <Box sx={{ justifyContent: "left" }}>
          <AboutDialog />
        </Box> */}
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              p: "0.5rem",
            }}
          >
            {/* <Typography
              sx={{
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "secondary.dark",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: 1.75,
                  letterSpacing: "0.125rem",
              }}
              disableGutterBottom
            >
              connect with me
            </Typography> */}

            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/rachel-little2121/")
              }
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
                component="a"
                href={email}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
            >
                <EmailOutlinedIcon />
            </IconButton>
            {/* <IconButton
                href={phone}
                // target="_blank"
                rel="noopener noreferrer"
                color="secondary"
            >
                <PhoneOutlinedIcon />
            </IconButton> */}
            <IconButton
              onClick={() => window.open("https://github.com/rachdawn")}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box sx={{ justifyItems: "right", display: "flex" }}>
            {/* <Button
              startIcon={<FileDownloadOutlinedIcon />}
              href="/files/Rachel-Little-FlowCV-Resume-20240408.pdf"
              download="Rachel-Little-FlowCV-Resume-20240408.pdf"
              sx={{
                fontFamily: "monospace",
                bgcolor: "main",
                color: "secondary.dark",
                display: "flex",
              }}
            >
              Download Resume
            </Button> */}
            <Button
              onClick={() =>
                window.open("https://flowcv.com/resume/fq67vtvo3c")
              }
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FileOpenOutlinedIcon />}
              sx={{
                fontFamily: "monospace",
                bgcolor: "main",
                color: "secondary.dark",
                display: "flex",
              }}
            >
            View My Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
