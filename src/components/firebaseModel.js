import { database } from "./firebaseConfig.js";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export default function persistModel(model) {
	let loadingFromFirebase = false; // boolean flag, used in a JS closure
	model.addObserver(async function () {
		console.log("model changed, RUNNING OBSERVER");
		if (loadingFromFirebase) return;
		if (!model.userID) return;
		if (!model.username) return;
		try {
			loadingFromFirebase = true;
			const docRef = await setDoc(doc(database, "users", model.userID), {
				name: model.username,
				id: model.userID,
			});
			loadingFromFirebase = false;

			console.log("Document written to Firebase Firestore");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	});
}
