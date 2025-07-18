// Dados simulados
const skills = [
  { name: "Node.js", icon: "fa-brands fa-node" },
  { name: "Express", icon: "fa-solid fa-server" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "PostgreSQL", icon: "fa-solid fa-database" },
  { name: "REST APIs", icon: "fa-solid fa-cloud" },
  { name: "Docker", icon: "fa-brands fa-docker" },
  { name: "AWS", icon: "fa-brands fa-aws" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "TypeScript", icon: "fa-solid fa-code" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "RabbitMQ", icon: "fa-solid fa-exchange-alt" },
  { name: "Redis", icon: "fa-solid fa-memory" },
];

const projects = [
  {
    title: "API de Loja Virtual",
    description:
      "Backend completo para e-commerce com Express, MongoDB e autenticação JWT. Implementa CRUD de produtos, carrinho de compras e sistema de pedidos.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/usuario/api-loja",
    demoLink: "#",
  },
  {
    title: "Microserviço de Pagamentos",
    description:
      "Sistema distribuído de processamento de pagamentos usando Node.js, RabbitMQ para mensageria e PostgreSQL para armazenamento de transações.",
    technologies: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/usuario/ms-pagamentos",
    demoLink: "#",
  },
  {
    title: "API de Autenticação",
    description:
      "Sistema de autenticação e autorização com OAuth 2.0, tokens JWT e refresh tokens. Inclui recuperação de senha e verificação de email.",
    technologies: ["Node.js", "OAuth 2.0", "JWT", "Redis"],
    githubLink: "https://github.com/usuario/auth-api",
    demoLink: "#",
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
