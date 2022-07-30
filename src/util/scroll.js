export default function scroll(){
    const links = document.querySelectorAll("[id^='sectionLink']");
    const sections = document.querySelectorAll(".panel");
    // current section index
    let currSection = 1;
    // state navigating status
    let navigating = false;
    // scroll function
    
    links.forEach(link=>{
        // scroll link onClick trigger
        link.addEventListener('click', ()=>{
            // splits link id that comes after "sectionLink"
            let ref = link.id.split("sectionLink");
            // pass sectionlink index to scroll function
            scrollToSection(ref[1]);
        })
    })  
    links.forEach(curr =>{
        if(curr.id === "sectionLink"+currSection){
            if(curr.classList.contains("navigator")){
                curr.classList.add("nav-current");
            }
            if(curr.classList.contains("link")){
                curr.classList.add("link-current");
            }
        }else{
            curr.classList.remove("link-current", "nav-current")
        }
    })
    window.onscroll = function(e){  
        let currPos = window.scrollY % document.querySelector("#section"+currSection).offsetHeight;

        if(currPos === 0){
            navigating = false;
        }else{
            navigating = true;
        }
        links.forEach(curr =>{
            if(this.scrollY + (document.querySelector("#section"+currSection).offsetHeight / 2) > document.querySelector("#section"+curr.id.split("sectionLink")[1]).offsetTop){
                currSection = curr.id.split("sectionLink")[1];
                
            }
        })
        links.forEach(curr =>{
            if(curr.id === "sectionLink"+currSection){
                if(curr.classList.contains("navigator")){
                    curr.classList.add("nav-current");
                }
                if(curr.classList.contains("link")){
                    curr.classList.add("link-current");
                }
            }else{
                curr.classList.remove("link-current", "nav-current")
            }
        })
        
    }
    // onWheel event
    window.addEventListener('wheel' ,event => {
        event.preventDefault();
        if(!navigating){
            if(event.deltaY > 0){
                if(parseInt(currSection)+parseInt(Math.sign(event.deltaY)) > sections.length){
                    scrollToSection((parseInt(currSection)+parseInt(Math.sign(event.deltaY)))- sections.length);    
                }else{
                    scrollToSection(parseInt(currSection)+parseInt(Math.sign(event.deltaY)));
                }
            }
            if(event.deltaY < 0){
                if(parseInt(currSection)+parseInt(Math.sign(event.deltaY)) < 1){
                    scrollToSection(sections.length);  
                }else{
                    scrollToSection(parseInt(currSection)+parseInt(Math.sign(event.deltaY)));
                }
            }
        }
    }, {passive :false}); 

    function scrollToSection(targetLoc){
        let ref = "#section" + targetLoc;
        window.scroll({
            behavior: 'smooth',
            top: document.querySelector(ref).offsetTop
        })
    }

    document.addEventListener('keydown', (e)=>{
        if(!navigating){
            if(e.key === "ArrowUp"){
                if((parseInt(currSection)-1) < 1){
                    scrollToSection(sections.length);    
                }else{
                    scrollToSection(parseInt(currSection)-1);
                }   
            }
            if(e.key === "ArrowDown"){
                if(parseInt(currSection) + 1 >sections.length){
                    scrollToSection((parseInt(currSection)+ 1) - sections.length);    
                }else{
                    scrollToSection(parseInt(currSection) + 1);
    
                }
            }
        }
    })
}