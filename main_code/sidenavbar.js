// javascript for fixed navbar toogle effect 

document.querySelector('.navbaropened').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.navbarclosed').style.display = 'inline'
        document.querySelector('.navbaropened').style.display = 'none'
    } else {
        document.querySelector('.navbaropened').style.display = 'inline'
        document.querySelector('.navbarclosed').style.display = 'none'
    }
})
