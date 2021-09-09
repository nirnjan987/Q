var form=document.getElementById("myform")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search =document.getElementById("search").value


    var originalName=search.split(' ').join("")
      
      //alert(originalName)

     fetch('https://api.github.com/users/'+originalName+'/repos')


     .then((result)=> result.json())
     .then((data)=>{
         console.log(data)

         document.getElementById("result").innerHtml =`
         <tr>
         <th>"${data.url}"</th>
         `
         
     })

})