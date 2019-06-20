import axios from 'axios';
let { apiKey } = require('../secrets');

const GOT_WEATHER = 'GOT_WEATHER';
const FAKE_TORNADO = 'FAKE_TORNADO'

const gotWeather = weather => ({
  type: GOT_WEATHER,
  weather,
});

const fakeTornado = () => ({
  type: FAKE_TORNADO
})

export const fetchWeather = zip => {
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url);
      console.log('data', data.main);
      // dispatch(gotWeather(data));
      dispatch(gotWeather(data.weather[0]));
    } catch (error) {
      console.error(error);
    }
  };
};


  export const tornadoToggle = () => {
    return dispatch => {
      dispatch(fakeTornado());
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
  isTornado: false
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
      case FAKE_TORNADO:
        let isTornado = !state.isTornado
        return {
          ...state, isTornado: isTornado
        }
    default:
      return state;
  }
}
