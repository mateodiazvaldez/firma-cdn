/**
 * FIRMA DINÁMICA - MATEO & SOCIO
 * Este script inyecta los créditos en el footer de los clientes.
 * Se usa una IIFE (función autoejecutable) para no ensuciar el scope global del cliente.
 */

(function() {
    // 1. CONFIGURACIÓN CENTRALIZADA
    // Cambia esto aquí y se actualizará en TODOS tus clientes al instante.
    const config = {
        texto: "Diseño y Desarrollo: Mateo Díaz & Santiago Cilento",
        // Enlace a WhatsApp API. Reemplaza los X con el número real.
        url: "https://www.linkedin.com/in/mateo-diaz-valdez-9a13b6314/",
        // El ID del contenedor HTML donde vamos a inyectar la firma
        targetId: "dev-credits"
    };

    // 2. BUSQUEDA SEGURA
    // Buscamos si el sitio web actual tiene el contenedor preparado.
    const contenedor = document.getElementById(config.targetId);

    // 3. INYECCIÓN (Solo si existe el contenedor)
    if (contenedor) {
        // Creamos el enlace de forma programática para más seguridad que innerHTML puro
        const enlace = document.createElement('a');
        
        enlace.href = config.url;
        enlace.textContent = config.texto;
        
        // Atributos de seguridad y UX
        enlace.target = "_blank";       // Abrir en nueva pestaña
        enlace.rel = "noopener noreferrer"; // Previene ataques de seguridad (Tabnabbing)
        
        // Estilos base para asegurar que se vea bien sin importar el CSS del cliente
        // (El cliente puede sobrescribir esto con CSS si quiere, pero esto es un fallback)
        enlace.style.textDecoration = "none";
        enlace.style.color = "inherit"; // Hereda el color del footer del cliente
        enlace.style.opacity = "0.8";   // Un poco sutil
        enlace.style.fontSize = "0.9em";
        enlace.style.fontWeight = "500";
        enlace.style.transition = "opacity 0.2s";

        // Efecto hover simple con JS
        enlace.onmouseover = () => enlace.style.opacity = "1";
        enlace.onmouseout = () => enlace.style.opacity = "0.8";

        // Limpiamos cualquier cosa que hubiera y ponemos la firma
        contenedor.innerHTML = ''; 
        contenedor.appendChild(enlace);
        
        console.log("Firma de desarrollador inyectada correctamente.");
    }
})();
