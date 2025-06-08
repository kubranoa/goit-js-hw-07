document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("#categories .item");
  console.log(`Number of categories: ${categories.length}\n`);
  categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const itemCount = category.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}\n`);
  });
});
