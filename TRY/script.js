function hasStrongPassword(password) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const symbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numberRegex = /\d/;

    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasSymbol = symbolRegex.test(password);
    const hasNumber = numberRegex.test(password);

    return hasUppercase && hasLowercase && hasSymbol && hasNumber;
}

// Usage example:
document.getElementById("Connect").addEventListener("click", function() {
    const userPassword = document.getElementById("password").value;
    if (hasStrongPassword(userPassword)) {
        // The password is strong. You can proceed with your logic here.
        alert("Password is strong. You can proceed.");
    } else {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number.");
    }
});