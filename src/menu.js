export default function createMenu() {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const headline = document.createElement('h1')
    headline.textContent="Our Menu"

    pageContent.appendChild(headline)
    content.appendChild(pageContent)
}