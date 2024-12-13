document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  function handleScroll() {
    galleryItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("visible");
      }
    });
  }

  // Jalankan saat scroll
  window.addEventListener("scroll", handleScroll);

  // Jalankan pertama kali saat halaman dimuat
  handleScroll();
});
