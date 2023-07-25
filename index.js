
// for that hero section part  -->

      var typeData = new Typed(".role", {
        strings: [
          // "Full Stack Developer",
          "Web Developer",
          "UI-UX Designer",
          // "Backend Developer",
          "Coder",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });



        // for connecting the form to Google Sheets -->



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzf1WWXdZTxhi2BQNoIh5CVCYGkAo7OAQreahCu4UOqZ1wMNvXvbBr8-_3R_kgKfXQ1/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message sent successfully!"
        setTimeout(function(){
          msg.innerHTML=""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })



