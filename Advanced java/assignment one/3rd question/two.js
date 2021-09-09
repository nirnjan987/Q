async function fetchAsync () {
    
    let response = await fetch('http://api.nobelprize.org/v1/prize.json');
    
    let data = await response.json();
 
    return data;
  }
  
  fetchAsync()
      .then(data =>{
        var prize=data.prizes
        
       prize=prize.filter(p=>p.year>=2000 &&p.year<=2019 && p.category=="chemistry" )

       console.log(prize)
        let Names=[]
        let Names1=[]
        for(i in prize)
        {
          let a=[]
          for(j in prize[i].laureates){
            Names1.push(prize[i].laureates[j].firstname+""+prize[i].laureates[j].surname)
          }
        Names.push(Names1)
        }
       console.log(Names)
               
         
      })
      .catch(reason => console.log(reason.message))