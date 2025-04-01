const scriptURL = 'https://script.google.com/macros/s/AKfycbzdYoR5lYAy4JBCSFM2Uvo5rShvxuCE64rO_KovKN89dL6DKHNc1-O3VHpvoC_2vtYUTw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})