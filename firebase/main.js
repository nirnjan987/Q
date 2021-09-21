
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
firebase.initializeApp(firebaseConfig);



function upload(){
   
    var image=document.getElementById('image').files[0];
    
    var post=document.getElementById('post').value;
    
    var imageName=image.name;
   
    var storageRef=firebase.storage().ref('images/'+imageName);
 
    var uploadTask=storageRef.put(image);
    
    uploadTask.on('state_changed',function(snapshot){
        
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
     
      console.log(error.message);
    },function(){
       
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           
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

window.onload=function(){
    this.getdata();
}


function getdata(){
    firebase.database().ref('blogs/').once('value').then(function(snapshot){
    
      var posts_div=document.getElementById('posts');
      
      posts.innerHTML="";
     
      var data=snapshot.val();
      console.log(data);
     
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
        "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
        "</div></div></div>"+posts_div.innerHTML;
      }
    
    });
}

function delete_post(key){
    firebase.database().ref('blogs/'+key).remove();
    getdata();

}