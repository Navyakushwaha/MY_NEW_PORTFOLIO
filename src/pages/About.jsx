import {
  AppBar,
  Box,
  Button,
  Grid,
  colors,
  Toolbar,
  Typography,
  Step,
  StepLabel,
} from "@mui/material";
import Face3RoundedIcon from "@mui/icons-material/Face3Rounded";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Margin, Padding, Start } from "@mui/icons-material";
import { FaSpotify } from "react-icons/fa";
import { TbBrandNetflix } from "react-icons/tb";
import { jsPDF } from "jspdf";
import AOS from "aos";
import "aos/dist/aos.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TelegramIcon from "@mui/icons-material/Telegram";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";
import XIcon from "@mui/icons-material/X";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Contact from "./Contact";
import Resume from "./Resume";
import Project from "./Projects";
import RenderPage from "../layouts/RenderPage";
import { ImTextColor } from "react-icons/im";
import html2canvas from "html2canvas";
import "../index.css";
const box = [
  {
    id: "1",
    icon: "",
    title: "Web developer",
    para: "Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.",
  },
  {
    id: "2",
    icon: "",
    title: "Web developer",
    para: "Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.",
  },
];

function About() {
  const [state, setState] = useState("light-mode");
  const change = () => {
    if (state === "light-mode") {
      setState("dark-mode");
    } else {
      setState("light-mode");
    }
  };

  useEffect(() => {
    document.querySelector("body").className = state;
  }, [state]);

  const [page, setPage] = useState("home");
  function renderPage() {
    switch (page) {
      case "about":
        return <RenderPage />;
      case "resume":
        return <Resume />;
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return <RenderPage />;
    }
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const generatePDF = async () => {
    try {
      setPage("resume");
      await new Promise((resolve) => setTimeout(resolve, 500));
      const dynamicBox = document.querySelector("[data-dynamic-box]");
      const resumeBox = document.querySelector("[data-resume-content]");

      if (!resumeBox || !dynamicBox) {
        alert("Not found Resume. Please try again.");
        return;
      }
      const originalOverflow = dynamicBox.style.overflowY;
      const originalHeight = dynamicBox.style.height;
      dynamicBox.style.overflowY = "visible";
      dynamicBox.style.height = "auto";
      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(resumeBox, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowHeight: resumeBox.scrollHeight,
        height: resumeBox.scrollHeight,
      });

      dynamicBox.style.overflowY = originalOverflow;
      dynamicBox.style.height = originalHeight;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      //if content more than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("Navya_Kushwaha_Resume.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Resume content not found. Please try again.");
    }
  };

  return (
    <>
      <Box sx={{ height: "630px", display: "flex", gap: "4" }}>
        {/* static Box */}
        <Box
          sx={{
            bgcolor: "#a0ebb4ff)",
            height: "520px",
            width: "1000px",
            ml: "40px",
            my: "40px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* NAVBAR */}
          <Box
            className="navbar"
            sx={{
              height: "97%",
              width: "15%",
              mt: "50px",
              mr: "3px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                height: "30%",
                mb: "10px",
                borderRadius: "5px",
              }}
            >
              <Box sx={{ pt: "20px" }}>
                <MenuOutlinedIcon />
              </Box>
              <Box onClick={change} sx={{ pt: "20px" }}>
                {state == "light-mode" ? (
                  <LightModeIcon />
                ) : (
                  <BedtimeOutlinedIcon />
                )}
              </Box>
              <Box sx={{ pt: "20px" }}>
                <ShoppingCartIcon />
              </Box>
            </Box>
            <Box
              sx={{
                bgcolor: "white",
                height: "70%",
                borderRadius: "5px",
                px: "4px",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    borderBottom: 1,
                    borderColor: "#c4bcbcff",
                    fontSize: "5px",
                    pt: "5px",
                    color: "#444343ff",
                  }}
                >
                  <PersonOutlineOutlinedIcon />
                  <Button
                    sx={{ color: "#444343ff", fontWeight: "bolder" }}
                    onClick={() => setPage("about")}
                  >
                    About
                  </Button>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    borderBottom: 1,
                    borderColor: "#c4bcbcff",
                    fontSize: "5px",
                    pt: "5px",
                    color: "#444343ff",
                  }}
                >
                  <FeedOutlinedIcon />
                  <Button
                    sx={{ color: "#444343ff", fontWeight: "bolder" }}
                    onClick={() => setPage("resume")}
                  >
                    Resume
                  </Button>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    borderBottom: 1,
                    borderColor: "#c4bcbcff",
                    fontSize: "5px",
                    pt: "5px",
                    color: "#444343ff",
                  }}
                >
                  <VisibilityIcon />
                  <Button sx={{ color: "#444343ff", fontWeight: "bolder" }}>
                    WORKS
                  </Button>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    borderBottom: 1,
                    borderColor: "#c4bcbcff",
                    fontSize: "5px",
                    pt: "5px",
                    color: "#444343ff",
                  }}
                >
                  <AssignmentOutlinedIcon />
                  <Button
                    sx={{ color: "#444343ff", fontWeight: "bolder" }}
                    onClick={() => setPage("project")}
                  >
                    Project
                  </Button>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    borderBottom: 1,
                    borderColor: "#c4bcbcff",
                    fontSize: "5px",
                    pt: "5px",
                    color: "#3f3e3eff",
                  }}
                >
                  <TelegramIcon />
                  <Button
                    sx={{ color: "#444343ff", fontWeight: "bolder" }}
                    onClick={() => setPage("contact")}
                  >
                    Contact
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* TYPE WRITER SECTION */}
          <Box
            sx={{
              bgcolor: "white",
              height: "100%",
              width: "85%",
              mt: "20px",
              ml: "10px",
              borderRadius: "10px",
            }}
          >
            <Box
              className="self_img"
              sx={{
                bgcolor: "white",
                height: "55%",
                borderRadius: "0 0 0px 0px",
                boxshadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              {/* <img className="self_img" src="public/my_pic.png" /> */}
              <Box
                data-aos="zoom-in"
                className="my_img"
                sx={{ height: "100%", width: "70%", m: "auto" }}
              ></Box>
            </Box>
            <Box sx={{ bgcolor: "white", height: "45%", borderRadius: "10px" }}>
              <Box
                sx={{ bgcolor: "white", height: "75%", borderRadius: "10px" }}
              >
                <Typography
                  data-aos="fade-up-right"
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "10px",
                    color: "#474646ff",
                  }}
                >
                  Navya Kushwaha
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10px",
                    bgcolor: "white",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#52f074ff", fontWeight: "medium" }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Welcome to My Website",
                          "Full stack Developer",
                          "Web developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        deleteSpeed: 40,
                      }}
                    />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginLeft: "160px",
                    marginTop: "40px",
                    color: "#313030ff",
                  }}
                >
                  <FaDribbble />
                  &nbsp;&nbsp;&nbsp;
                  <FaXTwitter />
                  &nbsp;&nbsp;&nbsp;
                  <FaGithub />
                  &nbsp;&nbsp;&nbsp;
                  <PiSpotifyLogoFill />
                  &nbsp;&nbsp;&nbsp;
                  <FaStackOverflow />
                </Box>
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  height: "25%",
                  borderTop: 1,
                  borderColor: "#8b8a8aff",
                  display: "flex",
                  borderRadius: "0px 0px 6px 6px",
                }}
              >
                <Button
                  className="Btn_cv"
                  sx={{ mx: "60px", px: "0px" }}
                  onClick={generatePDF}
                >
                  <span className="cv_btn" style={{ cursor: "pointer" }}>
                    <span style={{ color: "black" }}>DOWNLOAD CV</span>
                    <GetAppIcon />
                  </span>
                </Button>
                <Button>
                  <Link className="cv_btn" to="/">
                    CONTACT ME <TelegramIcon />
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Dynamic box [ABOUT ME]*/}
        <Box
          data-dynamic-box
          sx={{
            bgcolor: "white",
            height: "470px",
            width: "1200px",
            mt: "80px",
            mb: "30px",
            mr: "40px",
            py: "0px",
            borderRadius: "5px",
            overflowY: "scroll",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </>
  );
}
export default About;
