let result = document.getElementById("results");
let filter = document.getElementById("filter");
let listItems = [];

getData();

async function getData() {
  let res = await fetch("https://randomuser.me/api?results=50");
  let results = await res.json();
  console.log(results);

  result.innerHTML = "";

  results.foreach((user) => {
    let li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}
        "/>
        <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} , ${user.location.country}</p>
        </div>
        `;

    result.appendChild(li);
  });
}
