
var menuButton = document.getElementById('menuv2');
var sidebar = document.getElementById('sidebar');
var navigationLinkItem = document.querySelectorAll('.navigation_link_item');

navigationLinkItem.forEach(linkItem => {
    let dropDownTriggerbutton = linkItem.querySelector('.navigation_link');

    dropDownTriggerbutton.addEventListener('click', (event) => {

        let dropDownElement = linkItem.querySelector('.nav_link_item_dropdown');

        if (dropDownElement) {
            linkItem.classList.toggle("active");

            let subDropDownLinkItem = dropDownElement.querySelectorAll('.nav_link_item_dropdown_item');


            subDropDownLinkItem.forEach(subDropdown => {

                subDropdown.addEventListener('click', (event) => {
                    for (let index = 0; index < subDropDownLinkItem.length; index++) {
                        subDropDownLinkItem[index].classList.remove('active');

                    }
                    subDropdown.classList.add('active');
                });
            });

        }
    });
});

menuButton.addEventListener("click" ,(Event) => {
	sidebar.classList.toggle("openSidebar")
})