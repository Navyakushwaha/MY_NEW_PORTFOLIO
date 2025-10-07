import { AppBar, Box, Button, Grid, colors, Toolbar, Typography } from "@mui/material"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from "@mui/icons-material/Circle";


function Resume() {

    const [progress, setProgress] = React.useState(0);

    const languages = [
        { name: "English", level: 6 },
        { name: "Hindi", level: 10 },

    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Box data-resume-content sx={{ width: "100%", background: "#fff" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: "15px", color: "#413f3fff" }}>
                    <span className="style_A">R</span>esume
                </Typography>
                <Box sx={{ height: "600px", width: "100%", backgroundColor: "white", display: "flex", borderTop: 1, borderColor: "#c5bfbfff", pb: "20px" }}>
                    <Box sx={{ height: "100%", width: "50%", background: "#fff", }}>
                        <Typography sx={{ textAlign: "center",color:"#3f3e3eff", borderBottom: 1, borderColor: "#f1e9e9ff", py: "15px", fontWeight: "bold" }}>
                            EXPERIENCE
                        </Typography>


                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2025-PRESENT</span>
                                    <Box sx={{ width: "100%"}}>
                                        <span>Internship</span><br />
                                        <span className="timeline-txt">6 months Internship from Techsima Solution Private Limited, Lucknow </span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2024</span>
                                    <Box sx={{ width: "100%"}}>
                                        <span>Summer Training</span><br />
                                        <span className="timeline-txt">45 Days summer training from Techpile Technology Pvt. Ltd.,Lucknow</span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>


                        </Timeline>
                    </Box>
                    <Box sx={{ height: "100%", width: "50%", background: "#fff", borderLeft: 1, borderColor: "#e9e4e4ff" }}>
                        <Typography sx={{color:"#3f3e3eff", textAlign: "center", borderBottom: 1, borderColor: "#f1e9e9ff", py: "15px", fontWeight: "bold" }}>
                            EDUCATION
                        </Typography>

                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2025-PRESENT</span>
                                    <Box sx={{ width: "100%", my: "0px" }}>
                                        <span>B.Tech (CSE)</span><br />
                                        <span className="timeline-txt">Sagar Institue Of Technology Management, Barabanki</span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2022-2025</span>
                                    <Box sx={{ width: "100%", my: "0px" }}>
                                        <span>Diploma</span><br />
                                        <span className="timeline-txt">Government Girls Polytechnic, Varanasi </span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2022</span>
                                    <Box sx={{ width: "100%", my: "15px" }}>
                                        <span>Inter</span><br />
                                        <span className="timeline-txt">Hanuman Singh Inter Collage Deokali, Ghazipur </span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><span className="timeline">2020</span>
                                    <Box sx={{ width: "100%", my: "15px" }}>
                                        <span>Highscool</span><br />
                                        <span className="timeline-txt">Hanuman Singh Inter Collage Deokali, Ghazipur  </span>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>

                    </Box>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: "bold", mt: "0px", ml: "25px", color: "#413f3fff" }}>
                    <span className="style_A">S</span>kills
                </Typography>
                <Box sx={{ height: "230px", width: "90%", backgroundColor: "white", m: "30px", display: "flex", borderTop: 1, borderColor: "#f3f0f0ff", pb: "20px" }}>

                    <Box sx={{ height: "100%", width: "50%", background: "white", borderRight: 1, borderColor: "#f1f0f0ff" }}>
                        <Typography sx={{ textAlign: "center", color:"#3f3e3eff",borderBottom: 1, borderColor: "#f1f0f0ff", mx: "20px", py: "15px", fontWeight: "bold" }}>
                            DESIGN
                        </Typography >

                        <Typography sx={{ mt: "10px", color: "gray", fontSize: "17px" }}>
                            WEB DESIGN
                        </Typography>
                        <Stack spacing={2} sx={{ flex: 1, mt: "10px", mr: "20px", color: "green" }}>
                            <LinearProgress determinate value={progress} />
                        </Stack>
                        
                        <Typography sx={{ mt: "10px", mr: "20px", color: "gray", fontSize: "17px" }}>
                            UI DESIGN
                        </Typography>
                        <Stack spacing={2} sx={{ flex: 1, mt: "10px", mr: "20px" }}>
                            <LinearProgress determinate value={progress} />
                        </Stack>
                    </Box>
                    <Box sx={{ height: "100%", width: "50%", background: "white" }}>
                        <Typography sx={{ textAlign: "center", color:"#3f3e3eff",borderBottom: 1, borderColor: "#f1f0f0ff", mx: "20px", py: "15px", fontWeight: "bold" }}>
                            LANGUAGES
                        </Typography>

                        <Box sx={{ width: "300px", m: 2 }}>
                            {languages.map((lang, index) => (
                                <Box key={index} sx={{ mb: 2, color:"#666666ff" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5 }}>
                                        {lang.name}
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        {[...Array(10)].map((_, i) => (
                                            <CircleIcon
                                                key={i}
                                                sx={{
                                                    fontSize: 18,
                                                    color: i < lang.level ? "lightgreen" : "#e0e0e0",
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ height: "400px", width: "100%", display: "flex" }}>
                    <Box sx={{ height: "100%", width: "50%", background: "white", borderRight: 1, borderColor: "#f1f0f0ff" }}>
                        <Typography sx={{ textAlign: "center",color:"#3f3e3eff" ,borderBottom: 1, borderColor: "#f1f0f0ff", mx: "20px", py: "15px", fontWeight: "bold" }}>
                            CODING
                        </Typography>
                        <Box sx={{height:"50%",width:"100%",display:"flex"}}> 
                            <Box sx={{height:"100%",width:"50%", pl:"10px"}}>
                                <Box sx={{height:"70%",width:"100%",p:"25px"}}>
                                    <Box sx={{height:"100%",width:"100%",border:"4px solid #54c250ff", borderRadius:"50% 50%"}}>
                                    <h3 style={{textAlign:"center",marginTop:"30px",color:"#333232ff"}}>45%</h3>
                                    </Box>
                                </Box>
                                <Box sx={{height:"30%",width:"100%"}}>
                                    <span className="tech">HTML/CSS/JS</span>
                                </Box>
                            </Box>
                            <Box sx={{height:"100%",width:"50%",pl:"10px"}}>
                                <Box sx={{height:"70%",width:"100%",p:"25px"}}>
                                    <Box sx={{height:"100%",width:"100%",border:"4px solid #54c250ff", borderRadius:"50% 50%"}}>
                                    <h3 style={{textAlign:"center",marginTop:"30px",color:"#333232ff"}}>45%</h3>
                                    </Box>
                                </Box>
                                <Box sx={{height:"30%",width:"100%"}}>
                                    <span className="tech">Mysql/MongoDB</span>
                                </Box>
                            </Box>
                              
                        </Box>
                        <Box sx={{height:"50%",width:"100%",display:"flex",pl:"10px"}}>
                             <Box sx={{height:"100%",width:"50%"}}>
                                <Box sx={{height:"70%",width:"100%",p:"25px"}}>
                                    <Box sx={{height:"100%",width:"100%",border:"4px solid #54c250ff", borderRadius:"50% 50%"}}>
                                    <h3 style={{textAlign:"center",marginTop:"30px",color:"#333232ff"}}>45%</h3>
                                    </Box>
                                </Box>
                                <Box sx={{height:"30%",width:"100%"}}>
                                    <span className="tech">MERN STACK</span>
                                </Box>
                            </Box>
                            <Box sx={{height:"100%",width:"50%"}}>
                                <Box sx={{height:"70%",width:"100%",p:"25px"}}>
                                    <Box sx={{height:"100%",width:"100%",border:"4px solid #54c250ff", borderRadius:"50% 50%"}}>
                                    <h3 style={{textAlign:"center",marginTop:"30px",color:"#333232ff"}}>45%</h3>
                                    </Box>
                                </Box>
                                <Box sx={{height:"30%",width:"100%"}}>
                                    <span className="tech">Talwind/MUI</span>
                                </Box>
                            </Box>
                        </Box>
                        
                        {/* <Stack sx={{m:"25px"}} spacing={2} direction="row">
                            <CircularProgress variant="determinate" value={55}><h1>hii</h1></CircularProgress>
                            <CircularProgress variant="determinate" value={75} />
                            <CircularProgress variant="determinate" value={92} />
                            <CircularProgress variant="determinate" value={85} />
                            <CircularProgress variant="determinate" value={100} />  
                        </Stack> */}
                        
                    </Box>
                    <Box sx={{ height: "100%", width: "50%", background: "white"}}>
                        <Typography sx={{ textAlign: "center",color:"#3f3e3eff", borderBottom: 1, borderColor: "#f1e9e9ff", mx: "20px", py: "15px", fontWeight: "bold" }}>
                            KNOWLEDGE
                        </Typography>
                        <Box sx={{p:"20px",color:"#666666ff"}}>
                            <Typography><span className="icon_sty"><FaCheck/></span>Hypertext Markup Language</Typography>
                            <Typography><span  className="icon_sty"><FaCheck/></span>CaseCading Stylesheet</Typography>
                            <Typography><span className="icon_sty"><FaCheck/></span>Java Script</Typography>
                            <Typography><span className="icon_sty"><FaCheck/></span>BootStrap</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
export default Resume;