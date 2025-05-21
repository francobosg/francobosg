const recentWorks = [
    {
        title: "Web Personal Antonio Tejero",
        description: "Un sitio web de portafolio personal construido con HTML, CSS, JavaScript, y con integración a base de datos MySQL para almacenamiento de información de contacto.",
        techs: ["HTML", "CSS", "JS", "WordPress", "MySQL", "PHP", "APIs", "VSCode", "Git"],
        video: "/videos/antonio.mp4",
        url: "https://antoniobernalimaginero.com/"
    },
    {
        title: "Web Ayuntamiento El Viso",
        description: "Un sitio web del ayuntamiento del pueblo El Viso construido con HTML, CSS, JavaScript, y WordPress. Integración con bases de datos MySQL para gestión de servicios y citas.",
        techs: ["HTML", "CSS", "JS", "WordPress", "MySQL", "PHP", "APIs REST", "VSCode", "Git"],
        video: "/videos/aytoelviso.mp4",
        url: "https://ayto-elviso.com/"
    },
    {
        title: "Marketing Digital",
        description: "Un sitio web de marketing digital que incluye formularios de contacto y una base de datos para gestionar leads, construido con HTML, CSS, JS y WordPress.",
        techs: ["HTML", "CSS", "JS", "WordPress", "MySQL", "PHP", "Forms", "SEO", "VSCode"],
        video: "/videos/techstyle.mp4",
        url: "https://techstyle.alwaysdata.net/inicio"
    },
    {
        title: "Marketing Digital Corporativo",
        description: "Un sitio web de marketing digital corporativo que usa API para integración con redes sociales y gestión de campañas, además de bases de datos para estadísticas.",
        techs: ["HTML", "CSS", "JS", "WordPress", "APIs", "MySQL", "PHP", "SEO", "Git", "VSCode"],
        video: "/videos/investigayeduca.mp4",
        url: "https://investigayeduca.com/"
    },
    {
        title: "Marketing para la Comunidad",
        description: "Página de marketing digital para outreach comunitario con integración de formularios de contacto y sistema de gestión de usuarios mediante base de datos MySQL.",
        techs: ["HTML", "CSS", "JS", "WordPress", "MySQL", "PHP", "APIs REST", "SEO", "VSCode"],
        video: "/videos/discapacidadtic.mp4",
        url: "https://investigayeduca.com/discapacidadtic/"
    },
    {
        title: "Servicios de Apoyo Familiar",
        description: "Sitio web para servicios de apoyo familiar con backend en PHP y base de datos MySQL para gestionar solicitudes y contactos.",
        techs: ["HTML", "CSS", "JS", "MySQL", "PHP", "Backend", "Git", "VSCode"],
        video: "/videos/acogimientofamiliarandalucia.mp4",
        url: "https://acogimientofamiliarandalucia.com/"
    },
    {
        title: "Portfolio Fran Cobos",
        description: "Mi portfolio personal con proyectos, experiencia y habilidades. Desarrollado con HTML, CSS y JS, alojado en Netlify.",
        techs: ["HTML", "CSS", "JS", "TailwindCSS", "Flowbite", "FontAwesome", "Vite", "VSCode", "Netlify", "Git"],
        video: "/videos/porfolio.mp4",
        url: "https://francobosg.netlify.app/"
    },
    {
        title: "Blog Fran Cobos",
        description: "¡Bienvenido a mi blog! Aquí encontrarás ejercicios y recursos sobre DAW, SMR, ASIR, DAM y mucho más. Publicado con GitHub Pages. Fue mi primer proyecto académico y ha conseguido más de 20.000 vistas en Google Analytics.",
        techs: ["HTML", "CSS", "JS", "Markdown", "GitHub Pages", "VSCode", "Git", "SEO"],
        video: "/videos/blog.mp4", 
        url: "https://francobosg.github.io/"
    }

];


const parent = document.getElementById('recent-works');

const getTech = (techs) => {
    return techs.map(tech =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
            ${tech}
        </button>`).join(" ");
}

const html = recentWorks.map(work =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <video class="rounded-t-lg w-full" src="${work.video}" controls muted autoplay loop playsinline></video>
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-semibold text-gray-900 dark:text-gray-200">${work.title}</h5>
            <p class="font-light text-gray-800 dark:text-gray-400">${work.description}</p>
            <div class="my-4 flex flex-wrap">
                ${getTech(work.techs)}
            </div>
            <a href="${work.url}" target="_blank"
                class="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-red-400 hover:bg-red-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                Website
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");
