const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/data.json");

try {
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  console.log("Dados: carregados:", data);
} catch (error) {
  console.log("Erro ao carregar arquivo JSON:", error);
}
