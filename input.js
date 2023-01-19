let connection;

const handleUserInput = function(key) {
  if (key === "q") {
    connection.write("q");
    process.exit();
  }
};

const movementInput = function(key) {
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

const sendMessage = function(key) {
  if (key === "t") {
    connection.write("Say: IM A SLITHERY SNAKE");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("data", movementInput);
  stdin.on("data", sendMessage);
  return stdin;
};



module.exports = {
  setupInput,
};