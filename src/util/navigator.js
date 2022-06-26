export default function navigator(){
    const links = document.querySelectorAll("[id^='sectionLink']");
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
            console.log(currSection);
        }
    })  

    // onWheel event
    let wheeling = false;
    window.addEventListener('wheel', function(event){
        let wheelDir = Math.sign(event.deltaY);
        console.log(wheelDir);
        this.clearTimeout(shitfk);
        function shitfk(){
            setTimeout(()=>{
                console.log("shitfuck");
            }, 1000)
        }
        if(wheelDir === 0){
            console.log("fuck");
        }
        if (wheelDir < 0 && wheeling === false){
            wheeling = true;
            scrollToSection(parseInt(currSection)+parseInt(wheelDir));

            this.setTimeout(()=>{
                wheelDir = 0;
                wheeling = false;
            }, 1200)
            console.log(wheelDir);
            console.log(wheeling);

        }else if (event.deltaY > 0){
            // console.log(event.deltaY);
        }
        // console.log(currSection);
    }); 

    

}