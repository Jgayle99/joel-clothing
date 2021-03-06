import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCFtqOXkxwWImsG8EvM4R39i0R3R15qhzI",
    authDomain: "joel-db.firebaseapp.com",
    databaseURL: "https://joel-db.firebaseio.com",
    projectId: "joel-db",
    storageBucket: "joel-db.appspot.com",
    messagingSenderId: "819125428230",
    appId: "1:819125428230:web:0105a9e42dac43be8ca387",
    measurementId: "G-69SVNLRWDK"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  //used for setup of collections and documents in firebase, temporary for setup
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj =>{
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

     return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) =>{
      const transformedCollection = collections.docs.map(doc => {
          const { title, items} = doc.data();

          return{
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });

      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;