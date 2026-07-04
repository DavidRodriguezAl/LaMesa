// =====================================================
// FUNCIÓN PARA GENERAR UN CALENDARIO
// =====================================================
function generateCalendar(month, year, containerId) {
    // Buscamos el contenedor de días dentro del mes
    const container = document.querySelector(`#${containerId} .days`);
    if (!container) return;

    // Obtener el primer día del mes (0 = domingo, 1 = lunes...)
    const firstDay = new Date(year, month, 1).getDay();
    // Cantidad de días del mes
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Ajuste para que la semana empiece en LUNES (en JS domingo = 0)
    let startOffset = (firstDay === 0) ? 6 : firstDay - 1;

    let html = '';

    // --- Rellenar días vacíos al inicio (antes del día 1) ---
    for (let i = 0; i < startOffset; i++) {
        html += `<span></span>`;
    }

    // --- Rellenar los días del mes ---
    for (let d = 1; d <= daysInMonth; d++) {
        const dayOfWeek = new Date(year, month, d).getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6); // domingo o sábado
        html += `<span class="${isWeekend ? 'weekend' : ''}">${d}</span>`;
    }

    // Insertar el HTML generado
    container.innerHTML = html;
}

// =====================================================
// EJECUTAR CUANDO EL DOM ESTÉ CARGADO
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    // Generamos calendario para Julio 2026 (mes = 6 porque empieza en 0)
    generateCalendar(6, 2026, 'month-jul');
    // Generamos calendario para Agosto 2026 (mes = 7)
    generateCalendar(7, 2026, 'month-ago');
});