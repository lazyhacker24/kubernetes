const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Backend URL from environment variable
const BACKEND_URL = process.env.BACKEND_URL || "http://flask-backend-svc:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/data`);
    res.json({
      frontend: "Express Frontend",
      backend_response: response.data,
      status: "Running Successfully"
    });
  } catch (err) {
    res.json({
      frontend: "Express Frontend",
      backend_response: "Backend not reachable",
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express Frontend running on port ${PORT}`);
});
