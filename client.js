const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log("bye", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: SLN");
  });

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50)



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = {
  connect,
};