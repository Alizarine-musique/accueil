document.querySelectorAll(".concert").forEach(el => {
  const date = new Date(el.dataset.date);
  const now = new Date();

  if (date < now) {
    el.classList.add("past");
  } else {
    el.classList.add("upcoming");
  }
});

/* METTRE EN AVANT LE PROCHAIN CONCERT*/
const concerts = document.querySelectorAll(".concert");

const now = new Date();

let nextConcert = null;
let nextDate = null;

// 1. classer past / upcoming + trouver le prochain concert
concerts.forEach(el => {
  const date = new Date(el.dataset.date);

  if (date < now) {
    el.classList.add("past");
  } else {
    el.classList.add("upcoming");

    // chercher le plus proche dans le futur
    if (!nextDate || date < nextDate) {
      nextDate = date;
      nextConcert = el;
    }
  }
});

// 2. mettre en avant le prochain concert
if (nextConcert) {
  nextConcert.classList.add("next-concert");
}
