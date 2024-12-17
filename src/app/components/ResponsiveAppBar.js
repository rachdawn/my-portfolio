"use client";
import * as React from "react";
// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#c19191",
      main: "#C19898",
      solid: "rgb(240, 208, 210)",
      dark: "#6B4F4F",
      darker: "#483434",
    },
    secondary: {
      main: "#707070",
      light: "#787276db", //fossil
      dark: "#616161",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgb(218,218,218)",
        },
        root: {
          mt: 5,
          fontFamily: "Roboto Mono, monospace",
          color: "#616161",
          "&:hover": {
            bgcolor: "rgb(240, 208, 210)",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto Mono, monospace",
          color: "#616161",
          "&:hover": {
            fontWeight: 600,
            bgcolor: "rgb(240, 208, 210)",
          },
        },
      },
    },
  },
});

const pages = ["Projects"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          position: "sticky",
          backgroundColor: "transparent",
          py: 0.75,
          px: 0,
        }}
      >
        <Container maxWidth="fullWidth">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component="a"
              href="/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LaptopMacRoundedIcon
                sx={{
                  mx: 1,
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "primary.main",
                  textDecoration: "none",
                }}
              >
                rl
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-end",
                display: "flex",
                alignContent: "right",
                p: "0.5rem",
                mr: -1,
              }}
            >
              <Tooltip title="Resume" arrow>
                <IconButton
                  onClick={() =>
                    window.open("https://flowcv.com/resume/fq67vtvo3c")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label="Resume"
                >
                  <FileOpenOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/rachel-little2121/"
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub" arrow>
                <IconButton
                  onClick={() => window.open("https://github.com/rachdawn")}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
