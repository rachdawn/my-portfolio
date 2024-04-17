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
// import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(234, 205, 207, 0.35)",
      dark: "#B86782",
    },
    secondary: {
      main: "#707070",
      dark: "#616161",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgb(218,218,218,0.6)",
        },
        root: {
          mt: 5,
          fontFamily: "monospace",
          color: "#616161",
          "&:hover": {
            bgcolor: "rgb(234, 205, 207)",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "monospace",
          color: "#616161",
          "&:hover": {
            fontWeight: 600,
            bgcolor: "rgb(234, 205, 207)",
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
      <AppBar position="absolute">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LaptopMacRoundedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#616161",
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
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#616161",
                textDecoration: "none",
              }}
            >
              rl
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                    <Link href="/#projects" >
                      <Typography textAlign="center" fontFamily="monospace">
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LaptopMacRoundedIcon
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
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#616161",
                textDecoration: "none",
              }}
            >
              rl
            </Typography>
            {/* <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              <AboutDialog />
              <Button
                startIcon={<FileDownloadOutlinedIcon />}
                href="/files/Rachel-Little-FlowCV-Resume-20240408.pdf"
                download="Rachel-Little-FlowCV-Resume-20240408.pdf"
                sx={{
                  fontFamily: "monospace",
                //   color: "#B86782",
                  my: 2,
                  mx: 1,
                  bgcolor: "main",
                  color: "secondary.dark",
                  display: "flex",
                }}
              >
                Download Resume
              </Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
