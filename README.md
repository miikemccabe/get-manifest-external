# get-manifest-external

Include this file in a Chrome App or Extension's background page
and it will allow you to request the manifest file from an
external page.

## Usage

### background.js
```javascript
// Require this module in your background.js

require('get-manifest-external');

```

### manifest.json
```json
  
  ...

  "externally-connectable": {
    "matches": ["your-external-page-here"]
  }  

```

### External page
```javascript

chrome.runtime.sendMessage(<your extension key>, { message: 'getManifest' }, function(manifest) {
  console.log(manifest);
});
```

## Why?
Can be used to check if an extension is installed as well as displaying 
the currently installed extension's version.
