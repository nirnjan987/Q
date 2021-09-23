// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyAG_id9d1KFKSb4hFKetR5klFU2HEUxW6o",
  authDomain: "first-project-a8e3f.firebaseapp.com",
  databaseURL: "https://first-project-a8e3f-default-rtdb.firebaseio.com",
  projectId: "first-project-a8e3f",
  storageBucket: "first-project-a8e3f.appspot.com",
  messagingSenderId: "178288379425",
  appId: "1:178288379425:web:8ea15c5de648ab9c43c560",
  measurementId: "G-T0PZVSVMXL"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
