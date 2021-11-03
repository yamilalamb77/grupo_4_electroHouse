window.onload = ()=>{
    document.getElementById('inputName').addEventListener('keypress',(event)=>{
        console.log('algo')
     
   
        valido = /^[a-zA-Z]{2,}$/.test(document.getElementById('inputName').value)
      
        if (valido) {
            //okey
            document.getElementById('inputName').style.border = '3px rgba(14, 185, 90, 0.66) solid'        
        }else{
            //error
            document.getElementById('inputName').style.border = '3px solid rgba(185, 14, 14, 0.66)'        
        } 
  

    })
}