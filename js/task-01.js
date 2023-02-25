const categoriesEl = document.querySelector('#categories');

console.log('Number of categories:', categoriesEl.children.length);

const categoriesArrayEl = Array.from(categoriesEl.children);

categoriesArrayEl.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelector('ul').children.length}`);
});
