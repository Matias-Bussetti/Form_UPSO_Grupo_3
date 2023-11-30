const {generateText} = require('../util.js');

test('Salida de Nombre edad, y Nivel',()=>{
    const text = generateText('Nataly',22,'Licenciatura');
    expect(text).toBe('Registro OK de Nataly en: Licenciatura.')
});
test('Salida de Nombre edad, y Nivel con 18',()=>{
    const text = generateText('Aylen',18,'Maestría');
    expect(text).toBe('Registro OK de Aylen en: Maestría.')
});
test('Salida de Nombre edad, y Nivel(mayor de 65)',()=>{
    const text = generateText('Amado',66,'Doctorado');
    expect(text).toBe('No pudimos registrar a: Amado. Por favor contactá a soporte@dh.com para más información.')
});
test('Salida de Nombre edad, y Nivel(menor de 18)',()=>{
    const text = generateText('Marco',17,'Maestría');
    expect(text).toBe('Edad ingresada no válida. Por favor intentá nuevamente.')
});