# PhotoGram Create React App

A grid based photo gallery web site created using create-react-app, google firebase and framer motion library.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## components

1. Title
2. UploadForm
3. ProgressBar
4. Model
5. ImageGrid

## firebse Config

1.config

## hooks

1. useStorage
2. useFirestore

### `Title`

A simple functional component named "Title", in which h1,h2 and paragraph tag is used.

### `UploadForm`

Functional Component with useState hook for file and error. e = event object,

### `ProgressBar`

Functional component with useState and useEffect hooks and framer motion library.

### `Modal`

Functional component with framer-motion library. when a user click on any image a pop out image is shown.

### `ImageGrid`

Functional component with framer-motion library. how all images look after upload

### `firebase config`

web app`s Firebase configuration and use of "firebase storage" and "firestore"

### `useStorage`

Functional Component with use of "firebase storage" and "firestore".

ref - method from firebase.storage

it returns a reference.

put - method from firebase.storage.reference

it return object

on - method from firebase.storage.uploadtask

getDownloadUrl - fetch a long lived download url

### `useFirestore`

Functional Component with use of "useState" "forEach" method, "firebase storage" and "firestore".

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
