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

export const filterPandals = (pandals, query) =>
  pandals.filter(
    ({ name, address, zone }) =>
      name.includes(query) || address.includes(query) || zone.includes(query)
  );
