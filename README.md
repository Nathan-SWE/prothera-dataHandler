# 📌 Projeto: Gerenciador de Usuários e Documentos

## 📖 Sobre o Projeto

Este projeto é um sistema de gerenciamento de usuários que processa dados armazenados em um arquivo JSON. Ele oferece funcionalidades para:

- Buscar um usuário pelo ID
- Listar usuários ordenados por idade (somente aqueles com CPF)
- Listar pessoas com idade superior a 50 anos
- Listar pessoas que não possuem CPF
- Listar todos os tipos de documentos únicos presentes nos dados
- **(NOVO!) Instruções SQL para consultar dados** 🆕

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **JavaScript**
- **File System (fs)** para leitura de arquivos JSON

## 📂 Estrutura do Projeto

```plaintext
📂 prothera-dataHandler
 ├── 📂 data
 │   ├── data.json    # Arquivo JSON com os dados dos usuários
 |   ├── queries.sql  # Arquivo SQL com instruções para listar os dados
 ├── 📂 src
 │   ├── main.js      # Script principal do projeto
 ├── README.md        # Documentação do projeto
```

## 🔧 Configuração e Execução

### 1️⃣ Clonar o repositório:

```sh
git clone https://github.com/nathan-SWE/prothera-dataHandler.git
cd prothera-dataHandler
```

### 2️⃣ Executar o script:

```sh
node src/main.js
```

## 📜 Funcionalidades

### 🔍 Buscar Usuário por ID

```javascript
function findUserByID(data, id) {
  return data.find((user) => user.id === id);
}
```

Esta função retorna os dados do usuário correspondente ao ID fornecido.

### 📋 Listar Usuários por Idade (Apenas com CPF)

```javascript
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
```

Lista apenas os usuários que possuem CPF, ordenados por idade crescente.

### 👴 Listar Pessoas com Idade Superior a 50 Anos

```javascript
function usersAgeGreaterThan50(data) {
  return data
    .filter((user) => user.age > 50)
    .map((user) => ({
      ID: user.id,
      Name: user.name,
      Age: user.age,
    }));
}
```

Lista todas as pessoas com idade superior a 50 anos.

### ❌ Listar Pessoas que Não Possuem CPF

```javascript
function listUsersWithoutCPF(data) {
  return data.filter((user) => !getCPF(user));
}
```

Lista todas as pessoas que não possuem CPF registrado.

### 📄 Listar Todos os Tipos de Documentos

```javascript
function listAllDocumentTypes(data) {
  const documentTypes = [
    ...new Set(data.flatMap((user) => user.documents.map((doc) => doc.type))),
  ];
  return documentTypes;
}
```

Gera uma lista de todos os tipos de documentos disponíveis, sem duplicatas.

## 🤝 Contribuição

Sinta-se à vontade para contribuir! Basta **forkar** o repositório, criar uma nova branch e enviar um **pull request**. Sugestões e melhorias são sempre bem-vindas! 🚀

## Autor

💡 **Desenvolvido por [Nathan Lima](https://github.com/nathan-swe)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nathan-swe) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nathan-swe/)
