const { dbConnect } = require("./database");
const server = require("./server");

const PORT = 8000;

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

dbConnect().then(() => startServer());
