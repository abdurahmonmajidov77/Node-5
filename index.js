const form = document.getElementById('form')
const intA = document.getElementById('intA')
const intB = document.getElementById('intB')
const btn = document.getElementById('btn')

const res = await fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target[0].value;
    const country = e.target[1].value;
})