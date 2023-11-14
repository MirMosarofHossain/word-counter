let textbox=document.getElementById("textbox");
textbox.addEventListener('input' , function(){
    var text=this.value;
    document.getElementById("char").innerHTML=text.length;
    
    text=text.trim();
    let word = text.split(" ");
    cleanWord = word.filter(function(elm){
        if(elm!=""){
            return elm;
        }
    });
    
    document.getElementById("word").innerHTML = cleanWord.length;
    
});

 