const menuOpen = document.querySelector('.ri-menu-line')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('nav ul')
const menuitems = document.querySelectorAll("nav ul li")

console.log(menuitems)

menuOpen.addEventListener("click", function(){
    menu.style.top = "40%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

function closeMenu(){
    menu.style.top = "-40%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}

menuClose.addEventListener("click", function(){
    closeMenu()
    // menu.style.top = "-40%"
    // menuOpen.style.display = "block"
    // menuClose.style.display = "none"
})

menuitems.forEach(function(menuitem){
    menuitem.addEventListener("click", function(){
        closeMenu()
        // menu.style.top = "-40%"
        // menuOpen.style.display = "block"
        // menuClose.style.display = "none"
    })
})
const faqs = document.querySelectorAll('.questions')

faqs.forEach(function(questions){
    questions.addEventListener("click", ()=>{
        questions.classList.toggle("show")
        questions.classList.toggle("arrow")

    })
})
const Feat = document.querySelectorAll('.header button')

console.log(Feat);

const featureContainer = document.querySelector(".features")
const va = "hello"

Feat.forEach(function(header){
    header.addEventListener("click", (e)=>{
        if (e.target.innerText === "Simple Bookmarking"){
            featureContainer.innerHTML = `
<div class="switch">
                <div>
                    <img src="images/illustration-features-tab-1.svg" alt="">
                </div>
                <div>
                    <h3>Bookmark in one click.</h3>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button class="chrome">More Info</button>
                </div>
            </div>
`
        }else if (e.target.innerText === "Speedy Searching"){
            featureContainer.innerHTML = `
            <div class="switch">
            <div>
                <img src="images/illustration-features-tab-2.svg" alt="">
            </div>
            <div>
                <h3>Bookmark in one click.</h3>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                <button class="chrome">More Info</button>
            </div>
        </div>
`
        }else if (e.target.innerText === "Easy Sharing"){
            featureContainer.innerHTML = `
            <div class="switch">
                <div>
                    <img src="images/illustration-features-tab-3.svg" alt="">
                </div>
                <div>
                    <h3>Bookmark in one click.</h3>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button class="chrome">More Info</button>
                </div>
            </div>
`
        }
    })
})

document.querySelector(".newYear").textContent = new Date().getFullYear()
