//Satar Mardani WEB322-Lab2

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Define PORT once

app.get("/", (req, res) => {
  res.send(
    "Satar Mardani - WEB322-SEN-EAC594-FEB25 " + new Date().toISOString()
  );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
