process.on("message", (msg) => {
  console.log("---- Child process received data", msg);
  const data = msg.data;

  const cleaned = data.toUpperCase();

  process.send({ status: "done", cleaned });
});
