function refresh(){
    window.refresh()
}
function showDateOfBirth(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    if (year === "" || month === "" || day === "") {
        alert("Enter Age")
        return
    }
    let ml = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateOfBirth = new Date(year, ml.indexOf(month)+1 , day, 0, 0 , 0);
    let ageDifMs = Date.now() - dateOfBirth.getTime();
    let ageDate = new Date(ageDifMs);
    alert("Age is " + Math.abs(ageDate.getUTCFullYear() - 1970))
}
function checkEmail(){
    const email = document.getElementById("mail").value;
    const found = email.search("@");
    if(found >= 0)
        alert("@ not found in email: " + email);
    else
        alert("@ not found in email: " + email);

    const found2 = email.search(".com");
    if(found2 >= 0)
        alert(".com in "+ email+"found");
    else
        alert(".com in "+ email+ " not found.");
}