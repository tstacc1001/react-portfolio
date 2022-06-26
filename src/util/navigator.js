export default function navigator(){
    const links = document.querySelectorAll("[id^='sectionLink']");
    const sections = document.querySelectorAll(".panel");
    // current section index
    let currSection = 1;
    // scroll function
    function scrollToSection(targetLoc){
        let ref = "#section" + targetLoc;
        window.scroll({
            behavior: 'smooth',
            top: document.querySelector(ref).offsetTop
        })
    }
    links.forEach(link=>{
        // scroll link onClick trigger
        link.addEventListener('click', ()=>{
            // splits link id that comes after "sectionLink"
            let ref = link.id.split("sectionLink");
            // pass sectionlink index to scroll function
            scrollToSection(ref[1]);
        })

        window.onscroll = function(e){
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
    })  

    // onWheel event
    let wheeling = false;
    window.addEventListener('wheel', function(event){
        let wheelDir = Math.sign(event.deltaY);
        if(wheelDir < 0 && wheeling === false){
            wheeling = true;
            if(parseInt(currSection)+parseInt(wheelDir) < 1){
                scrollToSection(sections.length);    
            }
            scrollToSection(parseInt(currSection)+parseInt(wheelDir));
        }else if(event.deltaY > 0 && wheeling === false){
            wheeling = true;
            if(parseInt(currSection)+parseInt(wheelDir) > sections.length){
                console.log("back to top");
                console.log(sections.length);
                scrollToSection((parseInt(currSection)+parseInt(wheelDir))- sections.length);    
            }
            scrollToSection(parseInt(currSection)+parseInt(wheelDir));
        }
        this.clearTimeout(wheeling);
        wheeling = setTimeout(()=>{
            console.log("stop wheeling");
            wheeling = false;
        }, 50)
    }); 
}