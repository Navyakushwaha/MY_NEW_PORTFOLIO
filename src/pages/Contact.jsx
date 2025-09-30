import { AppBar, Box, Button, TextField, Grid, colors, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };
    return (
        <>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", margin: "15px", color: "#413f3fff", borderBottom: 1, borderColor: "#e7e2e2ff" }}>
                    <span className="style_A">G</span>et in Touch
                </Typography>

                <Box sx={{ bgcolor: "white", height: "100%", width: "50%", margin: "auto" }}>
                    <Typography sx={{ my: "10px", color: "gray" }}>
                        <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Email:</span><span className="info_txt2">navyakushwaha@gmail.com</span> </Box>
                        <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Contact:</span><span className="info_txt1">+91 7054078110</span></Box>
                        <Box sx={{ borderBottom: 1, py: "10px", borderColor: "#cec9c9ff" }}><span className="info">Address:</span><span className="info_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ghazipur</span></Box>
                    </Typography>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: "bold", margin: "25px", mt: "55px", color: "#413f3fff", borderBottom: 1, borderColor: "#ebe1e1ff" }}>
                    <span className="style_A">C</span>ontact Form
                </Typography>
                {/* <Input type="text"></Input> */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        Width: "100%",
                        mx: "auto",
                        mt: 0,
                        px: 3,
                        py:0,
                        
                    }}
                >
                   
                    <Box sx={{display:"flex",gap:3}}>
                        <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    </Box>
                    <Box></Box>
                    

                    <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        type="messsage"
                        value={formData.message}
                        onChange={handleChange}
                        margin="normal"
                        
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="#afababff"
                        
                        sx={{ mt:2,mb:4,background:"#dbd5d5ff",fontWeight:"bold",color:"#444343ff"}}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Contact;