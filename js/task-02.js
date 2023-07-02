const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
  
  const ingr = document.querySelector('#ingredients');
  
  const element = ingredients.map(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.classList.add('item');
    return li
  });
  console.log(element)
  
  ingr.append(...element)
  