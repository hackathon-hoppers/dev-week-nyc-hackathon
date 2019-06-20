import axios from 'axios';

const GOT_FLASH = 'GOT_FLASH';
const GOT_EXPOSURE = 'GOT_EXPOSURE';
const GOT_ISO = 'GOT_ISO';

const gotFlash = flash => ({
  type: GOT_FLASH,
  flash,
});

const gotExposure = exposure => ({
  type: GOT_EXPOSURE,
  exposure,
});

const gotISO = iso => ({
  type: GOT_ISO,
  iso,
});

export const fetchFlash = zip => {
  let url = `http://192.168.1.2:8080/ccapi/ver100/shooting/settings/flash","get":true,"post":false,"put":true,"delete":false`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url);
      dispatch(gotFlash(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchExposure = zip => {
  let url = `http://192.168.1.2:8080/ccapi/ver100/shooting/settings/exposure","get":true,"post":false,"put":true,"delete":false`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url);
      dispatch(gotExposure(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchISO = zip => {
  let url = `http://192.168.1.2:8080/ccapi/ver100/shooting/settings/iso","get":true,"post":false,"put":true,"delete":false`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url);
      dispatch(gotISO(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const ZIP_UPDATED = 'ZIP_UPDATED';

const zipUpdated = (zip, weather) => ({
  type: 'ZIP_UPDATED',
  zip,
  weather,
});

export const updateZip = zip => {
  return dispatch => {
    dispatch(zipUpdated(zip));
    dispatch(fetchWeather(zip));
  };
};

const initialState = {
  weatherData: {},
  zip: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_WEATHER:
      return { ...state, weatherData: action.weather };
    case ZIP_UPDATED:
      return {
        ...state,
        zip: action.zip,
        weatherData: action.weather,
      };
    default:
      return state;
  }
}
