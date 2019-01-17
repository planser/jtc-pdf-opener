document.addEventListener("click", event => {

    if (event.target && event.target.textContent != "PDF") return;

    let element = event.target.parentElement;
    while (element.classList.contains("gridder-show") == false) {
        element = element.parentElement;
    }

    const selectedItem = element.parentElement.querySelector(".selectedItem");
    if (selectedItem) {
        const match = selectedItem.id.match(/lib-item-(\d+)/);
        if (match && match.length > 1) {
            event.stopPropagation();
            event.preventDefault();

            chrome.runtime.sendMessage(null, match[1]);
        }
    }
}, true);