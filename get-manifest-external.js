
/*
*
* Used for extension dashboard
*/
chrome.runtime.onMessageExternal.addListener(
function(request, sender, sendResponse) {
    if (request) {
        if (request.message) {
            if (request.message == "getManifest") {
                var manifest = chrome.runtime.getManifest();
                sendResponse(manifest);
            }
        }
    }
    return true;
});
