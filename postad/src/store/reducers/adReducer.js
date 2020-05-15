

const initState = {
    ads: []
}

const adReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_AD_SUCCESS':
      console.log('create ad success');
      alert('create ad success');
      return state;
    case 'CREATE_AD_ERROR':
      console.log('create ad error');
      alert('create ad error');
      return state;
    default:
      return state;
  }
};

export default adReducer;