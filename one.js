
        let menuIcon = document.querySelector(".menu-icons i")
        let navLinks = document.querySelector("#navLinks")

        navLinks.style.maxHeight = "0";

        menuIcon.addEventListener("click", () => {
            if (navLinks.style.maxHeight === "0px" || navLinks.style.maxHeight === "") {
                navLinks.style.maxHeight = "350px";
            } else {
                navLinks.style.maxHeight = "0";
            }
        })