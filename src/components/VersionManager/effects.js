import firebase from "../../firebase";

export const fetchLatest = cb => {
  firebase
    .firestore()
    .collection("versions")
    .get()
    .then(snapshot => {
      let data;
      snapshot.docs.forEach(doc => {
        data = doc.data().latest;
      });
      cb(data);
    });
};
