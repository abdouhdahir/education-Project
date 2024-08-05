document.addEventListener("DOMContentLoaded", () => {
  const etudianss = document.getElementById("etudiansss");
  etudianss.addEventListener("click", () => {
    etudians();
    lesEtudians();
  });
});

const listEtudianst = [
  {
    nom: "Ahmed",
    id: "1000",
    parent: "Hassan",
    grade: "A",
  },
  {
    nom: "Elmi",
    id: "1001",
    parent: "Hassan",
    grade: "B",
  },
  {
    nom: "Samakab",
    id: "1002",
    parent: "Hassan",
    grade: "C",
  },
  {
    nom: "Said",
    id: "1003",
    parent: "Hassan",
    grade: "A",
  },
  {
    nom: "Hanad",
    id: "1005",
    parent: "Hassan",
    grade: "A",
  },
  {
    nom: "Wais",
    id: "100",
    parent: "Hassan",
    grade: "B",
  },
];

function lesEtudians() {
  const etudiansContent = document.getElementById("etudiansContent");

  etudiansContent.innerHTML = `
      <table>
        <thead>
          <tr class="etudians-header">
            <th class="etudians-header-first">
              <input class="bttCheck" type="checkbox">
              <p>Name</p>
            </th>
            <th>ID</th>
            <th>Date</th>
            <th>Parent Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="etudians-body" class="etudians-body">
        </tbody>
        <tfoot>
          <tr class="etudians-footer">
            <td colspan="9">
            <p>Showing <span id="span-number"></span> - <span id="span-total"></span> from 100 data</p>
            </td>
          </tr>
        </tfoot>
      </table>
    `;

  const etudiansBody = document.getElementById("etudians-body");

  listEtudianst.forEach((etudian) => {
    const html = `
        <tr class="etudians-items">
          <td class="items-first">
            <input type="checkbox" class="bttCheck">
            <div class="nomColor"></div>
            <h3>${etudian.nom}</h3>
          </td>
          <td>
            <h4>#${etudian.id}</h4>
          </td>
          <td>
            <p class="date-color">March 25,2024</p>
          </td>
          <td>
            <p class="parent-color">${etudian.parent}</p>
          </td>
          <td>
            <p class="parent-color">Jakarta</p>
          </td>
          <td class="items-icon">
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-envelope"></i>
          </td>
          <td>
            <p class="couleur-p">VII${etudian.grade}</p>
          </td>
          <td>
            <i class="fa-solid fa-ellipsis"></i>
          </td>
        </tr>
      `;
    eleves(listEtudianst);
  });
}

function etudians() {
  dashboardContent.innerHTML = "";
  const date = `
  <div class="dashboardContent-header">
  
  <h1>Tous les etudiants</h1>

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
<div class="modele" id="modele">
<i class="fa-solid fa-x" id="close-icon"></i>
<div class="modele2">
  <input type="text" id="inputModeleNom" placeholder="Le nom" />
  <input type="text" id="inputModeleId" placeholder="L'ID" />
  <input type="text" id="inputModeleNiveau" placeholder="Le niveau" />
  <button id="btt-modele">Ajoute</button>
</div>
</div>

<div class="etudians-content"id="etudiansContent"></div>

  `;
  dashboardContent.innerHTML = date;

  const inputSearch = document.getElementById("inputSearch");
  inputSearch.addEventListener("input", (e) => {
    const value = e.target.value.toLocaleLowerCase();
    const filterValue = listEtudianst.filter(
      (eleve) =>
        eleve.nom.toLocaleLowerCase().includes(value) ||
        eleve.id.toLocaleLowerCase().includes(value)
    );
    eleves(filterValue);
  });
  const ajouteProduit = document.getElementById("ajoute-produit");
  const closeIcon = document.getElementById("close-icon");
  const bttModele = document.getElementById("btt-modele");
  const divModele = document.getElementById("modele");
  const inputModeleNom = document.getElementById("inputModeleNom");
  const inputModeleId = document.getElementById("inputModeleId");
  const inputModeleNiveau = document.getElementById("inputModeleNiveau");

  ajouteProduit.addEventListener("click", () => {
    divModele.style.display = "flex";
  });
  closeIcon.addEventListener("click", () => {
    divModele.style.display = "none";
  });
  bttModele.addEventListener("click", () => {
    const valueNom = inputModeleNom.value;
    const valueId = inputModeleId.value;
    const valueNiveau = inputModeleNiveau.value;
    const nouveauArray = {
      nom: valueNom,
      id: valueId,
      parent: "Hassan",
      grade: valueNiveau,
    };
    listEtudianst.push(nouveauArray);
    eleves(listEtudianst);
    divModele.style.display = "none";
  });
}

function eleves(eleve) {
  const etudiansContent = document.getElementById("etudiansContent");

  etudiansContent.innerHTML = "";
  const table = `
      <table>
        <thead>
          <tr class="etudians-header">
            <th class="etudians-header-first">
              <input class="bttCheck" type="checkbox">
              <p>Name</p>
            </th>
            <th>ID</th>
            <th>Date</th>
            <th>Parent Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="etudians-body" class="etudians-body">
        </tbody>
        <tfoot>
          <tr class="etudians-footer">
            <td colspan="9">
            <p>Showing <span id="span-number"></span> - <span id="span-total"></span> from 100 data</p>
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  etudiansContent.innerHTML = table;

  const etudiansBody = document.getElementById("etudians-body");

  eleve.map((etudian) => {
    const html = `
        <tr class="etudians-items">
          <td class="items-first">
            <input type="checkbox" class="bttCheck">
            <div class="nomColor"></div>
            <h3>${etudian.nom}</h3>
          </td>
          <td>
            <h4>#${etudian.id}</h4>
          </td>
          <td>
            <p class="date-color">March 25,2024</p>
          </td>
          <td>
            <p class="parent-color">${etudian.parent}</p>
          </td>
          <td>
            <p class="parent-color">Jakarta</p>
          </td>
          <td class="items-icon">
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-envelope"></i>
          </td>
          <td>
          <p class="couleur-p">VII${etudian.grade}</p>
          </td>
          <td>
            <i class="fa-solid fa-ellipsis"></i>
          </td>
        </tr>
      `;
    etudiansBody.innerHTML += html;
  });
  updateCounts();

  document.querySelectorAll(".bttCheck").forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const row = e.target.closest(".etudians-items");
      row.classList.toggle("completed");
      updateCounts();
    });
  });
}

function updateCounts() {
  const checkboxes = document.querySelectorAll(".bttCheck");
  const checkedCheckboxes = document.querySelectorAll(".bttCheck:checked");
  const totalCheckboxes = listEtudianst.length;
  const checkedCount = checkedCheckboxes.length;

  const spanNumber = document.getElementById("span-number");
  const spanTotal = document.getElementById("span-total");
  spanNumber.innerHTML = totalCheckboxes - checkedCount;
  spanTotal.innerHTML = totalCheckboxes;
}
