const express = require("express");
const xsenv = require("@sap/xsenv");

const app = express();

const PORT = process.env.PORT || 5000;
console.log(PORT);

xsenv.loadEnv();
let destinationOptions = xsenv.getServices({
   destination: {
      tag: "destination",
   },
});

console.log("Destination option: ", destinationOptions);
console.log("Destination: ", destinationOptions.destination);

app.get("/", (req, res) => res.send("Hello from express"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
