const API = "https://api.github.com/users/";

let input = document.getElementById("user");
let info = document.getElementById("info");
let button = document.getElementById("search");
button.addEventListener("click", getUser);

async function getUser() {
  const response = await fetch(`${API}${input.value}`);
  const userka = await response.json();

  console.log(userka);

  if (input.value === "") {
    let error = document.createElement("h1");
    error.textContent = "debil obnaruzhen";
    info.appendChild(error);
    error.style.marginTop = "100px";
  } else {
    let user = document.createElement("h1");
    user.textContent = userka.login;
    info.appendChild(user);
    user.style.marginTop = "100px";

    let userImg = document.createElement("img");
    userImg.src = userka.avatar_url;
    info.appendChild(userImg);

    let userSubscribers = document.createElement("h3");
    userSubscribers.textContent = `followers:  ${userka.followers}`;
    info.appendChild(userSubscribers);

    let userFollowing = document.createElement("h3");
    userFollowing.textContent = `following:  ${userka.following}`;
    info.appendChild(userFollowing);

    let userID = document.createElement("h3");
    userID.textContent = `id:  ${userka.id}`;
    info.appendChild(userID);

    let userNodeId = document.createElement("h3");
    userNodeId.textContent = `node ID:  ${userka.node_id}`;
    info.appendChild(userNodeId);

    let userName = document.createElement("h3");
    userName.textContent = `user's name:  ${userka.name}`;
    info.appendChild(userName);

    let userType = document.createElement("h3");
    userType.textContent = `type:  ${userka.type}`;
    info.appendChild(userType);

    let userRepos = document.createElement("h3");
    userRepos.textContent = `public repositories:  ${userka.public_repos}`;
    info.appendChild(userRepos);

    let userGists = document.createElement("h3");
    userGists.textContent = `public gists:  ${userka.public_gists}`;
    info.appendChild(userGists);

    let userCreatedAt = document.createElement("h3");
    userCreatedAt.textContent = `created at:  ${userka.created_at}`;
    info.appendChild(userCreatedAt);

    let userAdmin = document.createElement("h3");
    userAdmin.textContent = `is admin?:  ${userka.site_admin}`;
    info.appendChild(userAdmin);

    input.value = "";
  }
}
