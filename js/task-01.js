const lengthItems = document.querySelectorAll('.item');
console.log("Number of categories: ", lengthItems.length);

const contents = lengthItems.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log("Elements:", item.children[1].children.length);
})