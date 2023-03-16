const requestBtn = document.getElementById("request-btn")
const ideaSection = document.getElementById("idea")


/**
*  @param data.activity   Activity returned by BoredBot API
* */
requestBtn.addEventListener("click", ()=>{
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => ideaSection.textContent = data.activity);
})