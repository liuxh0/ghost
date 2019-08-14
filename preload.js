const { electron } = require('electron');

const { spawn } = require('child_process');

const { remote } = require('electron');

const { dialog } = require('electron').remote;

const { BrowserWindow } = require('electron').remote;

function init() {
  window.bridge = {
    electron,
    spawn,
    dialog,
    BrowserWindow,
    remote,
  };
}

init();
