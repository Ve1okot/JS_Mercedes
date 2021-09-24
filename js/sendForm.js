const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}

    for (let {name, value} of form.elements) {
        if (name) {
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if (responce.status === 200 || responce.status === 201) {
            return responce.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        alert('Ваши данные отправлены.')
        form.reset()
    })
    .catch(error => {
        alert('Ошибка ' + error.message)
    })
})