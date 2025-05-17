let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

 function moveBackground(event) {
  const shapes = document.querySelectorAll( " .shape");
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor


  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }


}




function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
else{
  document.body.classList.remove("dark-theme")
}
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_uw3q09o",
      "template_mlx6m8q",
      event.target,
      "user_VEkQklLp9iy_np6xv"
    )
    .then(() => {
      loading.classList.remove(" modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch
    loading.classList.remove("modal__overlay--visible")
  Toastify({
    text: "Email service is down. Contact me directly @ WNbrown@builtbywill.dev",
    duration: 5000,
    gravity: "bottom", // or "top"
    position: "center", // or "left" / "right"
    backgroundColor: "#FF6B6B",
    stopOnFocus: true,
  }).showToast();
}


function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
            return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
  document.body.classList += " modal--open"
}