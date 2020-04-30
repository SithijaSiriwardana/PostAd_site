export const createAd = (ad) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_AD', ad });
    }
  };