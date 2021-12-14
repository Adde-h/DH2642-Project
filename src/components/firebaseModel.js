import { database } from "./firebaseConfig.js";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function persistModel(model) {

	let writingToDatabase = false; 
	let readingFromDatabase = false;

	model.addObserver(async function () {
		console.log("model changed, RUNNING OBSERVER");

		if (writingToDatabase || !model.userID || !model.username) return;
		const document = doc(database, "users", model.userID);
		const getUser = await getDoc(document);

		/* Fetch user data from database */
		if (
			getUser.exists &&
			model.playlists.length === 0 &&
			model.artists.length === 0 &&
			model.albums.length === 0
		) {
			readingFromDatabase = true;
			console.log("User data:", getUser.data());
			model.playlists = getUser.data().playlists;
			model.artists = getUser.data().artists;
			model.albums = getUser.data().albums;
			model.notifyObservers();
			readingFromDatabase = false;
		} else if (
			getUser.exists &&
			(model.playlists.length > 0 ||
				model.artists.length > 0 ||
				model.albums.length > 0)
		) {
			writingToDatabase = true;
			await setDoc(document, {
				playlists: model.playlists,
				artists: model.artists,
				albums: model.albums,
			});

			writingToDatabase = false;

		} else {
			console.log("No such User!");
			/* Add User to database */
			try {

				writingToDatabase = true;
				
				await setDoc(document, {
					name: model.username,
					id: model.userID,
					playlists: model.playlists,
					artists: model.artists,
					albums: model.albums,
				});

				writingToDatabase = false;

				console.log("User written to Firebase Firestore");
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
	});
}
