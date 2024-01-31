let nav = document.getElementById ("Missfortune")
let navButton = document.getElementById ("riot")


let isHidden = true 




function moveNav() {
    if(isHidden) {
        nav.style.transform ="translateX(20vw)"
        isHidden = false 
    } else {
        nav.style.transform ="translateX(-20vw)"
        isHidden = true
    }
    


}


navButton.addEventListener('click',moveNav)