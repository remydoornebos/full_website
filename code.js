var darkModeEnabled = false;
//TODO: implement dark mode local storage var to load pages correctly with the theme
localStorage.setItem("darkModeEnabled", "false");

function mouseOverMenu(x) {
  document.getElementById(x).style.fontWeight = 900;
}

function mouseOutMenu(x) {
  document.getElementById(x).style.fontWeight = 100;
}

function toggleAltMenu() {
  var altMenuObj = document.getElementById("altMenu");
  var altMenuIcon = document.getElementById("altMenuIcon");
  console.log(altMenuObj);
  altMenuObj.style.width = "100%";
  //altMenuObj.style.height = document.getElementsByTagName("body");


  if (darkModeEnabled) {
    altMenuObj.style.backgroundColor = "#434343";
    altMenuIcon.src = "image_assets/dark_mode/alt_menu_x_dark.svg";
  } else {
    altMenuObj.style.backgroundColor = "white";
    altMenuIcon.src = "image_assets/alt_menu_x.svg";
  }
}

function closeMenu() {
  document.getElementById("altMenu").style.width = "0%";
}

function mouseOverAltMenu() {
  if (darkModeEnabled) {
    document.getElementById("altMenuIcon").src = "image_assets/dark_mode/alt_menu_hover_dark.svg";
  } else {
    document.getElementById("altMenuIcon").src = "image_assets/alt_menu_hover.svg";
  }
}

function mouseOutAltMenu() {
  if (darkModeEnabled) {
    document.getElementById("altMenuIcon").src = "image_assets/dark_mode/alt_menu_dark.svg";
  } else {
    document.getElementById("altMenuIcon").src = "image_assets/alt_menu.svg";
  }
}

function mouseOverSig() {
  if (darkModeEnabled) {
    document.getElementById("signature").src = "image_assets/dark_mode/signature_hover_dark.svg";
  }
  else {
    document.getElementById("signature").src = "image_assets/signature_hover.svg";
  }
  console.log("signature over");
}

function mouseOutSig() {
  if (darkModeEnabled) {
    document.getElementById("signature").src = "image_assets/dark_mode/signature_dark.svg";
  } else {
    document.getElementById("signature").src = "image_assets/signature.svg";
  }
  console.log("signature out");
}

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    document.getElementById("signature").src = "image_assets/dark_mode/signature_dark.svg";
    document.getElementById("square").src = "image_assets/dark_mode/square_right_dark.svg";
    document.getElementById("altMenuIcon").src = "image_assets/dark_mode/alt_menu_dark.svg";
    populateMotif();
  } else {
    document.getElementById("signature").src = "image_assets/signature.svg";
    document.getElementById("square").src = "image_assets/square_right.svg";
    document.getElementById("altMenuIcon").src = "image_assets/alt_menu.svg";
    populateMotif();
  }
  var back = document.body;
  back.classList.toggle("bodyDark");

  var contents = document.getElementsByClassName("staticLinks");
  for (i = 0; i < 3; i++) {
    contents[i].classList.toggle("staticLinksDark");
  }

  var links = document.getElementById("content");
  links.classList.toggle("contentDark");
  console.log("inside toggleDarkMode() fn");
}

/* getting the height of elements as a test */
/* var clientHeight = document.getElementById("content").offsetHeight; */

function populateMotif() {
  console.log("(1)number of child nodes: " + document.getElementById("leftMotif").childNodes.length);
  var content_height = document.getElementById("content").clientHeight;

  var motifHeight = 600;
  var numMotifs = (parseInt(content_height / motifHeight));
  console.log("Height of the content div is: " + content_height);
  console.log("ContentHeight/motifHeight ignoring decimal is: " + numMotifs);
  console.log("darkModeEnabled: " + darkModeEnabled);
  const motif = document.createElement("img");


  //first depopulate the motif elements
  if ((document.getElementById("leftMotif").childNodes.length != null) && (document.getElementById("leftMotif") != null)) {
    for (let i = 0; i < numMotifs; i++) {
      document.getElementById("leftMotif").removeChild(document.getElementById("motifImg" + i));
      console.log("(2)number of child nodes: " + document.getElementById("leftMotif").childNodes.length);
    }
  }


  //if (numMotifs == 0) { document.getElementById("leftMotif").appendChild(motif); }

  //then populate elements
  for (let i = 0; i < numMotifs; i++) {
    if (darkModeEnabled) { motif.src = "image_assets/dark_mode/rect_motif_dark.svg"; }
    else { motif.src = "image_assets/rect_motif.svg"; }
    motif.id = "motifImg" + i;
    document.getElementById("leftMotif").appendChild(motif);
    console.log(motif.id + " appended");
    motif.style.width = "200px";
  }
  console.log("(3)number of child nodes: " + document.getElementById("leftMotif").childNodes.length);
}
