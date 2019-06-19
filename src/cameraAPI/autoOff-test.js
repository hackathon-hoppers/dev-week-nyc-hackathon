const axios = require("axios");

async function turnOff() {
  try {
    const response = await axios.put(
      "http://172.14.12.99:8080/ccapi/ver100/functions/autopoweroff",
      { value: "disable" }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
turnOff();
