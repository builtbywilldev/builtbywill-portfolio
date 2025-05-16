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

let isModalOpen = false
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
            return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
  document.body.classList += " modal--open"
}