# get-manifest-external

Include this file in a Chrome App or Extension's background page
and it will allow you to request the manifest file from an
external page.

## Usage

### Installation
```bash
npm install get-manifest-external --save
```

### background.js
```javascript

// Import the file into background.js 

import 'node_modules/get-manifest-external/get-manifest-external';

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
