"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProjectsSlider from "./ProjectsSlider";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EED6C4",
      main: "#C19898",
      dark: "#4A4A48",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto Mono, monospace",
        },
      },
    },
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="about" sx={{ pb: 8, height: { xs: "auto" } }}>
        <Box
          sx={{
            p: { xs: 1, md: 2 },
            pt: 2,
            my: "2rem",
            mx: { xs: "1rem", sm: "4rem", md: "6rem" },
            bgcolor: "#4d4d4a",
            color: "primary.main",
            boxShadow: "0 0 20px 20px rgba(0,0,0,0.2)",
            borderRadius: "1rem",
            fontFamily: "Roboto Mono, monospace",
          }}
        >
          {" "}
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ px: { xs: 1, md: 2 } }}
            >
              <Tab label="Who I Am" {...a11yProps(0)} />
              <Tab label="Skills" {...a11yProps(1)} />
              <Tab label="Favourite Projects" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            A dedicated and eager full-stack developer with a background in
            business administration and marketing. I have an eye for detail and
            a passion for crafting user-friendly applications. I pick up on the
            little things that make a big difference in the user experience. I
            love to learn and am always looking for ways to improve and grow.
            <br />
            <br />
            Earning my diploma in Full Stack Web Development from Lighthouse
            Labs was an experience that solidified my passion for coding. My
            training encompassed programming essentials such as JavaScript, CSS,
            and HTML, alongside in-depth studies in software architecture,
            databases, data modeling, and component-based design.
            <br />
            <br />
            In my free time you can find me spending time with my dogs, friends,
            & family, tending to my 30+ houseplants, watching the latest true
            crime documentary, or working on personal projects.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <b>Programming Languages:</b>
            <br />
            JavaScript, Ruby, HTML, CSS, SCSS, SQL
            <br />
            <br />
            <b>Frameworks & Libraries:</b>
            <br />
            React, Node.js, Next.js, Ajax, Express, EJS, jQuery, Rails, Material
            UI
            <br />
            <br />
            <b>Systems & Databases:</b>
            <br />
            PostgreSQL, Git, Stripe, Zoho
            <br />
            <br />
            <b>Testing:</b> <br />
            Mocha, Chai, Jest, Cypress, RSpec
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <ProjectsSlider />
          </CustomTabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
