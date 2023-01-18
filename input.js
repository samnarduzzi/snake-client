const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (data) {
    if (data === "w") {
      conn.on("connect", () => {
        conn.write("Move: up")
      })
    } else if (data === "a") {
      cconn.on("connect", () => {
        conn.write("Move: left")
      })
    } else if (data === "s"){
      conn.on("connect", () => {
        conn.write("Move: down")
      })
    } else if (data === "d") {
      conn.on("connect", () => {
        conn.write("Move: right")
      })
    }
    stdin.on("data", handleUserInput);
  }
  return stdin;
};

module.exports = {
  setupInput,
}