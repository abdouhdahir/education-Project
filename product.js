document.addEventListener("DOMContentLoaded", () => {
  const courss = document.getElementById("coursss");
  courss.addEventListener("click", () => {
    cours();
    courproduct();
  });
});
const lesCours = [
  {
    id: 1,
    img: "./img/productlogiciel.jpg",
    nom: "Elmi",
    matiere: "Francais",
  },
  {
    id: 2,
    img: "./img/productlogiciel.jpg",
    nom: "Ahmed",
    matiere: "Francais",
  },
  {
    id: 3,
    img: "./img/productlogiciel.jpg",
    nom: "Ahmed",
    matiere: "Francais",
  },
  {
    id: 4,
    img: "./img/productlogiciel.jpg",
    nom: "Djohar",
    matiere: "Francais",
  },
  {
    id: 5,
    img: "./img/productlogiciel.jpg",
    nom: "Mohamed",
    matiere: "Francais",
  },
  {
    id: 6,
    img: "./img/productlogiciel.jpg",
    nom: "Abdourahma",
    matiere: "Francais",
  },
  {
    id: 7,
    img: "./img/productlogiciel.jpg",
    nom: "Abdillahi",
    matiere: "Francais",
  },
  {
    id: 8,
    img: "./img/productlogiciel.jpg",
    nom: "Ahmed",
    matiere: "Francais",
  },
  {
    id: 9,
    img: "./img/productlogiciel.jpg",
    nom: "Safayou",
    matiere: "Francais",
  },
  {
    id: 10,
    img: "./img/productlogiciel.jpg",
    nom: "Amadou",
    matiere: "Francais",
  },
  {
    id: 11,
    img: "./img/productlogiciel.jpg",
    nom: "Asma",
    matiere: "Francais",
  },
  {
    id: 12,
    img: "./img/productlogiciel.jpg",
    nom: "Ahmed",
    matiere: "Francais",
  },
];
function courproduct() {
  const courContent = document.getElementById("cour-content");

  courContent.innerHTML = "";

  lesCours.forEach((prof) => {
    const html = `
          <div class="cour-content-items">
            <div class="cour-items-img">
              <img src="${prof.img}" alt="${prof.nom}" />
            </div>
            <div class="cour-items-text">
              <h3>${prof.nom}</h3>
              <p>${prof.matiere}</p>
            </div>
          </div>
        `;
    courContent.innerHTML += html;
  });
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
        <button id="ajoute-produit">Ajouter un cours</button>
      </div>
    </div>
    <div class="cour-content" id="cour-content"></div>
    <div class="modele" id="modele">
    <i class="fa-solid fa-x" id="close-icon"></i>
    <div class="modele2">
      <input type="text" id="inputModeleNom" placeholder="Le nom" />
      <input type="text" id="inputModeleMatiere" placeholder="La matiere" />
      <button id="btt-modele">Ajoute</button>
    </div>
    </div>
  `;

  dashboardContent.innerHTML = cour;
  const inputSearch = document.getElementById("inputSearch");
  inputSearch.addEventListener("input", (e) => {
    const valueInputSearch = inputSearch.value.toLowerCase();
    const filterInputSearch = lesCours.filter(
      (cour) =>
        cour.nom.toLowerCase().includes(valueInputSearch) ||
        cour.matiere.toLowerCase().includes(valueInputSearch)
    );
    contenu(filterInputSearch);
  });
  const ajouteProduit = document.getElementById("ajoute-produit");
  const inputModeleNom = document.getElementById("inputModeleNom");
  const inputModeleMatiere = document.getElementById("inputModeleMatiere");
  const bttModele = document.getElementById("btt-modele");
  const closeIcon = document.getElementById("close-icon");
  const divModele = document.getElementById("modele");

  ajouteProduit.addEventListener("click", () => {
    divModele.style.display = "flex";
  });
  closeIcon.addEventListener("click", () => {
    divModele.style.display = "none";
  });
  bttModele.addEventListener("click", () => {
    const valueInputModeleNom = inputModeleNom.value;
    const valueInputModeleMatiere = inputModeleMatiere.value;
    const ids = lesCours.length + 1;
    const newArray = {
      id: ids,
      img: "./img/productlogiciel.jpg",
      nom: valueInputModeleNom,
      matiere: valueInputModeleMatiere,
    };
    lesCours.push(newArray);
    contenu(lesCours);
    divModele.style.display = "none";
  });
}

function contenu(courses) {
  const courContent = document.getElementById("cour-content");
  courContent.innerHTML = "";
  courses.forEach((prof) => {
    const html = `
        <div class="cour-content-items">
          <div class="cour-items-img">
            <img src="${prof.img}" alt="${prof.nom}" />
          </div>
          <div class="cour-items-text">
            <h3>${prof.nom}</h3>
            <p>${prof.matiere}</p>
          </div>
        </div>
      `;
    courContent.innerHTML += html;
  });
}
