
/*
* get-manifest-external.js
*
* Include this in the background page of a Chrome extension
* and you can send a message from an external webpage to 
* retrieve the manifest file. The requesting page needs to
* be added to the externally_connectable attribute of
* manifest.json
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
