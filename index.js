const input=document.getElementById("input")


function display(num){
    input.value +=num ;
}

function calculate(){
    try{
        input.value=eval(input.value)
    }catch(error){
        alert('invalid')
    }
}

function clearall(){
   input.value= ""
}

function del(){
    input.value= input.value.slice(0,-1)
}