chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.tabs.create({
        url: `https://jtcguitar.com/io/io.pdf.php?id=${request}`,
        index: sender.tab.index + 1
    });
});
