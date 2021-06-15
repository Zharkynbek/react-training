function scrollGallery() {
    window.scrollTo({
      top: document.querySelector(".ImageGallery").scrollHeight,
      behavior: "smooth",
    });
}

export default scrollGallery;