"use client";
import * as React from "react";
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
      main: "rgb(234, 205, 207, 0.5)",
      dark: "#B86782",
    },
    secondary: {
      light: "#EEECEB",
      main: "#707070",
    },
  },
});
const pages = ["About Me", "Contact"];

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
                color: "secondary.dark",
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
                color: "secondary.dark",
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LaptopMacRoundedIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "secondary.dark",
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
                color: "secondary.dark",
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
