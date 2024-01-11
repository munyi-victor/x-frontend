function more() {
  document.getElementById("more").style.display = "block";
}

function hide() {
  document.getElementById("more").style.display = "none";
}

function check() {
  document.querySelector(".not").style.backgroundColor = "grey";
}

function showMsg() {
  if (document.getElementById("msg").style.top === "45vh") {
    document.getElementById("msg").style.top = "92vh";
  } else {
    document.getElementById("msg").style.top = "45vh";
  }  
}