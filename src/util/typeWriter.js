export default function typeWriter(target, speed){
    for(let i=0; i<target.length;){
        let txt = target[i].innerHTML;
        for(let j =0 ; j< txt.length; j++){
            setTimeout(()=>{
                // target[i].innerHTML += txt.charAt(j);
            }, j * speed)           
        }

    }

}