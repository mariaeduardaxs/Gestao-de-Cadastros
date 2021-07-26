 const form = document.getElementById('form')

 form.addEventListener('submit', e => {
     e.preventDefault()
     const nome = document.getElementById('name').value
     const street = document.getElementById('street').value
     const district = document.getElementById('district').value
     const city = document.getElementById('city').value
     const number = document.getElementById('tel').value

     let data = {
         nome,
         cpf,
         street,
         district,
         city,
         number
     }

     dataConverted = JSON.stringify(data)
     console.log(dataConverted)

     localStorage.setItem('data', dataConverted)
 })

 localStorage.clear('data')