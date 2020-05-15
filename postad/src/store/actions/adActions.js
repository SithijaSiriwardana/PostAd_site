export const createAd = (ad) => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('ads').add({
      ...ad,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_AD_SUCCESS' },window.location.replace("/yourads"));
    }).catch(err => {
      dispatch({ type: 'CREATE_AD_ERROR' }, err);
    });
  }
  };