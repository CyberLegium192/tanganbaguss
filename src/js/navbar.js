const navbarClicked = () => {
    const menuList = document.getElementById("navbar-sticky");

    // Toggle kelas 'max-sm:h-screen' dan 'max-sm:h-0'
    if (menuList.classList.contains("max-sm:h-screen")) {
        menuList.classList.remove("max-sm:h-screen");
        menuList.classList.add("max-sm:h-0");
    } else {
        menuList.classList.remove("max-sm:h-0");
        menuList.classList.add("max-sm:h-screen");
    }

    console.log("Navbar toggled");
};