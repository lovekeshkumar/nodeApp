const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const input = parseInt(req.query.number);

  if (isNaN(input)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide a valid integer number." });
  }
  let output = input;
  if (input % 5 === 0 && input % 7 === 0) {
    output = "LR";
  } else if (input % 5 === 0) {
    output = "L";
  } else if (input % 7 === 0) {
    output = "R";
  }
  res.json({ output });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
