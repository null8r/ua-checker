var i, j;
var ua = window.navigator.userAgent.toLowerCase();
var browserType = [
  [
    "msie",
    "trident",
    "edge",
    "edg",
    "chrome",
    "firefox",
    "safari",
  ],
  [
    "Internet Explorer 10 以前",
    "Internet Explorer 11",
    "Microsoft Edge (EdgeHTML)",
    "Microsoft Edge (Chromium)",
    "Google Chrome",
    "Mozilla FireFox",
    "Apple Safari",
    "Other Browsers"
  ]
];
var deviceType = [
  [
    "android",
    "iphone",
    "ipad",
    "ipod touch",
    "windows",
    "macintosh",
    "cros",
  ],
  [
    "Android",
    "iPhone",
    "iPad",
    "iPod touch",
    "Windows",
    "Macintosh",
    "ChromeOS or ChromiumOS",
    "Other Devices"
  ]
];

function uacheck(){
  for(i=0; i<=7; i++){
    if(ua.indexOf(browserType[0][i]) != -1){
      document.querySelector("#browser").innerHTML = browserType[1][i];
      i = 100;
    }
    else if(i == 7){
      document.querySelector("#browser").innerHTML = browserType[1][i];
    }
  }

  for(j=0; j<=7; j++){
    if(ua.indexOf(deviceType[0][j]) != -1){
      document.querySelector("#device").innerHTML = deviceType[1][j];
      j = 100;
    }
    else if(j == 7){
      document.querySelector("#device").innerHTML = deviceType[1][j];
    }
  }

  document.querySelector("#ua").innerHTML = ua;
}

window.onload  = function(){
  twemoji.parse(document.body);

  uacheck();
}
