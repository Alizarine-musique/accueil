document.querySelectorAll(".concert").forEach(el => {
  const date = new Date(el.dataset.date);
  const now = new Date();

  if (date < now) {
    el.classList.add("past");
  } else {
    el.classList.add("upcoming");
  }
});
