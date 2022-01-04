import axios from "axios";

console.log("hello from the renderer");
const coreCount = document.getElementById("cores");

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});

setTimeout(() => {
  instance.get("hello").then((data) => {
    coreCount && (coreCount.innerText = `Core Counts: ${data.data}`);
  });
}, 10000);
