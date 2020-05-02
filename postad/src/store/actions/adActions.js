export const createAd = (ad) => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('ads').add({
      ...ad,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_AD_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_AD_ERROR' }, err);
    });
  }
  };