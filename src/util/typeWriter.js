export default function typeWriter(){
    let i =0;
    let txt = "perspiciatis,\nunde omnis\nsit voluptatem"
    let txt2 = ["perspiciatis,", "unde omnis", "sit voluptatem"]
    let target = document.querySelector(".type-writer"); 
    function typeText(){
        if (i < txt.length) {
            let text = txt.charAt(i);
            target.innerHTML += text=== "\n" ? "<br/>": text 
            i++;
            setTimeout(typeText, 50);
        }else{
            const addSpan = document.createElement("span");
            target.append(addSpan);
        }
    }
    typeText();

    function typing(text, delay){

        for(let i=0;i<text.length;i++){
            setTimeout(()=>{
                // console.log(text[i]);
            }, i * 50)
        }   
    }
    typing(txt);
}
