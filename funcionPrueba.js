const { readFileSync } = require ('fs');
function exportar(ruta) {
    return JSON.parse(readFileSync(ruta , "utf-8"));
}
module.exports = exportar;