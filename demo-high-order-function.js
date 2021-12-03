// Démo du concept de fonction de rang supérieur
// Concept de Programmmation fonctionnelle

const square = n => n*n

const cube = n => n*n*n

console.log(square(5))
console.log(cube(5))

const transform = (f, v) => f(v)

console.log(transform(square, 6))
console.log(transform(cube, 6))


