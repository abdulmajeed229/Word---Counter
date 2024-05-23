let btn = document.getElementById('btn');
        
let text = document.getElementById('text');

let char = document.getElementById('char');
 





btn.addEventListener('click' , function(){

    let input = document.getElementById('input').value ;

    let textToArray = input.split(' ');

    let arrayLength = textToArray.length ;

text.innerText =  ' Word : '+ arrayLength 

let textToLeter = input.split('').length;

char.innerText =  ' Character '+ textToLeter 
})

