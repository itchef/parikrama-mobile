import firebase from "../../firebase";

export const fetchPandalList = cb => {
  firebase
    .firestore()
    .collection("pandals")
    .get()
    .then(snapshot => {
      const data = [];
      snapshot.docs.forEach(doc => {
        data.push(doc.data());
      });
      cb(data);
    });
};
