const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/data.json");
const data = loadJSONData(filePath);
const searchID = 2;

function loadJSONData(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.log("Error when loading json file:", error);
    return null;
  }
}

function findUserByID(data, id) {
  return data.find((user) => user.id === id);
}

if (data) {
  const user = findUserByID(data, searchID);
  console.log(user ? "User found:" : "User not found:", user);
}

function getCPF(user) {
  const docCPF = user.documents.find((doc) => doc.type === "CPF");
  return docCPF ? docCPF.number : "CPF Not Found";
}
