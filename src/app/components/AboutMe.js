"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AboutMe() {
    return (
        <Box sx={{ m: 2, display: "flex" }}>
            <Box sx={{ p: 2, width: "45%" }}>
                <Typography
                    sx={{
                        fontFamily: "monospace",
                        color: "#616161",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        p: 1,
                        textAlign: "right",
                        textTransform: "uppercase",
                    }}
                >
                    Technologies I Work With:
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "monospace",
                        color: "#616161",
                        // fontWeight: 600,
                        letterSpacing: ".2rem",
                        fontSize: "1.1rem",
                        p: 1,
                        textAlign: "right",
                    }}
                >
                    <b>Programming Languages:</b>
                    <br />
                    JavaScript, Ruby, HTML, CSS, SCSS, SQL
                    <br />
                    <b>Frameworks & Libraries:</b>
                    <br />
                    NodeJS, ReactJS, Next.js, Ajax, Express, EJS, jQuery, Rails, Material
                    UI
                    <br />
                    <b>Systems & Databases:</b> <br />
                    PostgreSQL, Git, Visual Studio Code, Stripe
                    <br />
                    <b>Testing:</b> <br />
                    Mocha, Chai, Jest, Cypress, RSpec
                </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ p: 2, width: "55%" }}>
                <Typography
                    sx={{
                        fontFamily: "monospace",
                        color: "#616161",
                        fontWeight: 500,
                        lineHeight: 1.25,
                        letterSpacing: ".18rem",
                        fontSize: "1rem",
                        p: 1,
                    }}
                >
                    I&apos;m a full-stack web developer with a passion for creating beautiful
                    applications that deliver high-quality user experiences. I&apos;m a
                    strategic thinker with a versatile background in business
                    administration and marketing, ready to bring my unique blend of
                    business savviness and programming skills to dynamic projects.
                    <br />
                    <br />

                    As a graduate of the Lighthouse Labs Web Development Bootcamp, I
                    possess a diploma and a strong foundation in full-stack development.
                    My training encompassed front-end essentials such as JavaScript, CSS,
                    and HTML, alongside in-depth studies in software architecture,
                    databases, data modeling, and component-based design. Equipped with
                    real-world experience and vital soft skills, I am well-prepared to
                    embark on a fulfilling career as a full-stack developer.
                </Typography>
            </Box>
        </Box>
    );
}
