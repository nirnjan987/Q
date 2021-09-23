function upload(){
    //get your image
    var image=document.getElementById('image').files[0];
    //get your blog text
    var post=document.getElementById('post').value;
    //get image name
    var imageName=image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('blogs/').push().set({
                 text:post,
                 imageURL:downloadURL
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}


document.querySelector("#submitBtn").addEventListener("click", function() {
  let postAuthor = document.querySelector("#author").value;
  let postTitle = document.querySelector("#postTitle").value;
  let postContent = document.querySelector("#postContent").value;
  let postDate = document.querySelector("#postDate").value;

  if (
    postAuthor === "" ||
    postTitle === "" ||
    postContent === "" ||
    postDate === ""
  ) {
    alert("Fields Empty");
  } else {
    db.collection("posts")
      .doc()
      .set({
        author: postAuthor,
        createdAt: postDate,
        postName: postTitle,
        postContent: postContent
      });
  }
});
