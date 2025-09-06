// Dados simulados
const skills = [
  { name: "Java", icon: "icons/java.png" },
  { name: "Spring Boot", icon: "icons/spring.png" },
  { name: "REST APIs", icon: "icons/nuvem.png" },
  { name: "Python", icon: "icons/python.png" },
  { name: "Excel", icon: "icons/excel.png" },
  { name: "MySQL", icon: "icons/dados.png" },
  { name: "PostgreSQL", icon: "icons/dados.png" },
  { name: "Git", icon: "icons/git.png" },
  { name: "GitHub", icon: "icons/github.png" },
];

const projects = [
  {
    title: "",
    description:
      "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
  },
];

// Renderizar skills
const skillsGrid = document.querySelector(".skills-grid");
skills.forEach((skill) => {
  const skillCard = document.createElement("div");
  skillCard.className = "skill-card";
  skillCard.innerHTML = `
      <div class="skill-icon">
        <img src="${skill.icon}">
      </div>
      <div class="skill-name">${skill.name}</div>
    `;
  skillsGrid.appendChild(skillCard);
});

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


// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();
