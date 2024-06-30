document.addEventListener("DOMContentLoaded", () => {
    const setActiveMenu = (selector) => {
        const menuItems = document.querySelectorAll(selector);


        menuItems.forEach((item,index) =>{

            item.addEventListener("click", (event) =>{
                event.preventDefault();
                //Xoa cac active cu
                removeActiveClasses(menuItems);

                //Them active moi
                item.classList.add("active");
            });
        });

        const removeActiveClasses = (menuItems) => {
            console.log(menuItems);
            menuItems.forEach((value) => {
                value.classList.remove("active");
            });
        }      
    }

    setActiveMenu(".menu-main li");

});