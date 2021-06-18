let fileToUpload;
let fileType;

let subreddit = "memes";

function createPostText(){
    let title = document.getElementById("title_text").value;
    let text = document.getElementById("text_text").value;
    let dateValues = getPostAndDateValues();

    let data = {
        "title" : title,
        "text" : text,
        "uName" : authentication.currentUser.displayName,
        "sender" : authentication.currentUser.uid,
        "date" :  dateValues[1],
        "time" : dateValues[2],
        "type" : "text"
    };

    let database_path = "r/" + subreddit + "/posts/" + dateValues[0];
    database.ref(database_path).set(data);
    database.ref("users/" + authentication.currentUser.uid + "/posts/" + dateValues[0]).set(database_path);
    document.location = "index.html"

}

function createPostImage(){
    if (fileType === "image"){
        let title = document.getElementById("title_image").value;
        let text = document.getElementById("text_image").value;
        let dateValues = getPostAndDateValues();

        let data = {
            "title" : title,
            "text" : text,
            "uName" : authentication.currentUser.displayName,
            "sender" : authentication.currentUser.uid,
            "date" :  dateValues[1],
            "time" : dateValues[2],
            "type" : "image"
        };

        let database_path = "r/" + subreddit + "/posts/" + dateValues[0];

        let fileUploadExtension = "." + fileToUpload.name.split('.').pop();
        let file_path = "subreddits/" + subreddit + "/images/" + dateValues[0] + fileUploadExtension;

        uploadFile(file_path, data, database_path, dateValues[0]);

    }else{
        showSnackbarAlert("choose an image");
    }
}

function createPostVideo(){
    if (fileType === "video"){
        let title = document.getElementById("title_video").value;
        let text = document.getElementById("text_video").value;
        let dateValues = getPostAndDateValues();

        let data = {
            "title" : title,
            "text" : text,
            "uName" : authentication.currentUser.displayName,
            "sender" : authentication.currentUser.uid,
            "date" :  dateValues[1],
            "time" : dateValues[2],
            "type" : "video"
        };

        let database_path = "r/" + subreddit + "/posts/" + dateValues[0];

        let fileUploadExtension = "." + fileToUpload.name.split('.').pop();
        let file_path = "subreddits/" + subreddit + "/videos/" + dateValues[0] + fileUploadExtension;

        uploadFile(file_path, data, database_path, dateValues[0]);
    }else{
        showSnackbarAlert("choose a video");
    }
}

function createPostFile(){
    alert("This post will be created, but you will now be able to see this in any listing as viewing of this kind of posts is not implemented");
    if (fileType === "*"){
        let title = document.getElementById("title_file").value;
        let text = document.getElementById("text_file").value;
        let dateValues = getPostAndDateValues();

        let data = {
            "title" : title,
            "text" : text,
            "uName" : authentication.currentUser.displayName,
            "sender" : authentication.currentUser.uid,
            "date" :  dateValues[1],
            "time" : dateValues[2],
            "type" : "file"
        };

        let database_path = "r/" + subreddit + "/posts/" + dateValues[0];

        let fileUploadExtension = "." + fileToUpload.name.split('.').pop();
        let file_path = "subreddits/" + subreddit + "/files/" + dateValues[0] + fileUploadExtension;

        uploadFile(file_path, data, database_path, dateValues[0]);
    }else{
        showSnackbarAlert("choose a file");
    }
}

function createPostHtml(){
    alert("This post will be created, but you will now be able to see this in any listing as viewing of this kind of posts is not implemented");
    let title = document.getElementById("title_html").value;
    let text = document.getElementById("text_html").value;
    let html = document.getElementById("html_html").value;
    let dateValues = getPostAndDateValues();

    let data = {
        "title" : title,
        "text" : text,
        "uName" : authentication.currentUser.displayName,
        "sender" : authentication.currentUser.uid,
        "date" :  dateValues[1],
        "time" : dateValues[2],
        "type" : "html",
        "html" : html
    };

    let database_path = "r/" + subreddit + "/posts/" + dateValues[0];
    database.ref(database_path).set(data);
    database.ref("users/" + authentication.currentUser.uid + "/posts/" + dateValues[0]).set(database_path);
    document.location = "index.html"
}

function selectFile(type, feedbackContainer){

    let mimeType = type + "/*";
    let dudInput = document.createElement("input");
    dudInput.type = "file";
    dudInput.accept = mimeType;
    dudInput.addEventListener("change", fileSelected);
    function fileSelected(fileFakePath){
        let file = fileFakePath.target.files[0];
        console.log(file);
        fileToUpload = file;
        fileType = type;
        let containers = document.getElementsByClassName("roundIconContainer");
        let singleContainer;
        for (singleContainer of containers){
            singleContainer.style["background"] = "#636363"
        }
        document.getElementById("attach_file").innerText = "Select File";
        document.getElementById("attach_image").innerText = "Select Image";
        document.getElementById("attach_video").innerText = "Select Video";
        feedbackContainer.innerText = "Selected"
    }
    dudInput.click();
}

function attachFile() {
    let  attachFileContainer = document.getElementById("attach_file")
    if (fileToUpload) {
        if (fileType === "*") {
            fileToUpload = undefined;
            fileType = undefined;
            attachFileContainer.innerText = "Select File";
        } else {
            selectFile("*", attachFileContainer);
        }
    } else {
        selectFile("*", attachFileContainer);
    }
}

function attachVideo(){
    let  attachVideoContainer = document.getElementById("attach_video")
    if (fileToUpload){
        if (fileType === "video"){
            fileToUpload = undefined;
            fileType = undefined;
            attachVideoContainer.innerText = "Select Video";
        }
        else{
            selectFile("video", attachVideoContainer);
        }
    }
    else{
        selectFile("video", attachVideoContainer);
    }

}

function attachImage(){
    let  attachImageContainer = document.getElementById("attach_image")
    if (fileToUpload){
        if (fileType === "image"){
            fileToUpload = undefined;
            fileType = undefined;
            attachImageContainer.innerText = "Select Image";
        }
        else{
            selectFile("image", attachImageContainer);
        }
    }
    else{
        selectFile("image", attachImageContainer);
    }
}

function uploadFile(filePath, data, database_path, identifier){

    let fileUploadPath = storage.ref(filePath);
    let dbRef = database.ref(database_path)
    let dialog = document.getElementById("dialog");
    let dialogHtmlCode = dialog.innerHTML;
    inflateProgressDialog(dialog);

    let progressBar = document.getElementById("progressBar");
    let progressValue = document.getElementById("progressValue");

    let fileUploadTask = fileUploadPath.put(fileToUpload);
    fileUploadTask.on('state_changed', function(snapshot){
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.round(progress);
        let progressStyleString = progress.toString() + "%";
        progressBar.style["width"] = progressStyleString;
        progressValue.innerText = progressStyleString;
    }, function(error) {
        console.log(error);
        showSnackbarAlert(error);
        dialog.style["display"] = "none";
        dialog.innerHTML = dialogHtmlCode;
    }, function() {
        fileUploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            dialog.style["display"] = "none";
            dialog.innerHTML = dialogHtmlCode;
            data["fileUri"] = downloadURL;
            console.log(data);
            dbRef.set(data);
            database.ref("users/" + authentication.currentUser.uid + "/posts/" + identifier).set(database_path);
            location.href = "index.html"
        });
    });

}

function getPostAndDateValues(){
    let d = new Date();
    let ss = d.getSeconds().toString().padStart(2, '0');
    let mm = d.getMinutes().toString().padStart(2, '0');
    let HH = d.getHours().toString().padStart(2, '0');
    let dd = d.getDate().toString().padStart(2, '0');
    let MM = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = d.getFullYear();
    let timeConstant = yyyy + MM + dd + HH + mm + ss;
    return [
        "post_id_" + (50000000000000 - parseInt(timeConstant)).toString(),
        dd + '/' + MM + '/' + yyyy,
        HH + ':' + mm + ':' + ss,];
}

function inflateProgressDialog(dialog) {
    let dialogContent = document.getElementById("content");
    dialogContent.innerText = "";

    let contentContainer = document.createElement("div");
    contentContainer.id = "progressDialogContentContainer";

    let header = document.createElement("h2");
    header.innerText = "Uploading File";

    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";

    let progressBar = document.createElement("div");
    progressBar.id = "progressBar";

    progressBarContainer.appendChild(progressBar);

    let progressValue = document.createElement("p");
    progressValue.innerText = "0%";
    progressValue.id = "progressValue";

    dialogContent.appendChild(contentContainer);
    contentContainer.appendChild(header);
    contentContainer.appendChild(progressBarContainer);
    contentContainer.appendChild(progressValue);

    dialog.style["display"] = "block";

}

function renderPost(container, post){
    let valid = false;
    let rendered_post = document.createElement("li");
    rendered_post.className = "list-group-item";
    if (post["type"] === "text"){
        rendered_post.innerHTML = textTemplate;
        valid = true;
    }
    if (post["type"] === "image"){
        rendered_post.innerHTML = imageTemplate;
        rendered_post.getElementsByClassName("post-image")[0].src = post["fileUri"];
        valid = true;
    }
    if (post["type"] === "video"){
        rendered_post.innerHTML = videoTemplate;
        rendered_post.getElementsByClassName("post-video")[0].src = post["fileUri"];
        valid = true;
    }
    if (valid) {
        rendered_post.getElementsByClassName("post-title")[0].innerText = post["title"];
        rendered_post.getElementsByClassName("post-text")[0].innerText = post["text"];
        rendered_post.getElementsByClassName("post-user")[0].innerText = "u/" + post["uName"];
        container.appendChild(rendered_post);
    }
}

function renderPostsIndex(){

    let list = document.getElementById("posts-main");
    database.ref('r/memes/posts').once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                renderPost(list, childSnapshot.val())
            });
        });
}

function renderPostsUser(){
    let list = document.getElementById("posts-main");
    database.ref('users/' + authentication.currentUser.uid + '/posts').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            database.ref(childSnapshot.val()).once('value', (snapshot2) => {
                    renderPost(list, snapshot2.val())
                });
            });
        });
}

function showSnackbarAlert(message){
    let snackBar = document.getElementById("snackbar");
    snackBar.innerText = message;
    snackBar.className = "show";

    setTimeout(function(){
            snackBar.className = snackBar.className.replace("show", "");
        }, 3000
    );
}
