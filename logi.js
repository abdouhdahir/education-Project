document.addEventListener("DOMContentLoaded", () => {
  tableau();

  const tableauBords = document.getElementsByClassName("tableauBord");
  tableauBord();

  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  if (links.length > 0) {
    links[0].classList.add("active");
  }
});

const dashboardNav = document.getElementById("dashboard-nav");
const dashboardContent = document.getElementById("dashboardContent");

function tableau() {
  dashboardContent.innerHTML = "";
  const bord = `
  <div class = "dashboardContent-header">
  <h1>Tableau de bord</h1>
  <div class="dashboardContent-search">
  <i class="fa-solid fa-magnifying-glass"></i>
  <input type="text" placeholder="Search here..." />
  </div>
  <div class="dashboardContent-end">
  <div class="icon-bell">
  <i class="fa-solid fa-bell"></i>
  <div class="i-nomber"></div>
  </div>
  <i class="fa-solid fa-gear"></i>
  <div class="dashboardContent-end-name">
    <h3>Abdourahman Hassan</h3>
    <p>Professeur</p>
  </div>
  <div class="dashboardContent-vide"></div>
</div>
  </div>
  <div class="tableau-content" id="tableau-content"></div>

  `;

  dashboardContent.innerHTML = bord;
}

function cours() {
  dashboardContent.innerHTML = "";

  const cour = `
    <div class="dashboardContent-header">
      <h1>Tous les cours</h1>
      <div class="dashboardContent-end">
        <div class="icon-bell">
          <i class="fa-solid fa-bell"></i>
          <div class="i-nomber"></div>
        </div>
        <i class="fa-solid fa-gear"></i>
        <div class="dashboardContent-end-name">
          <h3>Abdourahman Hassan</h3>
          <p>Professeur</p>
        </div>
        <div class="dashboardContent-vide"></div>
      </div>
    </div>
    <div class="dashboardContent-nav">
      <div class="dashboardContent-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search here..." id="inputSearch"/>
      </div>
      <div class="dashboardContent-nav-btt">
        <i class="fa-solid fa-plus"></i>
        <button>Ajouter un cours</button>
      </div>
    </div>
    <div class="cour-content" id="cour-content"></div>

  `;

  dashboardContent.innerHTML = cour;
}

function assignement() {
  dashboardContent.innerHTML = "";
  const assi = `<h1>Assigner </h1>`;
  dashboardContent.innerHTML = assi;
}

function calendrier() {
  dashboardContent.innerHTML = "";
  const date = `<h1>Le calendrier </h1>`;
  dashboardContent.innerHTML = date;
}
function etudians() {
  dashboardContent.innerHTML = "";
  const date = `
  <div class="dashboardContent-header">
  <h1>Tous les etudiants</h1>
  <div class="dashboardContent-search">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Search here..." id="inputSearch"/>
  </div>
  <div class="dashboardContent-end">
    <div class="icon-bell">
      <i class="fa-solid fa-bell"></i>
      <div class="i-nomber"></div>
    </div>
    <i class="fa-solid fa-gear"></i>
    <div class="dashboardContent-end-name">
      <h3>Abdourahman Hassan</h3>
      <p>Professeur</p>
    </div>
    <div class="dashboardContent-vide"></div>
  </div>
</div>

<div class="etudians-content"id="etudiansContent"></div>
  `;
  dashboardContent.innerHTML = date;
}

function chats() {
  dashboardContent.innerHTML = "";
  const disc = `<h1>Discutez</h1>`;
  dashboardContent.innerHTML = disc;
}

function evenement() {
  dashboardContent.innerHTML = "";
  const eve = `<h1>Les evenemen</h1>`;
  dashboardContent.innerHTML = eve;
}
