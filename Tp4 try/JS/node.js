// Redireccionar a la página de Wikipedia según el modelo seleccionado
function redirectToWiki(model) {
    switch (model) {
        case 'Mustang':
            window.location.href = 'https://es.wikipedia.org/wiki/Ford_Mustang';
            break;
        case 'Focus':
            window.location.href = 'https://es.wikipedia.org/wiki/Ford_Focus';
            break;
        case 'Explorer':
            window.location.href = 'https://es.wikipedia.org/wiki/Ford_Explorer';
            break;
        default:
            break;
    }
}