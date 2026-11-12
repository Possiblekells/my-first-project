const grid = document.getElementById("grid");
const status = document.getElementById("status");

function createCard({ username, email }) {
  const card = document.createElement("div");
  card.className = "card";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = username.charAt(0).toUpperCase();

  const name = document.createElement("div");
  name.className = "username";
  name.textContent = username;

  const mail = document.createElement("div");
  mail.className = "email";
  mail.textContent = email;

  card.append(avatar, name, mail);
  return card;
}

async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Request failed: " + res.status);
    const users = await res.json();

    grid.replaceChildren(...users.map(createCard));
    status.textContent = users.length + " users";
  } catch (err) {
    status.textContent = "Could not load users.";
    console.error(err);
  }
}

loadUsers();