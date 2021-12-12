import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function persistModel(model) 
{
	console.log("model", model);
	console.log("username", model.username);
	console.log("userID", model.userID);

	let loadingFromFirebase = false; // boolean flag, used in a JS closure
	model.addObserver(async function () {
		if (loadingFromFirebase) return;
		try {
      loadingFromFirebase = true;
			const docRef = await addDoc(collection(db, "users"), {
				name: model.username,
				id: model.userID,
			});

			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	});
}
