export default function createHomePage(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const headline=document.createElement('h1')
    headline.textContent="Welcome to my Restaurant"
    pageContent.appendChild(headline)

    const image=document.createElement('img')
    image.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    image.height='400'
    pageContent.appendChild(image)

    const copy = document.createElement('p')
    copy.textContent='look how nice this restaurant is!'
    pageContent.appendChild(copy)

    content.appendChild(pageContent)
}