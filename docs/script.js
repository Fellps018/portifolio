const projects = [
  {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
  },
  {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
  },
  {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
  }
];


// Renderizar projetos
const projectsGrid = document.querySelector(".projects-grid");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";

  projectCard.innerHTML = `
      <div class="project-image">
        <i class="fas fa-code"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          <a href="${project.githubLink}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> Código
          </a>
          ${
            project.demoLink !== "#"
              ? `<a href="${project.demoLink}" target="_blank" class="project-link">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>`
              : ""
          }
        </div>
      </div>
    `;

  projectsGrid.appendChild(projectCard);
});


const btn = document.querySelector(".menu-toggle");
const aba = document.querySelector(".aba-toggle");
const menu = document.querySelector(".nav");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

//open menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  aba.style.top = "0px";
  menuToggle.innerHTML = nav.classList.contains("active")
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    aba.style.top = "-1000000000px";
  });
});

//fechar
aba.addEventListener("click", function () {
  aba.style.top = "-1000000000px";
  nav.classList.remove("active");
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();


