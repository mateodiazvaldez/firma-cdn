(function() {
    const config = {
        targetId: "dev-credits",
        // RELLENA ESTAS URLS O LOS LINKS NO SERVIRÁN DE NADA
        santiagoUrl: "https://www.linkedin.com/in/santiago-cilento-243744334/", 
        mateoUrl: "https://www.linkedin.com/in/mateo-diaz-valdez-9a13b6314/"       
    };

    const contenedor = document.getElementById(config.targetId);

    if (contenedor) {
        contenedor.innerHTML = ''; // Limpia cualquier contenido previo

        // 1. Crear el texto inicial
        const prefijo = document.createTextNode("Diseño y desarrollo por: ");
        contenedor.appendChild(prefijo);

        // 2. Crear Link Santiago
        const linkSanti = document.createElement('a');
        linkSanti.href = config.santiagoUrl;
        linkSanti.textContent = "Santiago Cilento";
        linkSanti.target = "_blank";
        linkSanti.rel = "noopener noreferrer";
        contenedor.appendChild(linkSanti);

        // 3. Crear separador
        const separador = document.createTextNode(" y ");
        contenedor.appendChild(separador);

        // 4. Crear Link Mateo
        const linkMateo = document.createElement('a');
        linkMateo.href = config.mateoUrl;
        linkMateo.textContent = "Mateo Diaz Valdez";
        linkMateo.target = "_blank";
        linkMateo.rel = "noopener noreferrer";
        contenedor.appendChild(linkMateo);
    }
})();
