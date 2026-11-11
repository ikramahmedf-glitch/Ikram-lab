const skillsData = [
    {
        id: 'html ',
        name: 'HTML',
        Category: 'frontend',
        catLabel: 'FRONTEND',
        leve: '90',
        icon: 'fa-brands fa-html5 ',
        desc: "Building clean, semantic, and accessible structural components optimized for search engine algorithms.",
        highlights: ["Semantic HTML tags", "Accessibility", "Responsive web structure"]
    },
    {
        id: ' css',
        name: 'CSS3',
        Category: 'frontend',
        catLabel: 'FRONTEND',
        leve: '90',
        icon: ' fa-brands fa-css3-alt',
        desc: "Learning CSS3 to style websites, create responsive layouts, and build attractive user interfaces.",
        highlights: ["CSS selectors and properties", "Flexbox and CSS Grid", "Responsive web design"]
    },

     {
        id: 'javascript',
        name: 'Javascript',
        Category: 'frontend',
        catLabel: 'FRONTEND',
        leve: '80',
        icon: 'fa-brands fa-js',
         desc: "Creating interactive web pages and dynamic user experiences.",
        highlights: ["JavaScript fundamentals", "DOM manipulation", "Events and functions"]
    },

     {
        id: 'Php',
        name: 'PHP',
        Category: 'backend',
        catLabel: 'BACKEND',
        leve: '70',
        icon: 'fa-brands fa-php',
        desc: "Learning server-side application logic, dynamic data processing, and database communication.",
        highlights: ["PHP fundamentals", "Forms and processing", "Server-side logic"]
    },

     {
        id: 'python',
        name: 'PYTHON',
        Category: 'backend',
        catLabel: 'BACKEND',
        leve: '70',
        icon: 'fa-brands fa-python',
      desc: "Learning Python for programming, automation, and future AI projects.",
        highlights: ["Python basics", "Programming logic", "Automation fundamentals"]
    },
     {
        id: 'mysql',
        name: 'MYSQL',
        Category: 'database',
        catLabel: 'Database',
        leve: '75',
        icon: 'fa-solid fa-database',
        desc: "Working with relational databases and storing structured information.",
        highlights: ["Database fundamentals", "Tables and relationships", "SQL queries"]
    },
    
     {
        id: 'git',
        name: 'Git & Github',
        Category: 'tools-ai',
        catLabel: 'Tools & AI',
        leve: '80',
        icon: 'fa-brands fa-git-alt',
        desc: "Learning version control and managing code repositories.",
        highlights: ["Git commands", "GitHub repositories", "Version control"]
    },
     {
        id: 'xampp',
        name: 'XAMPP Local Server',
        Category: 'tools-ai',
        catLabel: 'Tools & AI',
        leve: '70',
        icon: 'fa-brands fa-code',
        desc: "Using a local server environment to run PHP and MySQL projects.",
        highlights: ["Apache server", "PHP local development", "MySQL with XAMPP"]
    },
    
];

    const gridcontainer = document.getElementById('skills-grid');
    function renderSkills(filterCategory = 'all') {
        if (!gridcontainer) return;
    gridcontainer.innerHTML = '';
    const filterData = filterCategory ==='all'
     ?skillsData
     :skillsData.filter(skill => skill.Category.toLowerCase() === filterCategory.toLowerCase());


     filterData.forEach(skills =>{
        const card = document.createElement('div');
        card.className = "skills-card";
        card.onclick = () => openModal(skills);
        card.innerHTML = `
        <div>
            <div class="card-top">
                <div class="icon-box">
                    <i class="${skills.icon}"></i>
                </div>
                <span class="cat-tag">${skills.catLabel}</span>
            </div>

            <h3 class="skills-name">${skills.name}</h3>
            <p class="skills-desc">${skills.desc}  </p>
        </div>

        <div class="progress-header">
        <span>Proficiency</span>
        <span class="percent-text">${skills.leve}%</span>
        </div>

        <div class="progress-bar-bg">
        <div class="progress-fill" style="width: ${skills.leve}%"></div>
        </div>    

        <div class="card-footer">
        <span>Click for details</span>
        <i class="bx bx-right-arrow-alt"></i>
        </div>
        </div>
        
        `; 
        gridcontainer.appendChild(card);
      
    });   
    
}
function filterskills(category, button) {
    const Category = category.toLowerCase();

    renderSkills(Category);

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");

        
    });
        button.classList.add("active");

}

// Open skill details
function openModal(skill) {
    document.getElementById("modal-name").textContent = skill.name;
    document.getElementById("modal-category").textContent = skill.catLabel;
    document.getElementById("modal-icon").className = skill.icon;
    document.getElementById("modal-desc").textContent = skill.desc;
    document.getElementById("modal-percent").textContent = skill.leve + "%";
    document.getElementById("modal-progress").style.width = skill.leve + "%";

    const highlightList = document.getElementById("modal-highlight");
    highlightList.innerHTML = "";

    skill.highlights.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        highlightList.appendChild(li);
    });

    document.getElementById("skills-modal").classList.add("open");
}

// Close popup
function closeModal() {
    document.getElementById("skills-modal").classList.remove("open");
}

// Show all skills when page loads
renderSkills();

//projects data
const projectsData =[
    {
        id: 1,
        name :"Personal Portfolio",
        desc:"A personal developer portfolio showcasing my skills, learning journey, and projects in software development.",
        icon:"bx bx-code-alt",
        status:"completed",
        tech:["HTML","CSS","Javascript"],
        github:"https://github.com/ikramahmedf-glitch/ikram-lab",
        liveDemo:"https://ikramahmedf-glitch.github.io/Ikram-lab/"

    },
    {
     id: 2,
    name: "AI Chatbot",
    desc: "An intelligent chatbot designed to answer user questions.",
    icon: "bx bx-message-dots",
    status: "In Progress",
    tech: ["Python", "AI", "JavaScript"],
    github: "",
    liveDemo: ""
    }

];
const projectsGrid = document.getElementById('projects-grid');
 function renderprojects() {
        if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project =>{
        const card = document.createElement('div');
        card.className = "project-card";

        card.innerHTML = `
        
            <div class="project-top">
                <div class="icon-box">
                    <i class="${project.icon}"></i>
                    </div>
                <span class="project-status">
                    ${project.status}
                </span>
                </div>
                
            <div class="project-contant">

            <h3> ${project.name}</h3>
            <p>${project.desc}  </p>
        </div>

        <div class="project-tech">
         ${project.tech.map(item =>` <span>${item}</span>`).join("")}
        </div>

       
        <div class="project-links">
        ${project.github?`
            <a href="${project.github}" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-github"></i>GitHub
            </a>
            
            `:""}
            ${project.liveDemo?`
              <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">
             <i class="bx bx-link-external"></i>Live Demo

            </a>
                
            `:""}
        </div>
        </div>
        
        
        `; 
        projectsGrid.appendChild(card);
      
    });   
    
}
renderprojects();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mahadsanid! Fariintaadu si guul leh ayay u dirtay.');
            contactForm.reset();
        });
    }
});
