const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContent = Array.from(document.getElementsByClassName("tab__content"));
tabs.forEach(function(item, index) {
    item.addEventListener("click", function(e){
        const indexActiveTab = tabs.indexOf(e.target);
        for(let i = 0; i < tabs.length; i++) {
            if(i !== indexActiveTab) {
                if(tabs[i].classList.contains("tab_active")) {
                    tabs[i].classList.remove("tab_active");
                }
                if(tabsContent[i].classList.contains("tab__content_active")) {
                    tabsContent[i].classList.remove("tab__content_active");
                }
            }
        }
        if(index === indexActiveTab && !item.classList.contains("tab_active")) {
            item.classList.add("tab_active");
            tabsContent[index].classList.add("tab__content_active");
        }
    });
});