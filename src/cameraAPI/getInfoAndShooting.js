const axios = require('axios');

//the following retreives the content (images/videos on camera) file names
// async function getContent() {
//   try {
//     console.log('getInfo is running...');
//     const response = await axios.get(
//       'http://172.14.12.99:8080/ccapi/ver100/contents/sd/100CANON'
//     );
//     console.log('response is!! ', response.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getContent();

//the following prompts the camera to take a picture
async function captureImage() {
  try {
    console.log('image being captured...');
    const response = await axios.post(
      'http://http://172.20.10.6:8080/ccapi/ver100/shooting/control/shutterbutton',
      { af: true }
    );
    console.log('image response is ', response.data);
  } catch (err) {
    console.log(err);
  }
}

captureImage();

// module.exports = { captureImage };
