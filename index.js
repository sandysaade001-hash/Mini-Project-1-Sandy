import express from "express"; 
const app = express(); 
const port = 3000; 
app.get("/", (req, res) => { 
res.send("Hello World!"); 
}); 
app.get("/service", (req, res) => { 
//request 
const ipAddress = req.ip; 
const now = new Date(); 
//response 
res.status(200).json({ 
status: "success", 
message: "Service data retrieved successfully", 
data: { 
ip: ipAddress, 
datetime: now.toISOString(), 
}, 
}); 
}); 
// Endpoint yang mengembalikan button HTML 
app.get("/button", (req, res) => { 
res.send(` 
<button onclick="alert('Halo dari Server!')"> 
User Action 
</button> 
`); 
}); 

app.get("/service", (req, res) => {
  const ipAddress = req.ip;
  const now = new Date();

  res.status(200).json({
    status: "success",
    message: "Service data retrieved successfully",
    data: {
      ip: ipAddress,
      datetime: now.toISOString(),
    },
  });
});
app.get("/button", (req, res) => {
  res.send(`
    <button onclick="alert('Halo dari Server!')">
      User Action
    </button>
  `);
});
app.listen(port, () => { 
console.log(`Server is running on port http://localhost:${port}`);
});