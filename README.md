# Webbify

A web application created to search artists, songs and albums to get useful information!

# About Webbify

This is a project completed during winter 2021 in the course DH2642 Interaction Programming and the Dynamic web by
4 students at KTH. The aim of this project was to create a web application containing information about your favoirte artists, songs and album to get to know them better.

This application can be used to search your favourite songs and artists through the use of SpotifyAPI.
With the use of SpotifyAPI you can access millions of artists and songs from around the world. By adding which ever song or track to your user, you can access them whenever you want since our app allows for you to store them and delete them at will.

## Features (More to be implemented)

- Login with Spotify
- Search using SpotifyAPI
- Navigate
- Add favourite songs
- Add favourite albums
- Add favourite artists
- Save them to your specific user account

## Run Locally

### 1. Download or Clone this repo:

Start by cloning the repository to your local machine.

```
git clone https://github.com/Adde-h/DH2642-Project.git
```

### 2. Install node.js if not already installed:

[Follow the link](https://nodejs.org/en/)

### 3. Go to the project directory

```bash
  cd my-project
```

### 4. Install dependencies:

Navigate to the cloned repo’s directory and enter the following command

```
npm install     # To install all dependencies
```

### 5. Run the application:

#### Follow these stepes:

    1. Setup a database
    2. Setup the .env file with correct keys

```
npm run start
open http://localhost:3000 to view it in any browser of your choice.
```

### 7. Deployment:

This application uses Firebase Firestore as a cloud platform.

This application is up and running on : https://webbify.herokuapp.com/

## File Structure

### **/src/components**

Login.js: Use to login to Spotify

SpotifySource.js: Functions to fetch data from SpotifyAPI

firebaseConfig.js: Config file for firestore database

firebaseModel.js: Read & Write from database

promiseNoData.js: To handle our promises & data

SpotifyAPI.js: Config file for Spotify

### **/src/presenters**

MainPresenter.js: Used to render MainView

NavbarPresenter.js: Used to render Navbar

SidebarPresenter.js: Used to render Sidebar containing Artists, Playlists and Albums

ResultPresenter.js: Used to render the information regarding the selected artist, track or album

SearchPresenter.js: Used during search, maintains the different state regarding aspects of the search function such as type, errors that occur and the details of what has been found

### **/src/styles**

App.css: Containing some basic styles for App.js

home.css: Containing some styles for our views

index.css: Containing some styles for the index.html

images: Containing our logo

### **/src/views**

MainView.js: Contains what is shown for our main screen in the middle of the application

ResultView.js: The view to show the result after pressing an artist/album/song

SearchView.js: To display all the search results

SidebarView.js: Contains the whole sidebar information and data

### **/src**

App.js: Contains everything needed for the application to function and render

SpotifyModel.js: Our model for this application containing functions to set and save data, to be used more in the future

index.js: Where everything renders to the webpage

## Tools

**Client:** React, Git, NPM, dotenv, mui

**Server:** Node, Firebase Firestore

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Spotify Keys

    `REACT_APP_API_REDIRECTURI`  (used to store which redirect uri the api should use along with the application)

    `REACT_APP_API_CLIENTSECRET`  (used to store the client secret given from SpotifyAPI)

    `REACT_APP_API_CLIENTID` (stores client id from the SpotifyAPI)

)

#### Database Keys

    `REACT_APP_FIREBASE_API`

    `REACT_APP_FIREBASE_AUTHDOMAIN`

    `REACT_APP_FIREBASE_PROJECTID`

    `REACT_APP_FIREBASE_STORAGEBUCKET`

    `REACT_APP_FIREBASE_MESSAGINGSENDERID`

    `REACT_APP_FIREBASE_APPID`

    `REACT_APP_FIREBASE_MEASUREMENTID`

## Authors

- [@Adde-h](https://www.github.com/octokatherine)
- [@DanaIso](https://github.com/DanaIso)
- [@MehirWolde](https://github.com/MehirWolde)
- [@Danielmebrahtu](https://github.com/Danielmebrahtu)
