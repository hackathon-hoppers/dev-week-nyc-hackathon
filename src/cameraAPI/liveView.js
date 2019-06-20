const axios = require("axios");

async function getLiveviewflip() {
  try {
    console.log("before post");
    const response = await axios.post(
      "http://172.20.10.6:8080/ccapi/ver100/shooting/liveview",
      {
        liveviewsize: "small",
        cameradisplay: "on"
      }
    );

    console.log("after post,before getting");
    const imageData = await axios.get(
      "http://172.20.10.6:8080/ccapi/ver100/shooting/liveview/flip"
    );
    console.log("got the data");
    console.log("imageData", imageData);
  } catch (err) {
    console.log(err);
  }
}
getLiveviewflip();
module.exports = { getLiveviewflip };
