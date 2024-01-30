if(navigator.serviceWorker){
    //* if("serviceWorker" in navigator)
    // alert("supported")
    navigator.serviceWorker.register("./SW.js").then(res=>{
        console.log(res)
    }).catch(err=>console.log(err))
}else{
    // alert("not supported")
}

  let leavingTime;

  window.addEventListener('beforeunload', (event) => {
    // Store the current time when the user is about to leave
    leavingTime = new Date();
  });

  document.addEventListener('visibilitychange', () => {
    // Check if the tab is hidden
    if (document.visibilityState === 'hidden') {
      const timeSpentOnPage = new Date() - leavingTime;

      // Display a notification when the user leaves the page
      if (Notification.permission === 'granted') {
        new Notification('Thanks for visiting!', {
          body: `You spent ${Math.round(
            timeSpentOnPage / 1000
          )} seconds on this page.`,
        });
      }
    }
  });

  // Request notification permission
  document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  });



let mainBtn = document.getElementById('mainButton')
let locationmainbranch=document.getElementById('locationMainBranch')
let branch=document.getElementById('branch')
let secondBranch = document.getElementById('secondBranch')
function mainBranch(){
locationmainbranch.classList.add("mainbranch")
locationmainbranch.display="none";
}
function anybranch(){
    // secondBranch.classList.add("mainbranch");
    locationmainbranch.classList.remove("mainbranch");
}


