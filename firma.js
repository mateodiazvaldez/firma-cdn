(function() {
    const config = {
        // Usa emojis o iconos si quieres darle personalidad
        texto: "✨ Diseño y Estrategia: Mateo & Santiago", 
        url: "https://wa.me/549XXXXXXXXXX?text=Hola,%20vi%20tu%20trabajo",
        targetId: "dev-credits"
    };

    const contenedor = document.getElementById(config.targetId);

    if (contenedor) {
        const enlace = document.createElement('a');
        enlace.href = config.url;
        enlace.textContent = config.texto;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";

        // --- ESTILOS VISUALES (El cambio importante) ---
        
        // 1. Tipografía y Estructura
        enlace.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
        enlace.style.fontSize = "12px"; // Pequeño y elegante
        enlace.style.fontWeight = "500";
        enlace.style.letterSpacing = "0.5px"; // Un poco de aire entre letras
        enlace.style.textDecoration = "none";
        
        // 2. Colores y "Look"
        // Forzamos un color claro para que contraste bien con el fondo oscuro
        enlace.style.color = "rgba(255, 255, 255, 0.7)"; 
        enlace.style.backgroundColor = "rgba(255, 255, 255, 0.05)"; // Fondo ultra sutil
        enlace.style.padding = "6px 12px"; // Aire alrededor del texto
        enlace.style.borderRadius = "20px"; // Bordes totalmente redondos (Pill shape)
        enlace.style.border = "1px solid rgba(255, 255, 255, 0.1)"; // Borde casi invisible
        
        // 3. Posicionamiento
        enlace.style.display = "inline-block"; // Necesario para que el padding funcione
        enlace.style.transition = "all 0.3s ease"; // Suavidad en el hover

        // --- INTERACTIVIDAD ---
        enlace.onmouseover = () => {
            enlace.style.color = "#ffffff"; // Blanco puro al pasar el mouse
            enlace.style.backgroundColor = "rgba(255, 255, 255, 0.15)"; // Fondo más visible
            enlace.style.borderColor = "rgba(255, 255, 255, 0.3)";
            enlace.style.cursor = "pointer";
            enlace.style.transform = "translateY(-1px)"; // Se eleva un poquito
        };

        enlace.onmouseout = () => {
            enlace.style.color = "rgba(255, 255, 255, 0.7)";
            enlace.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            enlace.style.borderColor = "rgba(255, 255, 255, 0.1)";
            enlace.style.transform = "translateY(0)";
        };

        contenedor.innerHTML = '';
        contenedor.appendChild(enlace);
    }
})();
