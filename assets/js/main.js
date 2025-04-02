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
  return docCPF ? docCPF.number : null;
}

function listUserByAge(data) {
  return data
    .filter((user) => getCPF(user) !== null)
    .sort((a, b) => a.age - b.age)
    .map((user) => ({
      Name: user.name,
      Age: user.age,
      CPF: getCPF(user),
    }));
}

if (data) {
  const sortedUsers = listUserByAge(data);
  console.log("People with CPF ordered by age:", sortedUsers);
}

function usersAgeGreaterThan50(data) {
  return data
    .filter((user) => user.age > 50)
    .map((user) => ({
      ID: user.id,
      Name: user.name,
      Age: user.age,
    }));
}

if (data) {
  const elders = usersAgeGreaterThan50(data);
  console.log("People over 50 years old:", elders);
}

function listUsersWithoutCPF(data) {
  return data.filter((user) => !getCPF(user));
}

const peopleWithoutCPF = listUsersWithoutCPF(data);
console.log("Users without CPF:", peopleWithoutCPF);

function listAllDocumentTypes(data) {
  const documentTypes = [
    ...new Set(data.flatMap((user) => user.documents.map((doc) => doc.type))),
  ];
  return documentTypes;
}

const allDocumentTypes = listAllDocumentTypes(data);
console.log("All document types:", allDocumentTypes);
