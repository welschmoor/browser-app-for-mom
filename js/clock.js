"use strict";

const clock = document.getElementById('clock')



const setTime = () => {
  const date = new Date()
  clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
}
setTime()
setInterval(setTime, 1000);