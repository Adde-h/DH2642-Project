import { database } from "./firebaseConfig.js";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function persistModel(model) {
	let writingToDatabase = false;
	let readingFromDatabase = false;

	model.addObserver(async function () {
		if (writingToDatabase || !model.userID || !model.username) return;
		const document = doc(database, "users", model.userID);
		const getUser = await getDoc(document);

		// If the user exists, fetch data once from database
		if (getUser.exists() && model.firstTime === true) {
			console.log("User exists, model empty, fetching data");
			readingFromDatabase = true;
			model.playlists = getUser.data().playlists;
			model.artists = getUser.data().artists;
			model.albums = getUser.data().albums;
			model.notifyObservers();
			readingFromDatabase = false;
			model.firstTime = false;
		} 
		// If user exists, update data
		else if (getUser.exists() && model.addingToDatabase) {
			console.log("User exists, writing to database");
			writingToDatabase = true;
			await setDoc(document, {
				playlists: model.playlists,
				artists: model.artists,
				albums: model.albums,
			});
			model.addingToDatabase = false;
			writingToDatabase = false;
		}
		// If user doesn't exist, create user 
		else if (!getUser.exists()) {
			console.log("No such User!");
			try {
				writingToDatabase = true;
				await setDoc(document, {
					name: model.username,
					id: model.userID,
					playlists: [],
					artists: [],
					albums: [],
				});

				writingToDatabase = false;

				console.log("User written to Firebase Firestore");
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
	});
}
