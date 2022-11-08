const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);

function removeElement(array, item) {
    if(array.includes(item)) {
        array.splice(array.indexOf(item), 1);
    } else {
        console.log('Такого елемента не існує в масиві');
    }
}
// Результат: [1, 2, 3, 4, 6, 7]

