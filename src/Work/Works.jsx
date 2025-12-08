import { AppBar, Box, Button, TextField, Grid, colors, Toolbar, Typography } from "@mui/material"

const block =[

  {
    id:"",
    image:"",
    title:"hii"
  },
  {
    id:"",
    image:"../public/my.png",
    title:"he"
  }
]
function Works() {
  return (
    <>
      <Box sx={{width:"680px",minHeight:"700px"}}>
        <Typography variant="h5" sx={{ fontWeight:"bold" ,margin: "15px", color: "#413f3fff", borderBottom: 1, borderColor: "#e7e2e2ff" }}>
          <span className="style_A">W</span>orks 
        </Typography>

        <Box sx={{height:"600px",maxWidth:"100%",display:"flex"}}>
           <Box sx={{width:"50%",height:"500px",background:"#e78d8dff"}}>
              <Box container spacing={2}>
                  {block.map((item) => (
                    <Box key={item.id} sx={{height:"100px", width:"100%", background:"rgba(145, 145, 135, 1)"}}>
                       <Box>{item.image}</Box>
                       <Typography>{item.title}</Typography>
                    </Box>
                  ))}
              </Box>
           </Box>
           <Box sx={{width:"50%",height:"500px",background:"#ebe4e4ff"}}>hello</Box>
        </Box>
      </Box>
    </>
  )
}
export default Works