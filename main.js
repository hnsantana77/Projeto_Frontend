
const search = document.getElementById("search");
const profile = document.getElementById("profile");
const url = "https://api.github.com/users";
const client_id = "Iv1.122f7466f179dc06";
const client_secret = "85b52b03d878896e66ca3657592bce9f42a219d9";

search.addEventListener("click", e => {
    const user = document.getElementById("field").value;
    if (user.length > 0) {
        getUser(user).then(res => {
            showProfile(res);
        });
    }
});

async function getUser(user) {
    const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secrect=${client_secret}`);
    const profile = profileResponse.json();

    return profile;
}

function showProfile(user) {

    if (user.message) {
        profile.innerHTML = `
        <div class="alert alert-warning">
            <strong>Atenção!</strong> Usuário ${document.getElementById("field").value} não foi encontrado.
        </div>
        `;

        return;
    }

    profile.innerHTML = `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top>" src="${user.avatar_url}" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Repositórios: <span class="badge">${user.public_repos}</span></li>
                        <li class="list-group-item">Seguidores: <span class="badge">${user.followers}</span></li>
                        <li class="list-group-item">Seguindo: <span class="badge">${user.following}</span></li>                                
                    </ul>
                    <div class="card-body">
                        <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver Perfil</a>
                    </div>
                </div>
                <div class="col-md-8"><div id="repos"></div></div>
            </div>`;
}

function recebeTurmaUsuario(user) {
    var turmaUsuario = document.getElementById("field").value;
    }