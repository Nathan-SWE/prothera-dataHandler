const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/data.json");

function loadJSONData(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.log("Erro ao carregar arquivo JSON:", error);
    return null;
  }
}
