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

    details.addEventListener("toggle", () => {
      animateDetailsState(details);
    });
  });
}

registerToggleDetailsListener();

function animateDetailsState(details: HTMLElement) {
  const open = details.hasAttribute("open");
  if (open) {
    animateDetailsOpen(details);
  } else {
    animateDetailsClose(details);
  }

  const content = details.querySelector("summary + *");
  if (content) {
    // Delay the start of the animation until the next repaint
    requestAnimationFrame(() => {
      content.animate(
        {
          height: [
            `${open ? 0 : content.scrollHeight}px`,
            `${open ? content.scrollHeight : 0}px`,
          ],
        },
        { duration: 200, fill: "forwards" },
      );
    });
  }
}

function animateDetailsOpen(details: HTMLElement) {
  const content = details.querySelector("summary + *");
  if (content) {
    requestAnimationFrame(() => {
      content.animate({ opacity: [0, 1] }, { duration: 200, fill: "forwards" });
    });
  }
}

function animateDetailsClose(details: HTMLElement) {
  const content = details.querySelector("summary + *");
  if (content) {
    requestAnimationFrame(() => {
      content.animate({ opacity: [1, 0] }, { duration: 200, fill: "forwards" });
    });
  }
}
