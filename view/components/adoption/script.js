document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-ongs");

  // Clone os itens do carrossel e anexe-os ao final
  gallery.innerHTML += gallery.innerHTML;

  // Define a velocidade de rolagem automática (em milissegundos)
  const scrollSpeed = 3000; // 3 segundos

  let intervalId;

  function startAutoScroll() {
    intervalId = setInterval(() => {
      gallery.scrollLeft += gallery.offsetWidth;
      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 0;
      }
    }, scrollSpeed);
  }

  function stopAutoScroll() {
    clearInterval(intervalId);
  }

  gallery.addEventListener("mouseenter", stopAutoScroll);
  gallery.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
});
