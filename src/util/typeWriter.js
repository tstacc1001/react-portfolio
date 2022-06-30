export default function typeWriter(){
    let domainText = document.querySelectorAll(".type-writer"); 
    domainText.forEach(text =>{
        console.log(text);
    })
    for(let i=0; i<domainText.length; i++){
        setTimeout(()=>{
            domainText.innerText += domainText.charAt(i);  
        }, 300)
    }
}