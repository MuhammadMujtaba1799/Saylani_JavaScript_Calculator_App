function getnumber(num){
    var result=document.getElementById("result")
    result.value+=num;
}
function clearResult(){
    var Clear=document.getElementById('result')
    Clear.value=""
}

function getresult(){
    var result=document.getElementById("result");
    result.value= eval(result.value)
    console.log(result.value)
}
