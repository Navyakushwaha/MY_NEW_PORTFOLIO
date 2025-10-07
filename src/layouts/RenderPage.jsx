import { AppBar, Box, Button, Grid, colors, Toolbar, Typography } from "@mui/material"
import { green } from "@mui/material/colors";
import { FaCode } from "react-icons/fa";
const box = [
    {
        id: "1",
        icon: <FaCode />,
        title: "Frontend Developer",
        para: "Passionate about creating visually appealing and highly responsive interfaces with modern technologies like React, Tailwind, Material UI, and Next.js."
    },
    {
        id: "2",
        icon: <FaCode />,
        title: "Backend Developer",
        para: "Experienced in building robust APIs, managing databases, and ensuring secure and scalable server-side logic"
    },
    {
        id: "3",
        icon: <FaCode />,
        title: "Web Developer",
        para: "End-to-end web development experience with full-stack projects, delivering complete and performant web applications"

    }
]

const tech = [
    {
        id: "1",
        img: "public/html.jpg",
        title: "HTML 5 ",
        para: "Semantic HTML, SEO, and accessibility best practices."
    },
    {
        id: "2",
        img: "public/css.jpg",
        title: "CSS 3 ",
        para: "Responsive layouts, Flexbox, Grid, and animations."
    },
    {
        id: "3",
        img: "public/bootstrap.jpg",
        title: "BootStrap",
        para: "Bootstrap utilities (spacing, typography, colors, flexbox)."
    },
    {
        id: "4",
        img: "public/js.jpg",
        title: "Java Script",
        para: "ES6+, async programming, and clean DOM scripting."
    },
    {
        id: "5",
        img: "public/react.jpg",
        title: "React.Js",
        para: "Hooks, component-driven UIs, performance optimization."
    },
    {
        id: "6",
        img: "public/ui.jpg",
        title: "Material UI",
        para: "Used with React projects for faster, cleaner, and scalable UI."
    },
    {
        id: "7",
        img: "public/db.jpg",
        title: "MongoDB",
        para: "NoSQL database design, queries, and Mongoose."
    },
    {
        id: "8",
        img: "public/Nodes.jpg",
        title: "Node.js",
        para: "Server-side logic, APIs, and event-driven architecture."
    },
    {
        id: "9",
        img: "public/sql2.jpg",
        title: "MySQL",
        para: "Store, retrieve, and manage data."
    },

]
function RenderPage() {
    return (
        <>
            <Box sx={{ bgcolor: "white", height: "470px", width: "680px", py: "10px", borderRadius: "5px", px: "20px" }}>

                <Box sx={{ bgcolor: "white", height: "50px" }}>
                    <Typography varient="h1" sx={{ fontWeight: "bold", fontSize: "25px", margin: "10px", color: "#413f3fff" }}>
                        <span className="style_A">I</span>ntroduction
                    </Typography>
                </Box>
                <Box sx={{ bgcolor: "lightblue", height: "200px", width: "100%", display: "flex", borderTop: 1, borderColor: "#e0dcdcff" }}>
                    <Box sx={{ bgcolor: "white", height: "100%", width: "50%", borderRight: 1, borderColor: "#e0dcdcff" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "gray", mt: "20px", ml: "20px" }}>Hello! I’m Navya Kushwaha. </Typography>
                        <Typography varient="p" sx={{ ml: "12px", marginRight: "12px", color: "#636262ff", py: "3px", px: "10px", fontWeight: "boldar" }}>
                            Hello! I’m a dedicated web developer with a love for learning and creating. I thrive on exploring new technologies and trends to ensure my projects meet the highest standards of quality and innovation.
                        </Typography>
                    </Box>
                    <Box sx={{ bgcolor: "white", height: "100%", width: "50%", p: "30px" }}>
                        <Typography sx={{ my: "10px", color: "gray" }}>
                            <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Age:</span><span className="info_txt">21</span> </Box>
                            <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Residence:</span><span className="info_txt1">Address</span></Box>
                            <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Address:</span><span className="info_txt1">Ghazipur</span></Box>
                            <span></span>
                        </Typography>
                    </Box>
                </Box>
                {/* SERVICES */}
                <Box sx={{ height: "full", width: "100%", py: "30px" }}>
                    <Typography varient="h1" sx={{ fontWeight: "bold", fontSize: "25px", mt: "25px", color: "#413f3fff" }}>
                        <span className="style_A">A</span>bout Me
                    </Typography>
                    <Box sx={{ height: "100%", width: "100%", bgcolor: "white", my: "20px" }}>
                        <Box container spacing={2} >
                            {box.map((item) => (
                                <Box key={item.id} sx={{
                                    height: "100%", width: "100%", bgcolor: "white", border: 1, borderColor: "#e0dcdcff", my: "10px", pb: "40px", transition: "0.5s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "scale(1)",
                                    },
                                }}>
                                    <Box sx={{ height: "60px", width: "60px", mx: "auto", my: "20px", borderRadius: "50px", background: "#81ec99ff" }}>
                                        <span className="icon">{item.icon}</span>
                                    </Box>

                                    <Typography sx={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", color: "#3d3b3bff" }}>{item.title}
                                    </Typography>

                                    <Typography sx={{ fontSize: "15px", color: "#686767ff", fontWeight: "medium", textAlign: "center", px: "70px" }}>{item.para}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                {/*  my tech stack */}

                <Box sx={{ height: "100%", py: "30px", }}>
                    <Typography varient="h1" sx={{ fontWeight: "bold", fontSize: "25px", mt: "25px", color: "#413f3fff" }}>
                        <span className="style_A">M</span>y Tech Stack
                    </Typography>
                    <Grid container spacing={2}>
                        {tech.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{
                                height: "100%", width: "250px", bgcolor: "white",borderRadius:"10px", py: "25px", my: "20px", mx: "10px", border: 1, borderColor: "#c2bcbcff", transition: "0.3s",
                                "&:hover": {
                                    boxShadow: 6,
                                    transform: "scale(1.05)",
                                },
                            }}>
                                <Box><img className="size" src={item.img} /></Box>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", color: "#3d3b3bff" }}>{item.title}
                                </Typography>

                                <Typography sx={{ fontSize: "15px", color: "#686767ff", fontWeight: "medium", mx: "10px", textAlign: "center" }}>{item.para}
                                </Typography>
                            </Grid>

                        ))}
                    </Grid>
                </Box>

                
            </Box>
        </>
    )
}
export default RenderPage