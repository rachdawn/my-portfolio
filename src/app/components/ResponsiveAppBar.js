"use client";
import * as React from "react";
import Link from "next/link";
// import AboutDialog from "./AboutDialog";
// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(240, 208, 210)",
      solid: "rgb(240, 208, 210)",
      dark: "#B86782",
    },
    secondary: {
      main: "#707070",
      light: "#9e8e8e",
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
const email = `mailto:${process.env.EMAIL}`;

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
          backgroundColor: "secondary.light",
        }}
      >
        <Container maxWidth="fullWidth">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LaptopMacRoundedIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mx: 1,
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} dense>
                    <Link href="/#projects">
                      <Typography textAlign="center" fontFamily="monospace">
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <LaptopMacRoundedIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "#616161",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Roboto Mono, monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#616161",
                textDecoration: "none",
              }}
            >
              rl
            </Typography> */}
            <Box
              sx={{
                justifyContent: "flex-end",
                display: "flex",
                alignContent: "right",
                p: "0.5rem",
                mr: -1,
              }}
            >
              <Tooltip title="Open Resume" arrow>
                <IconButton
                  onClick={() =>
                    window.open("https://flowcv.com/resume/fq67vtvo3c")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label="Resume"
                  // sx={{
                  //   fontFamily: "Roboto Mono, monospace",
                  //   bgcolor: "main",
                  //   color: "primary.solid",
                  //   display: "flex",
                  // }}
                >
                  <FileOpenOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Contact Me (email)" arrow>
                <IconButton
                  component="a"
                  href={email}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label="Email"
                >
                  <EmailOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn Profile" arrow>
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

              {/* <IconButton
                href={phone}
                // target="_blank"
                rel="noopener noreferrer"
                color="secondary"
            >
                <PhoneOutlinedIcon />
            </IconButton> */}
              <Tooltip title="GitHub Profile" arrow>
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
