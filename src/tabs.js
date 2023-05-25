import createContact from "./contact"
import createMenu from "./menu"
import createHomePage from "./restaurant"

export default function createTabs() {
    const content = document.querySelector('#content')

    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent="Pizza Palace"

    const divTabs = document.createElement('div')
    divTabs.setAttribute('id','div-groups')
    divTabs.classList.add('tabGroup')

    const divHome=document.createElement('div')
    const divMenu=document.createElement('div')
    const divContact=document.createElement('div')

    divHome.setAttribute('id','home-btn')
    divMenu.setAttribute('id','menu-btn')
    divContact.setAttribute('id','contact-btn')

    divHome.classList.add('tab')
    divMenu.classList.add('tab')
    divContact.classList.add('tab')

    divHome.textContent="Home"
    divMenu.textContent="Menu"
    divContact.textContent="Contact us"

    divHome.addEventListener('click', ()=>{
        clearContent()
        createHomePage()
    })
    divMenu.addEventListener('click', ()=>{
        clearContent()
        createMenu()
    })
    divContact.addEventListener('click', ()=>{
        clearContent()
        createContact()
    })

    divTabs.appendChild(divHome)
    divTabs.appendChild(divMenu)
    divTabs.appendChild(divContact)

    content.appendChild(header)
    content.appendChild(divTabs)
}

function clearContent(){
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')
    if(pageContent){
        content.removeChild(pageContent)
    }
}