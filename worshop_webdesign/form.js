function validateForm(){
     alert('i am in validateform function')
     let val=true; //let----used to declare variable
     let nameValue=document.formName.nameName.value;
     let phoneNo=document.formName.phone.value;
     let emailValue=document.formName.nameName.value;
     let genderSelected=document.querySelector('input[name=gender]:checked');
     
     console.log('nameValue>>',nameValue)
     console.log('phoneNo>>',phoneNo)
     console.log('emailValue>>',emailValue)
     console.log('genderSelected>>',genderSelected)

     if(nameValue.length<5){
          val=false;
     }
     if(phoneNo.length!=10){
          val=false;
     }
     
    // if(phoneNo.length<10 || phone.length>10){
    //    val=false;
    //}

    if(emailValue.length<15){
          val=false;
    }
    return val; 
}
//if we give true form will be accepted
//if we give false form will not be submitted

//this function is used to clear whatever we typed after pressing clear button
function resetForm(){
     document.formName.nameName.value=''
}
