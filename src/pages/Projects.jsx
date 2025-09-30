import { AppBar, Box, Button, TextField, Grid, colors, Toolbar, Typography } from "@mui/material"
import { useState } from "react";

const data =[
    {
        id:"",
        name:"RecruiterX",
        info:"RecruitrX is a full-stack recruitment website built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides an interactive React-based UI for job seekers and recruiters, uses Node.js with Express for backend APIs, and MongoDB for efficient data management, delivering a scalable and user-friendly hiring platform.",
        btn:"",
        image:"public/Recruiterx.png"
    },
    {
        id:"",
        name:"Wedding Planner",
        info:"Wedding Planner – A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a responsive UI for booking venues and services, with secure backend APIs and scalable database management to simplify wedding planning.",
        btn:"",
        image:"public/weddigPlanner.png"
    },
     {
        id:"",
        name:"RealEstateIndia",
        info:"RealestateIndia – A responsive real estate UI website built with React and Tailwind CSS, featuring clean design, interactive components, and a user-friendly interface for browsing property listings.",
        btn:"",
        image:"public/realstate.png"
    },
     {
        id:"",
        name:"Jawalary",
        info:"Jyash Jewelry Shop – A responsive UI website built with HTML, CSS, and JavaScript, featuring elegant design, product showcases, and interactive elements for an engaging shopping experience.",
        btn:"",
        image:"public/jayesh.png"
    },
     {
        id:"",
        name:"HR10x",
        info:"HR10x – A clean and responsive UI website built with HTML and CSS, featuring professional layouts, employee dashboards, and user-friendly design for HR management.",
        btn:"",
        image:"public/HR10x.png"
    },
     {
        id:"",
        name:"ISTUDIO",
        info:"ISTUDIO is a modern UI website built with HTML, CSS, and JavaScript, offering a visually appealing and interactive interface to showcase studio services and portfolios. HTML structures the content, CSS provides responsive styling, and JavaScript adds dynamic features for an engaging user experience.",
        btn:"",
        image:"public/Istdio.png"
    },
]
function Project()
{
    return(
        <>
        <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", margin: "15px", color: "#413f3fff", borderBottom: 1, borderColor: "#e7e2e2ff" }}>
                    <span className="style_A">P</span>rojects
            </Typography>
            <Box sx={{minHeight:"600px",width:"100%",background:"white"}}>

                    {data.map((item) =>(
                        <Box key={item.id}
                        sx={{height: "100%",  bgcolor: "white", borderBottom: 2, borderColor: "#787c79ff",p:"25px" ,margin: "15px"
                        }}>
                           
                           <Typography sx={{textAlign:"center",fontSize:"27px",fontWeight:"bold",mb:"10px",color:"#555755ff"}}>{item.name}</Typography>
                           <img className="project_img" src={item.image}/>
                           <Typography sx={{textAlign:"justify",mx:"30px",my:"20px",lineHeight:"22px",fontSize:"15px",color:"#333232ff"}}>{item.info}</Typography>
                        </Box>
                        
                    ))}

    
            </Box>
        </Box>
        </>
    )
}
export default Project;