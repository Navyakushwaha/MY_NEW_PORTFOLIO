import { AppBar, Box, Button, Grid, colors, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TelegramIcon from '@mui/icons-material/Telegram';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function Navber()
{
    const[show , setShow]=useState(false);
        const[showProject , setShowProject]=useState(false);
        const[showContact , setShowContact]=useState(false);
    return(
        <>
          <Box sx={{ bgcolor: "#68f38dff)", height: "97%", width: "15%", mt: "50px", mr: "3px", borderRadius: "5px" }}>
                                  <Box sx={{ bgcolor: "white", height: "30%", mb: "10px", borderRadius: "5px" }}>
                                      <Box sx={{ pl: "25px", pt: "20px" }}><MenuOutlinedIcon /></Box>
                                      <Box sx={{ pl: "25px", pt: "20px" }}><BedtimeOutlinedIcon /></Box>
                                      <Box sx={{ pl: "25px", pt: "20px" }}><ShoppingCartIcon /></Box>
                                  </Box>
                                  <Box sx={{ bgcolor: "white", height: "70%", borderRadius: "5px", px: "5px" }}>
                                      <Box>
                                          <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "20px", hover: { color: "lightgreen" } }}>
                                              <PersonOutlineOutlinedIcon /><br />
                                              <Link>ABOUT US</Link>
                                              
                                          </Typography>
                                      </Box>
                                      <Box>
                                          <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
                                              <FeedOutlinedIcon /><br /> 
                                              <Link 
                                               onClick={() => setShow(!show)}
                                               >
                                             {show ? "Resume" : "Resume"}
                                              </Link>
                                          </Typography>
                                      </Box>
                                      <Box>
                                          <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
                                              < VisibilityIcon /><br />WORKS
                                          </Typography>
                                      </Box>
                                      <Box>
                                          <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
                                              <AssignmentOutlinedIcon /><br />
                                              <Link
                                               onClick={() => setShowProject(!showProject)}
                                               >
                                             {showProject ? "Project" : "Project"}
                                              </Link>
                                          </Typography>
                                      </Box>
                                      <Box>
                                          <Typography sx={{ borderBottom: 1, borderColor: "#c4bcbcff", fontSize: "12px", pt: "15px" }}>
                                              <TelegramIcon /><br />
                                              <Link 
                                              onClick={() => setShowContact(!showContact)}
                                              >
                                                  {showContact ? "Contact" : "Contact"}
                                              </Link>
                                          </Typography>
                                      </Box>
                                  </Box>
                              </Box>
        </>
    )
}
export default Navber