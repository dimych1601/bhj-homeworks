(() => {
    const dropdownValue = document.querySelector( ".dropdown__value" );
    const dropdownList = document.querySelector( ".dropdown__list" );
    const dropdownLink = Array.from(document.getElementsByClassName( "dropdown__link" ));
    
    dropdownValue.addEventListener("click", () => {
        dropdownList.classList.toggle( "dropdown__list_active" );
    });

    dropdownLink.forEach(item => item.onclick = () => {
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.toggle( "dropdown__list_active" );
        return false;
    });
})();