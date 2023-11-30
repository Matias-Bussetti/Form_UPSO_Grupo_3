const {generateText, validateInput} = require('../util.js');

test('Salida de Nombre edad, y Nivel',()=>{
    const text = generateText('Nataly',22,'Licenciatura');
    expect(text).toBe('Registro OK de Nataly en: Licenciatura.')
});


test('Dato name',()=>{
    const nombre = 'Nataly';
    const text = generateText(nombre,22,'Licenciatura');
    const nombre2= text.includes(nombre);
    expect(nombre2).toBe(true);
});
test('Dato level',()=>{
    const level = 'Licenciatura';
    const text = generateText('Martina',22,level);
    const level2= text.includes(level);
    expect(level2).toBe(true);
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

test('Salida de Nombre edad, y Nivel(menor de 18)',()=>{
    const text = generateText('Paloma',30);
    expect(text).toBe('Registro OK de Paloma en: undefined.')
});

// test('a ver',()=>{
//     const name = generateText('Paloma');
//     expect(name).toBe('Paloma')
// });


test("ValidateInput caso 1", () => {
    expect(validateInput("a", true)).toBeTruthy();
  });
  
  test("ValidateInput caso 2", () => {
    expect(validateInput(" ", false)).toBeTruthy();
  });
  
  test("ValidateInput caso 3", () => {
    expect(validateInput("", false)).toBeFalsy();
  });
  
  test("Validate Input caso falso", () => {
    expect(validateInput("", false)).toBeFalsy();
  });
  