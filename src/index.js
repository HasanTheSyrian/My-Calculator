const { app, BrowserWindow,} = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
   const mainWindow = new BrowserWindow({
    title: "Hasan's Super Ultimate Extra Cool Calculator Of Destruction",
    width: 500,
    height: 700,
    resizable: false, // This makes the window unresizable, this is a boolean, should be treated like one.
    autoHideMenuBar: true, // This hides the menu bar. I hate the menu bar.  
    maximizable: false,    
    icon: 'F:/Photoshop/Logo/HUECCODnew.png' // The program's icon.    
  }); 

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});~

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function insert(num){ // Calculator functions

  document.form.textview.value = document.form.textview.value+num
}

function equal(){
  var exp = document.form.textview.value
  if(exp){
      document.form.textview.value = eval(exp)
  }
}
function clean(){
  document.form.textview.value = ""

}

function back(){
  var exp = document.form.textview.value
  document.form.textview.value = exp.substring(0,exp.length-1)
}

function decimal(){
  
  document.form.textview.value = document.form.textview.value+num.toFixed(2);
  
}

