document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");
  const currentPageElement = document.getElementById("currentPage");
  const totalPagesElement = document.getElementById("totalPages");

  const itemsPerPage = 4; // Defina o número de itens por página aqui
  let currentPage = 1;

  // Função para mostrar itens correspondentes à página atual
  function showItems() {
    const items = gallery.getElementsByClassName("gallery-item");
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = 0; i < items.length; i++) {
      if (i >= start && i < end) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }

    currentPageElement.textContent = currentPage;
  }

  // Função para ir para a página anterior
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      showItems();
    }
  }

  // Função para ir para a próxima página
  function nextPage() {
    if (
      currentPage <
      Math.ceil(
        gallery.getElementsByClassName("gallery-item").length / itemsPerPage
      )
    ) {
      currentPage++;
      showItems();
    }
  }

  prevButton.addEventListener("click", prevPage);
  nextButton.addEventListener("click", nextPage);

  // Inicialize a exibição dos itens
  showItems();
  totalPagesElement.textContent = Math.ceil(
    gallery.getElementsByClassName("gallery-item").length / itemsPerPage
  );
});
