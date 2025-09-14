document.getElementById('form-close').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
});

document.getElementById('form-close-signup').addEventListener('click', function() {
    document.getElementById('signup-container').style.display = 'none';
});

function showDetails(attractionId) {
    var details = document.getElementById(attractionId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
