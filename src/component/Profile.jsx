import Typewriter from "typewriter-effect";
import { AppBar, Box, Button, Grid, colors, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import TelegramIcon from '@mui/icons-material/Telegram';
function Profile()
{
    return(
      <>
         <Box sx={{ bgcolor: "white", height: "100%", width: "85%", mt: "20px", ml: "10px", borderRadius: "5px" }}>
                                 <Box sx={{ bgcolor: "lightblue", height: "55%" }}>
                                     
                                 </Box>
                                 <Box sx={{ bgcolor: "white", height: "45%", borderRadius: "5px" }}>
                                     <Box sx={{ bgcolor: "white", height: "75%", }}>
                                         <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}>
                                             Navya Kushwaha
                                         </Typography>
                                         <Box sx={{
                                             display: "flex",
                                             justifyContent: "center",
                                             alignItems: "center",
                                             height: "10px",
                                             bgcolor: "white",
                                             marginTop: "10px"
                                         }}>
                                             <Typography variant="h6" sx={{ color: "#43c09bff", fontWeight: "normal" }}>
                                                 <Typewriter
                                                     options={{
                                                         strings: ["Welcome to My Website", "Full stack Developer", "Web developer"],
                                                         autoStart: true,
                                                         loop: true,
                                                         delay: 70,
                                                         deleteSpeed: 40,
                                                     }}
                                                 />
                                             </Typography>
                                         </Box>
                                         <Box sx={{ marginLeft: "200px", marginTop: "20px" }}><SportsSoccerOutlinedIcon /><GitHubIcon /></Box>
                                     </Box>
         
                                     <Box sx={{ bgcolor: "white", height: "25%", borderTop: 1, display: "flex" }}>
                                         <Button variant="outelined" sx={{ mx: "50px", px: "40px" }}>
                                           <Link to="/" sx={{ textDecoration: "none", color: "black" }}>DOWNLOAD CV <GetAppIcon />
                                           </Link>
                                         </Button>
                                         <Button variant="outelined"><Link to="/">CONTACT ME <TelegramIcon /></Link></Button>
                                     </Box>
                                 </Box>
                             </Box>
      </>
    )
}
export default Profile