const ZIP_UPDATED = 'ZIP_UPDATED';

const zipUpdated = zip => ({
  type: 'ZIP_UPDATED',
  zip,
});

export const updateZip = () => {
  return dispatch => {
    dispatch(zipUpdated());
  };
};

let initialState = {
  zip: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ZIP_UPDATED:
      return {
        ...state,
        zip: action.zip,
      };
    default:
      return state;
  }
}
