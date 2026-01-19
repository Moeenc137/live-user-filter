let result = document.getElementById("results");
let filter = document.getElementById("filter");
let listItems = [];

getData();

async function getData() {
  let res = await fetch("https://randomuser.me/api?results=50");
  let { results } = await res.json();

  result.innerHTML = "";

  results.foreach((user) => {
    let li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.}"
    `
  });
}
