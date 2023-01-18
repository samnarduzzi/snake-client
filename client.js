const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log("bye", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server")
  })
  
  conn.on("connect", () => {
    conn.write("Name: SLN")
  })

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50)
  

  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};



module.exports = {
  connect,
}