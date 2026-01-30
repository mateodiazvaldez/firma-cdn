(function() {
    const config = {
        targetId: "dev-credits",
        // URLs actualizadas
        santiagoUrl: "https://www.linkedin.com/in/santiago-cilento-243744334/", 
        mateoUrl: "https://www.linkedin.com/in/mateo-diaz-valdez-9a13b6314/"       
    };

    const contenedor = document.getElementById(config.targetId);

    if (contenedor) {
        contenedor.innerHTML = ''; // Limpia contenido previo por seguridad

        // --- CLASES TAILWIND ---
        // text-current: Hereda el color del texto del footer
        // hover:underline: Subraya al pasar el mouse
        // hover:text-opacity-80: Un pequeño cambio de opacidad para feedback visual
        const linkClasses = "text-current underline hover:underline hover:text-opacity-80 cursor-pointer transition-all duration-200";

        // 1. Texto inicial
        contenedor.appendChild(document.createTextNode("Diseño y desarrollo por: "));

        // 2. Link Santiago
        const linkSanti = document.createElement('a');
        linkSanti.href = config.santiagoUrl;
        linkSanti.textContent = "Santiago Cilento";
        linkSanti.target = "_blank";
        linkSanti.rel = "noopener noreferrer";
        linkSanti.className = linkClasses;
        contenedor.appendChild(linkSanti);

        // 3. Separador
        contenedor.appendChild(document.createTextNode(" y "));

        // 4. Link Mateo
        const linkMateo = document.createElement('a');
        linkMateo.href = config.mateoUrl;
        linkMateo.textContent = "Mateo Diaz Valdez";
        linkMateo.target = "_blank";
        linkMateo.rel = "noopener noreferrer";
        linkMateo.className = linkClasses;
        contenedor.appendChild(linkMateo);
    }
})();
