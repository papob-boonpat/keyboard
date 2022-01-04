import { exec } from "child_process";
import { app, BrowserWindow, shell } from "electron";

let mainWindow: BrowserWindow | null;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile(__dirname + "/../index.html");
  mainWindow.on("ready-to-show", () => mainWindow?.show());

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("will-finish-launching", () => {
  shell.openPath(__dirname + "/../../backend/build/electronDeamon.app");
});
app.on("before-quit", () => {
  exec("killall electronDeamon");
});
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
