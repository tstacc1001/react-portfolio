export default function typeWriter(){
    let domainTxt1 = "Hello,\nI'm David"
    let domainTxt2 = "\nWeb Developer"
    let target = document.querySelector(".type-writer"); 
    let typingArea = document.querySelector(".typer-area");
    let typingEff = document.createElement("span");
    typingEff.classList.add("typing");

    setTimeout(()=>{
        typingArea.appendChild(typingEff);
    }, 500)
    function typeText(text, speed){
        // if (i < text.length) {
        //     let givenText = text.charAt(i);
        //     target.innerHTML += givenText=== "\n" ? "<br/>": givenText 
        //     i++;
        //     setTimeout(typeText(text), 75);
        // }else{
            // const addSpan = document.createElement("span");
            // target.append(addSpan);
        // }
        for(let i=0;i<text.length;i++){
            setTimeout(()=>{
                target.innerHTML += text[i]=== "\n" ? "<br/>": text[i]
            }, speed * i)
        }
    }
    function addTypingEffect(){
        setTimeout(()=>{
            const addSpan = document.createElement("span");
            target.append(addSpan);
        }, 6700)
    }

    typer(domainTxt1, 1.5, 70);
    typer(domainTxt2, 3.5, 70);
    addTypingEffect();
    function typer(text, delay, speed){
        setTimeout(()=>{
            typeText(text, speed);
        }, delay * 1000);
    }

}
