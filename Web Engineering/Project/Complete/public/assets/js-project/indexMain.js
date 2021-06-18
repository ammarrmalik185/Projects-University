let inflated = false;

function attachListenerLogout(){
    authentication.onAuthStateChanged((user) => {
        if (!user) {
            location.href = "login.html"
        }else{
            database.ref('users/' + authentication.currentUser.uid).on('value', (snapshot) => {
                if (snapshot.exists()){
                    document.getElementById("username").innerText =
                        "   u/" + snapshot.val()["uName"];
                }else{
                    location.href = "signup.html"
                }
            });

        }
    });
}

function addInfoToProfile() {
    authentication.onAuthStateChanged((user) => {
        if (user && !inflated) {
            database.ref('users/' + authentication.currentUser.uid).on('value', (snapshot) => {
                document.getElementById("usernameTitle").innerText = "u/" + snapshot.val()["uName"];
                if (snapshot.child("bio").exists()){
                    document.getElementById("bio").innerText = snapshot.val()["bio"];
                }
            });
            renderPostsUser();
            inflated = true;
        }
    });
}

function logout(){
    authentication.signOut()
}

attachListenerLogout();