// Dados simulados
const skills = [
  {name: "Java", icon: "fa-brands fa-java"},
  {name: "Spring Boot", icon: "fa-solid fa-leaf"},
  {name: "REST APIs", icon: "fa-solid fa-cloud"},
  {name: "Python", icon: "fa-brands fa-python"},
  {name: "Excel", icon: "fa-solid fa-table"},
  {name: "MySQL", icon: "fa-solid fa-database"},
  {name: "PostgreSQL", icon: "fa-solid fa-database"},
  {name: "Git", icon: "fa-brands fa-git-alt"},
  {name: "GitHub", icon: "fa-brands fa-github"},
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
        <i class="${skill.icon}"></i>
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

// Contato
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulação de envio
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    // Simular delay de rede
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';

      // Reset após 2 segundos
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        this.reset();
      }, 2000);
    }, 1500);
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
