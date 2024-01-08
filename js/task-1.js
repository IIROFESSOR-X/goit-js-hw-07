const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const itemsList = Array.from(document.querySelectorAll('.item'));
itemsList.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems}`);
});