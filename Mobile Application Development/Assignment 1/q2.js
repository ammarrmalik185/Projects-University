function checkValidEmail(array = []) {
    return array.filter((value => {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexEmail.test(value);
    }))
}
console.log(checkValidEmail([`john@gmail.com`, `david.doe@md.com.uk`, `nathali@@gmail.com`,`mans@com.`]))
