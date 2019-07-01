//Author: Zach Swim, Tommy Clare
//Date: 6/10/2019

/////////////////////////////////////////////////////////////////// Function that, when called, reveals the rest of the image of the graph. ///////////////////////////////////////////////////////////////////
function displayRestOfGraph() {
document.getElementById("buttonAndBackground").style.width = "0px";
document.getElementById("TenMonthButton").style.opacity = "0";
}

//////////////////////////////////////////////  Function to close the side buttons when the page mask is clicked ///////////////////////////////////////////////////////////////////////
function closeSideButtons() {
//if a popup is not displayed the page mask can be clicked to close the side buttons
if (!document.getElementById("popupBox").style.display || document.getElementById("popupBox").style.display == "none") {
  //closes page mask
  document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0)";
  setTimeout(function(){ document.getElementById("pageMask").style.display = "none"; }, 750);
  //closes the communication tab
  document.getElementById("communicationSupport").classList.add("normalClass");
  document.getElementById("communicationSupport").classList.remove("transitionClass");
  document.getElementById("communicationSupport").style.backgroundColor = "white";
  //closes the patient support tab
  document.getElementById("patientSupport").classList.add("normalClass");
  document.getElementById("patientSupport").classList.remove("transitionClass");
  document.getElementById("patientSupport").style.backgroundColor = "white";
}
}

//////////////////////////////////////////////  Function to open the communication side tab ///////////////////////////////////////////////////////////////////////
function communication(comElement) {
//if a popup is not displayed the side buttons can be opened
if (!document.getElementById("popupBox").style.display || document.getElementById("popupBox").style.display == "none") {
//if the page mask is closed the side tab will open
  if (document.getElementById("pageMask").style.display == "none"){
    //displays the page mask
    document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("pageMask").style.display = "block";
    //opens the communication tab
    document.getElementById("communicationSupport").classList.add("transitionClass");
    document.getElementById("communicationSupport").classList.remove("normalClass");
    document.getElementById("communicationSupport").style.backgroundColor = "white";
    //closes the patient support tab
    document.getElementById("patientSupport").style.backgroundColor = "rgba(255,255,255,0.6)";
    document.getElementById("patientSupport").classList.add("normalClass");
    document.getElementById("patientSupport").classList.remove("transitionClass");
//if the page mask is open the side tab will close
  } else {
    //closes the page mask
    document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0)";
    setTimeout(function(){ document.getElementById("pageMask").style.display = "none"; }, 500);
    //closes the communication tab
    document.getElementById("communicationSupport").classList.add("normalClass");
    document.getElementById("communicationSupport").classList.remove("transitionClass");
    document.getElementById("communicationSupport").style.backgroundColor = "white";
    //closes the patient support tab
    document.getElementById("patientSupport").classList.add("normalClass");
    document.getElementById("patientSupport").classList.remove("transitionClass");
    document.getElementById("patientSupport").style.backgroundColor = "white";
  }
}
}

//////////////////////////////////////////////  Function to open the patient support side tab ///////////////////////////////////////////////////////////////////////
function patient(patientElement) {
//if a popup is not displayed the side buttons can be opened
if (!document.getElementById("popupBox").style.display || document.getElementById("popupBox").style.display == "none") {
//if the page mask is closed the side tab will open
  if (document.getElementById("pageMask").style.display == "none"){
    //displays the page mask
    document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("pageMask").style.display = "block";
    //opens the patient support tab
    document.getElementById("patientSupport").classList.add("transitionClass");
    document.getElementById("patientSupport").classList.remove("normalClass");
    document.getElementById("patientSupport").style.backgroundColor = "white";
    //closes the communication support tab
    document.getElementById("communicationSupport").style.backgroundColor = "rgba(255,255,255,0.6)";
    document.getElementById("communicationSupport").classList.add("normalClass");
    document.getElementById("communicationSupport").classList.remove("transitionClass");
//if the page mask is open the side tab will close
  } else {
    //closes the page mask
    document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0)";
    setTimeout(function(){ document.getElementById("pageMask").style.display = "none"; }, 750);
    //closes the patient support tab
    document.getElementById("patientSupport").classList.add("normalClass");
    document.getElementById("patientSupport").classList.remove("transitionClass");
    document.getElementById("patientSupport").style.backgroundColor = "white";
    //closes the communication tab
    document.getElementById("communicationSupport").classList.add("normalClass");
    document.getElementById("communicationSupport").classList.remove("transitionClass");
    document.getElementById("communicationSupport").style.backgroundColor = "white";
  }
}
}

//////////////////////////////////////////////  Function to open a full screen popup ///////////////////////////////////////////////////////////////////////////////
function openPopup(buttonId) {
//displays the page mask
var buttonToHTML = {'SSIButton': '<div id="popUpHeaders"><div id="popupTitle">Milliman Co-Pay Savings Card</div><div id="popupSubtitle">Pay As Little As $10*</div></div><div id="popupBody"><div id="popupBodyText">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div><div id="popupBodyImageDiv"><img id="popupBodyImage" src="Icons/MillimanCard.png"></div></div><div id="buttonDiv"><button id="orderCardsToday">Order Your Cards Today!</button></div>',

'PIButton': '<div id="popUpHeaders"><div id="popupTitle">Milliman Co-Pay Savings Card</div><div id="popupSubtitle">Pay As Little As $10*</div></div><div id="popupBody"><div id="popupBodyText">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div><div id="popupBodyImageDiv"><img id="popupBodyImage" src="Icons/MillimanCard.png"></div></div><div id="buttonDiv"><button id="orderCardsToday">Order Your Cards Today!</button></div>',

'MDAButton': '<div id="popUpHeaders"><div id="popupTitle">Milliman Co-Pay Savings Card</div><div id="popupSubtitle">Pay As Little As $10*</div></div><div id="popupBody"><div id="popupBodyText">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div><div id="popupBodyImageDiv"><img id="popupBodyImage" src="Icons/MillimanCard.png"></div></div><div id="buttonDiv"><button id="orderCardsToday">Order Your Cards Today!</button></div>',

'REFButton': '<div id="popUpHeaders"><div id="popupTitle">Milliman Co-Pay Savings Card</div><div id="popupSubtitle">Pay As Little As $10*</div></div><div id="popupBody"><div id="popupBodyText">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div><div id="popupBodyImageDiv"><img id="popupBodyImage" src="Icons/MillimanCard.png"></div></div><div id="buttonDiv"><button id="orderCardsToday" >Order Your Cards Today!</button></div>',

'cardInfoButton': '<div id="popUpHeaders"><div id="popupTitle">Milliman Co-Pay Savings Card</div><div id="popupSubtitle">Pay As Little As $10*</div></div><div id="popupBody"><div id="popupBodyText">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div><div id="popupBodyImageDiv"><img id="popupBodyImage" src="Icons/MillimanCard.png"></div></div><div id="buttonDiv"><button id="orderCardsToday" >Order Your Cards Today!</button></div>'};


document.getElementById("pageMask").style.backgroundColor = "rgba(0,0,0,0.6)";
document.getElementById("pageMask").style.display = "block";
//dims the color of the side buttons
document.getElementById("communicationSupport").style.backgroundColor = "rgba(255,255,255,0.6)";
document.getElementById("patientSupport").style.backgroundColor = "rgba(255,255,255,0.6)";
document.getElementById("popupBox").innerHTML = buttonToHTML[buttonId];
// console.log(buttonId);
if(buttonId == "cardInfoButton"){
  // console.log("here");
  document.getElementById("orderCardsToday").onclick = function() {
    window.location='http://us.milliman.com/';
  };
}
document.getElementById("popupBox").style.display = "flex";
document.getElementById("closeButton").style.display = "flex";
}

//////////////////////////////////////////////  Function to close a full screen popup ///////////////////////////////////////////////////////////////////////////////
function closePopup() {
//closes the page mask
document.getElementById("pageMask").style.display = "none";
//returns the side buttons to their normal color
document.getElementById("communicationSupport").style.backgroundColor = "white";
document.getElementById("patientSupport").style.backgroundColor = "white";
document.getElementById("popupBox").style.display = "none";
document.getElementById("closeButton").style.display = "none";
}

////////////////////////////////////////////// Navigate Functions //////////////////////////////////////////////
function gotoAccess() {
  com.veeva.clm.gotoSlide("Favorable_Access_Table.zip");
}
function gotoEfficacy() {
  com.veeva.clm.gotoSlide("Efficacy_Clinical_Trial.zip");
}
function gotoSafety() {
  com.veeva.clm.gotoSlide("Safety.zip");
}
function gotoCase(){
  com.veeva.clm.gotoSlide("Case_Study_Patient_Profile.zip");
}
function gotoHome() {
  com.veeva.clm.gotoSlide("Landing_Page.zip");
}

//////////////////////////////////////////////  Function to move the scroll bar when the ISI is scrolled ///////////////////////////////////////////////////////////////////////////////
function moveScrollbar() {
var textHeight = document.getElementById("ISIMinusTitle").scrollHeight;
var windowHeight = document.getElementById("ISIMinusTitle").clientHeight;
//scrollSpace = the height of the ISI text available for scrolling
var scrollSpace = textHeight - windowHeight;
var y = document.getElementById("ISIMinusTitle").scrollTop;
//scrollPct = the percentage that the ISI paragraph is scrolled down
var scrollPct = y / scrollSpace;
var buttonHeight = document.getElementById("scroll-btn").clientHeight;
var scrollbarHeight = document.getElementById("scroll-track").offsetHeight;
//scrollbarWhitespace = the maximum movement available for the scrollbar button. scrollbar height - button height
var scrollbarWhitespace = scrollbarHeight - buttonHeight;
//sets the scrollbar to the same height percentage as the text has been scrolled
document.getElementById("scroll-btn").style.top = scrollPct * scrollbarWhitespace + "px";
}

function toDropbox() {
  document.getElementById("top").classList.add("noPrint")
  document.getElementById("tableDisplay").classList.add("noPrint")
  document.getElementById("bottom-head").classList.add("noPrint")
  closeSideButtons();
  document.getElementById("communicationSupport").classList.add("noPrint")
  document.getElementById("patientSupport").classList.add("noPrint")

  document.getElementById("printContent").classList.remove("noPrint")
  html2canvas($('#printContent'), {
      onrendered: function(canvas){
          canvas.toBlob(function(blob) {
              var file = new File([blob], 'content.jpg', {type: blob.type})
              //console.log(canvas)
              //console.log("break")
              // console.log(blob)
              // console.log("break")
              // console.log(file)
              // console.log("break")


              // var dbx = new Dropbox.Dropbox({ accessToken: 'tE0VZpVLLyAAAAAAAAAArJdHm0f3ut0UX71zKmLzoaSzsoGChf12wL9VmhlVpeHF' });
              // dbx.usersGetCurrentAccount()
              // .then(function(response) {
              //     console.log(response);
              // })
              // .catch(function(error) {
              //     console.error(error);
              // });
          
              // console.log(file.name, file.size);
          
          
              // var fileName = "pictureTest8.jpg";
              // dbx.filesUpload({path: '/' + file.name, contents: file})
              // .then(function(response) {
              // console.log(response);
              // })
              // .catch(function(error) {
              // console.error(error);
              // });
          
          })
          
      }
  });
}