/* window.onload = ()=>{
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
} */

function gid(element){
    return document.getElementById(element)
}

window.addEventListener('load', ()=>{
    let inputName = gid('inputName'),
    category = gid('specificSizeSelect'),
    subcategory = gid('specificSelect'),
    inputPrice = gid('inputPrice'),
    inputDiscount = gid('inputDiscount'),
    inputImage = gid('inputImage'),
    descripcion = gid('validationTextarea'),     
    formId = gid('formId'),

    errorForm = gid('errorForm')
    errorName = gid('errorName'),
    errorCategory = gid('errorCategory'),
    errorSubcategory = gid('errorSubcategory'),
    errorPrice = gid('errorPrice'),
    errorDiscount = gid('errorDiscount'),
    errorImage = gid('errorImage'),
    errorDescription = gid('errorDescription'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]{2,}$/ ,
    regExNum = /^[0-9]{0,100}$/ ,
    regExDescription = /^[\w\s]{20,800}$/



        inputName.addEventListener('blur',()=>{
            switch (true) {
                case !inputName.value.trim():
                    inputName.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                    errorName.innerText = "Campo nombre es obligatorio"        
                    break;
                case !regExAlpha.test(inputName.value):
                        inputName.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                        errorName.innerText = "No se admiten caracteres especiales"      
                    break;
                default:
                    inputName.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
                    errorName.innerText = ""
                    break;
            }
        })





inputPrice.addEventListener('blur',()=>{
    switch (true) {
        case !inputPrice.value.trim():
            inputPrice.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
           errorPrice.innerText = "Campo precio es obligatorio"        
            break;
        case !regExNum.test(inputPrice.value):
                inputPrice.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
               errorPrice.innerText = "Solo se admiten números"      
            break;
        default:
            inputPrice.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
           errorPrice.innerText = ""
            break;
    }


})


inputDiscount.addEventListener('blur',()=>{
    switch (true) {
  
        case !regExNum.test(inputDiscount.value):
                inputDiscount.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
              errorDiscount.innerText = "Solo se admiten números"      
            break;
        default:
            inputDiscount.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
          errorDiscount.innerText = "" 
            break;
    }




})
 descripcion.addEventListener('blur',()=>{
    switch (true) {
        case !descripcion.value.trim():
             descripcion.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
            errorDescription.innerText = "Campo descripcion es obligatorio"        
            break;
        case !regExDescription.test( descripcion.value):
                 descripcion.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                errorDescription.innerText = "No se admiten menos de 20 caracteres y maximo 800"      
            break;
        default:
             descripcion.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
            errorDescription.innerText = ""
            break;
    }
})

inputImage.addEventListener('change', function fileValidation(){
        let filePath = inputImage.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            errorImage.innerText = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            inputImage.value = '';
            return false;
        }else{
           
            errorImage.innerText = '';
            inputImage.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            
        }
    })

    category.addEventListener('blur',()=>{
        switch (true) {
            case !category.value.trim():
                category.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                errorCategory.innerText = "Campo categoria es obligatorio"        
                break;
            case regExAlpha.test(category.value):
                    category.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                    errorCategory.innerText = "No se admiten caracteres especiales"      
                break;
            default:
                category.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
                errorCategory.innerText = ""
                break;
        }
    })

    subcategory.addEventListener('blur',()=>{
        switch (true) {
            case !subcategory.value.trim():
                subcategory.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                errorSubcategory.innerText = "Campo categoria es obligatorio"        
                break;
            case regExAlpha.test(subcategory.value):
                    subcategory.style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                    errorSubcategory.innerText = "No se admiten caracteres especiales"      
                break;
            default:
                subcategory.style.border = '3px rgba(14, 185, 90, 0.66) solid'     
                errorSubcategory.innerText = ""
                break;
        }
    })

    formId.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        let elementosForm = formId.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == "" && elementosForm[index].name !== "archivo"){
                if (index == '4') {
                    continue
                }
                elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)' 
                errorForm.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!error){
            formId.submit()
        }
    
    })
    
})