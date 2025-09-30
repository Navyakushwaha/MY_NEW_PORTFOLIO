// import { AppBar, Box, Button,Grid, colors, Toolbar, Typography } from "@mui/material"
// import Face3RoundedIcon from '@mui/icons-material/Face3Rounded';
// import { Link } from "react-router-dom";
// import { Margin, Padding, Start } from "@mui/icons-material";
// import { FaSpotify } from "react-icons/fa";
// import { TbBrandNetflix } from "react-icons/tb";
// import Typewriter from "typewriter-effect";
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
// import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import GetAppIcon from '@mui/icons-material/GetApp';
// // import Resume from './Resume';

// const box = [
//     {
//         id:"1",
//         icon:"",
//         title:"Web developer",
//         para:"Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique."
//     },
//     {
//        id:"2",
//        icon:"",
//         title:"Web developer",
//         para:"Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique."
//     },
// ]

// function Home() {
//     return (
//         <>
//             <Box sx={{ height: "630px", background: "linear-gradient( #339174ff, #33bea7ff, #63df84ff)", display: "flex", gap: "4" }}>
//                 {/* static Box */}
//                 <Box sx={{ bgcolor: "#a0ebb4ff)", height: "520px", width: "1000px", ml: "40px", my: "40px", display: "flex" }}>
//                     <Box sx={{ bgcolor: "#68f38dff)", height: "97%", width: "15%", mt: "50px", mr: "3px", borderRadius: "5px" }}>
//                         <Box sx={{ bgcolor: "white", height: "30%", mb: "10px", borderRadius: "5px" }}>
//                             <Box sx={{ pl: "25px", pt: "20px" }}><MenuOutlinedIcon /></Box>
//                             <Box sx={{ pl: "25px", pt: "20px" }}><BedtimeOutlinedIcon /></Box>
//                             <Box sx={{ pl: "25px", pt: "20px" }}><ShoppingCartIcon /></Box>
//                         </Box>
//                         <Box sx={{ bgcolor: "white", height: "70%", borderRadius: "5px", px: "5px" }}>
//                             <Box>
//                                 <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "20px", hover: { color: "lightgreen" } }}>
//                                     <PersonOutlineOutlinedIcon /><br /><Link to="/">ABOUT US</Link>
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
//                                     <FeedOutlinedIcon /><br /> <Link to="/resume">RESUME</Link>
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
//                                     < VisibilityIcon /><br />WORKS
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
//                                     <AssignmentOutlinedIcon /><br /><Link to="/project">PROJECT</Link>
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
//                                     <TelegramIcon /><br /><Link to="/contact">CONTACT</Link>
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </Box>

//                     <Box sx={{ bgcolor: "white", height: "100%", width: "85%", mt: "20px", ml: "10px", borderRadius: "5px" }}>
//                         <Box sx={{ bgcolor: "lightblue", height: "55%" }}>
//                             {/* <img sx={} src="/my.png"/> */}
//                         </Box>
//                         <Box sx={{ bgcolor: "white", height: "45%", borderRadius: "5px" }}>
//                             <Box sx={{ bgcolor: "white", height: "75%", }}>
//                                 <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}>
//                                     Navya Kushwaha
//                                 </Typography>
//                                 <Box sx={{
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     height: "10px",
//                                     bgcolor: "white",
//                                     marginTop: "10px"
//                                 }}>
//                                     <Typography variant="h6" sx={{ color: "#43c09bff", fontWeight: "normal" }}>
//                                         <Typewriter
//                                             options={{
//                                                 strings: ["Welcome to My Website", "Full stack Developer", "Web developer"],
//                                                 autoStart: true,
//                                                 loop: true,
//                                                 delay: 70,
//                                                 deleteSpeed: 40,
//                                             }}
//                                         />
//                                     </Typography>
//                                 </Box>
//                                 <Box sx={{marginLeft:"200px",marginTop:"20px"}}><SportsSoccerOutlinedIcon/><GitHubIcon/></Box>
//                             </Box>

//                             <Box sx={{ bgcolor: "white", height: "25%", borderTop: 1, display: "flex" }}>
//                                 <Button variant="outelined" color="gray" sx={{ mx: "50px", px: "40px", borderRight: 1 }}><a href="#" sx={{ textColor: "gray", }}>DOWNLOAD CV <GetAppIcon/></a></Button>
//                                 <Button variant="outelined" color="gray"><a href="#">CONTACT ME <TelegramIcon/></a></Button>
//                                 {/* <Link href="#" sx={{height:"20px"}}>Download cv</Link>
//                                 <Link href="#" sx={{height:"20px"}}> Contact Me</Link> */}
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>
//    {/* Dynamic box */}
//                 <Box sx={{ bgcolor: "white", height: "470px", width: "1200px", mt: "80px", mb: "30px", mr: "40px", py: "0px", borderRadius: "5px",overflowY:"scroll"}}>
//                     <Box sx={{ bgcolor: "white", height: "50px" }}>
//                         <Typography varient="h1" sx={{ fontWeight: "bold", fontSize: "25px", margin: "15px" }}>
//                             About me
//                         </Typography>
//                     </Box>
//                     <Box sx={{ bgcolor: "lightblue", height: "200px", width: "100%", display: "flex", borderTop: 1, borderColor: "gray" }}>
//                         <Box sx={{ bgcolor: "white", height: "100%", width: "50%", borderRight: 1, borderColor: "gray" }}>
//                             <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"gray",mt:"20px",ml:"20px"}}>Hello! I’m Navya Kushwaha.</Typography><br/>
//                             <Typography varient="p" sx={{ ml:"12px", marginRight:"12px",color:"#575555ff"}}>
//                                 Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
//                             </Typography>
//                         </Box>
//                         <Box sx={{ bgcolor: "white", height: "100%", width: "50%" }}></Box>
//                     </Box>

//      {/* Services Section */}
//                   <Box sx={{ bgcolor: "white", height: "50px" }}>
//                         <Typography varient="h1" sx={{ fontWeight: "bold", fontSize: "25px", margin: "15px" }}>
//                             My Services
//                         </Typography>
                        
//                         <Box sx={{height:"250px",width:"100%",bgcolor:"lightblue"}}>
//                             <Box sx={{display:"flex"}}>
//                                {box.map((item)=>(
//                                 // <Grid container spacing={2}>
//                                 // <Grid item sx={6}>
                                    
//                                 // </Grid>
//                                 //  </Grid>
//                                  <Box key={item.id} sx={{height:"250px",width:"100%",bgcolor:"white",borderTop:1,borderRight:1,borderColor:"#a19f9fff"}}>
//                                     <Box sx={{height:"60px",width:"60px",mx:"auto" ,my:"20px",borderRadius:"50px",background:"#85e7caff"}}>{item.icon}</Box>
//                                     <Typography sx={{fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>{item.title}</Typography>
//                                     <Typography sx={{fontSize:"15px",color:"#686767ff",fontWeight:"medium",textAlign:"center",px:"20px",wordWrap:"break-word"}}>{item.para}</Typography>
//                                 </Box>
//                                ))}
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>

//                 {/* Services */}
                 
//             </Box>
//         {/* <Resume/> */}
//         </>
//     )
// }
// export default Home