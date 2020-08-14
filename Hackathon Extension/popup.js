document.getElementById("CopyURL").addEventListener("click", getTab);

function getTab(){
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
}, 
    function(tabs) {
        var tab = tabs[0];
        var el = document.createElement('textarea');
        el.value = tab.url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert(tab.url);
    });
        }

document.getElementById("beeSorted").addEventListener("click", sendToWebsite);

function sendToWebsite(){
    var newURL = "https://drsxhi-hackthis-site.glitch.me/index.html";
        chrome.tabs.create({ url: newURL });
}