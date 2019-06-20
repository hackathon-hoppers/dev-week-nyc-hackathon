const axios = require("axios");

async function getLiveviewflip() {
  try {
    const response = await axios.post(
      "http://172.14.12.99:8080/ccapi/ver100/shooting/liveview",
      {
        liveviewsize: "small",
        cameradisplay: "on"
      }
    );

    const imageData = await axios.get(
      "http://172.14.12.99:8080/ccapi/ver100/shooting/liveview/flip"
    );

    console.log("imageData", imageData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getLiveviewflip };
