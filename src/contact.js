export default function createContact() {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const headline = document.createElement('h1')
    headline.textContent="Contact Us"

    pageContent.appendChild(headline)
    content.appendChild(pageContent)
}