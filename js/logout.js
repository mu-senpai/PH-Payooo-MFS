document.getElementById('btn-log-out').addEventListener('click', function() {
    console.log('Button Clicked');
    this.onclick = window.location.replace('../index.html');
})