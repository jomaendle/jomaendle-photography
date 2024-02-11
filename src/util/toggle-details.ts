function registerToggleDetailsListener() {
  document.querySelectorAll("details").forEach((details) => {
    details.addEventListener("click", (e) => {
      e.preventDefault();
      if (details.hasAttribute("open")) {
        details.removeAttribute("open");
      } else {
        details.setAttribute("open", "open");
      }
    });
  });
}

registerToggleDetailsListener();
