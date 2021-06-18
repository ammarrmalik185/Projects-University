document.getElementById("mainForum").addEventListener('submit',
        function handleForm(event) {
            event.preventDefault();
        }
    );


function attachListenerLogin(){
    authentication.onAuthStateChanged((user) => {
        if (user) {
            location.href = "index.html"
        }
    });
}

function attachListenerSignup(){
    authentication.onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
            database.ref('users/' + authentication.currentUser.uid + '/uName').on('value', (snapshot) => {
                if (snapshot.exists()){
                    location.href = "index.html"
                }else{
                    console.log("dialog");
                    document.getElementById("dialog").style["display"] = "block";
                }
            });
        }
    });
}

function addUniqueName(){
    let unique_name = document.getElementById("uName").value;
    database.ref('u/' + unique_name).once('value', (snapshot) => {
        if (snapshot.exists()){
            document.getElementById("userNameExists").innerText = "Username Taken"
        }else {
            database.ref('users/' + authentication.currentUser.uid + "/uName").set(unique_name)
            database.ref('u/' + unique_name).set(authentication.currentUser.uid);
            authentication.currentUser.updateProfile({
                displayName: unique_name
            });
        }
    });

}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    authentication.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            showSnackbarAlert(errorMessage)
            console.log(errorMessage);
            console.log(errorCode)
        });
}

function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if (password === password2) {
        authentication.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                showSnackbarAlert(errorMessage)
                console.log(errorMessage);
                console.log(errorCode)
            });
    }
}

function showSnackbarAlert(error){
    document.getElementById("errorMessage").innerText = error;
}

// function showSnackbarAlert(message){
//     let snackBar = document.getElementById("snackbar");
//     snackBar.innerText = message;
//     snackBar.className = "show";
//
//     setTimeout(function(){
//             snackBar.className = snackBar.className.replace("show", "");
//         }, 3000
//     );
// }