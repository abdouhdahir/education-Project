document.addEventListener("DOMContentLoaded", () => {
  const tableaus = document.getElementById("tableaus");
  tableaus.addEventListener("click", () => {
    tableau();
    tableauBord();
  });
});

function tableauBord() {
  const tableauContent = document.getElementById("tableau-content");

  const html = `
  <div class="acceuille-first">
  <div class="acceuille-first-content">
    <div class="acceuille-first-items">
      <i class="fa-solid fa-user"></i>
      <div class="acceuille-first-items-right">
        <p>Attendance</p>
        <h1>932</h1>
      </div>
    </div>
    <div class="acceuille-first-items">
      <i class="fa-solid fa-user"></i>
      <div class="acceuille-first-items-right">
        <p>Attendance</p>
        <h1>932</h1>
      </div>
    </div>
    <div class="acceuille-first-items">
    <i class="fa-solid fa-calendar-days"></i>
      <div class="acceuille-first-items-right">
        <p>Attendance</p>
        <h1>932</h1>
      </div>
    </div>
  </div>
  <div class="acceuille-first-bottom">
    <div class="first-bottom-exam">
      <h3>Exam Schedule</h3>
      <div class="physics">
        <h4>Physics</h4>
        <p>Class 3</p>
        <p>Tuesday</p>
        <p>3 Dec 2020</p>
        <p>08:30 AM</p>
        <i></i>
      </div>
      <div class="physics">
        <h4>Physics</h4>
        <p>Class 3</p>
        <p>Tuesday</p>
        <p>3 Dec 2020</p>
        <p>08:30 AM</p>
        <i></i>
      </div>
      <div class="physics">
        <h4>Physics</h4>
        <p>Class 3</p>
        <p>Tuesday</p>
        <p>3 Dec 2020</p>
        <p>08:30 AM</p>
        <i></i>
      </div>
    </div>
    <div class="first-bottom-statistic">
    <h3>Project statistic</h3>
      <div class="statistic">      
         <div class="project">
         <img src="./img/chart11671311.png" alt="">
          <div class="projet-items">
            <h4>Project Frog Surgery</h4>
            <p>Biology</p>
            <p>Biology</p>
          </div>
         </div>
         <div class="project">
         <img src="./img/minute10239327.png" alt="">
          <div class="projet-items">
            <h4>Project Frog Surgery</h4>
            <p>Biology</p>
            <p>Biology</p>
          </div>
         </div>
      </div>
      <div class="inbox">
        <div class="profil ">
          <img src="./img/ninho.jpeg" alt="">
          <div class="inbox-items">
            <div class="inbox-items-name">
              <h4>Fatouma</h4>
              <p>09:32</p>
            </div>
            <p>Don't Forget to work</p>
            <button>Exam</button>
          </div>
          
        </div>
        <div class="border"></div>
        <div class="profil">
          <img src="./img/ninho.jpeg" alt="">
          <div class="inbox-items">
            <div class="inbox-items-name">
              <h4>Fatouma</h4>
              <p>09:32</p>
            </div>
            <p>Don't Forget to work</p>
            <button>Exam</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="acceuille-end">
  <div class="schedule">
    <h2>Schedule Details</h2>
    <p>Thrusday, 10th April, 2021</p>
  </div>
  <div class="basic  border-left-1">
  <h4>Basic Alghorithm</h4>
  <p>Alghorithm</p>
  <div class="basic-end">
    <div class="basic-end-content">
      <div class="basic-end-content-items">
        <i class="fa-regular fa-calendar"></i>
        <p>March 20,2021</p>
      </div>
      <div class="basic-end-content-items">
        <i class="fa-regular fa-clock"></i>
        <p>March 20,2021</p>
      </div>
    </div>
    <div class="basic-end-content-vide"></div>
  </div>
  </div>
  <div class="basic border-left-2">
    <h4>Basic Alghorithm</h4>
    <p>Alghorithm</p>
    <div class="basic-end">
      <div class="basic-end-content">
        <div class="basic-end-content-items">
          <i class="fa-regular fa-calendar"></i>
          <p>March 20,2021</p>
        </div>
        <div class="basic-end-content-items">
          <i class="fa-regular fa-clock"></i>
          <p>March 20,2021</p>
        </div>
      </div>
      <div class="basic-end-content-vide"></div>
    </div>
    </div>
    <div class="basic border-left-3">
      <h4>Basic Alghorithm</h4>
      <p>Alghorithm</p>
      <div class="basic-end">
        <div class="basic-end-content">
          <div class="basic-end-content-items">
            <i class="fa-regular fa-calendar"></i>
            <p>March 20,2021</p>
          </div>
          <div class="basic-end-content-items">
            <i class="fa-regular fa-clock"></i>
            <p>March 20,2021</p>
          </div>
        </div>
        <div class="basic-end-content-vide"></div>
      </div>
      </div>
      <div class="basic border-left-4">
        <h4>Basic Alghorithm</h4>
        <p>Alghorithm</p>
        <div class="basic-end">
          <div class="basic-end-content">
            <div class="basic-end-content-items">
              <i class="fa-regular fa-calendar"></i>
              <p>March 20,2021</p>
            </div>
            <div class="basic-end-content-items">
              <i class="fa-regular fa-clock"></i>
              <p>March 20,2021</p>
            </div>
          </div>
          <div class="basic-end-content-vide"></div>
        </div>
        </div>
        <Button class="acceuille-end-button">View More</Button>
</div>
    `;
  tableauContent.innerHTML = html;
}
