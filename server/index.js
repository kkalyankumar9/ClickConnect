const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    try {
      console.log(`Server running port at 8080`);
    } catch (error) {
      console.error(error);
    }
  });
  
