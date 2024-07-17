var load = 1;
var lightDark = 0;
var pageId;
var switchingPage = 0;

//hide content until page load
document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll('img');
  let loaded = 0;

  function imageLoaded() {
    loaded++;
    if (loaded === images.length) {
      allLoaded();
    }
  }

  if (images.length === 0) {
    allLoaded();
  } else {
    images.forEach(function(img) {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', function() {
          console.log('Error loading image: ' + img.src);
          imageLoaded();
        });
      }
    });
  }
});

function allLoaded() {
  // Hide the loading overlay
  document.getElementById('loading-overlay').style.display = 'none';
  document.body.classList.add('loaded');
  homePage();
  
  console.log('All content loaded!');
}

function lightChange(){
    switchingPage = 1;
    change();
}
function change(){
  var element = document.getElementById(pageId);
  if (switchingPage == 0){
    if (lightDark == 0){
      element.classList.add("dark-mode");
      lightDark = 1;
    }
    else if (lightDark == 1){
      element.classList.remove("dark-mode");
      lightDark = 0;
    }
  }
  else {
    if (lightDark == 0){
      element.classList.remove("dark-mode");
    }
    else {
      element.classList.add("dark-mode");
    }
  }
  switchingPage = 0;
}

function hideFirstPage(){
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page1').style.visibility = 'hidden';
}
function showFirstPage(){
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page1').style.visibility = 'visible';
}
function hideSecondPage(){
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page2').style.visibility = 'hidden';
}
function showSecondPage(){
  document.getElementById('page2').style.display = 'block';
  document.getElementById('page2').style.visibility = 'visible';
}
function hideThirdPage(){
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page3').style.visibility = 'hidden';
}
function showThirdPage(){
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page3').style.visibility = 'visible';
}

function hideFourthPage(){
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page4').style.visibility = 'hidden';
}
function showFourthPage(){
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page4').style.visibility = 'visible';
}

function homePage(){
  showFirstPage();
  hideSecondPage();
  hideThirdPage();
  hideFourthPage();
  pageId = 'page1';
  if (load != 1){
    lightChange();
  }
  load = 0;
}
function skillsPage(){
  showSecondPage();
  hideFirstPage();
  hideThirdPage();
  hideFourthPage();
  pageId = 'page2';
  lightChange();
}
function projectsPage(){
  showThirdPage();
  hideFirstPage();
  hideSecondPage();
  hideFourthPage();
  pageId = 'page3';
  lightChange();
}
function hobbiesPage(){
  showFourthPage();
  hideFirstPage();
  hideSecondPage();
  hideThirdPage();
  pageId = 'page4';
  lightChange();
}

//change resume size
function adjustIframeContainer() {
  var container = document.querySelector('.iframe-container');
  var screenWidth = window.innerWidth;
  
  if (screenWidth < 600) {
      container.style.width = '95%';
      container.style.padding = '10px';
  } else if (screenWidth < 1024) {
      container.style.width = '80%';
      container.style.padding = '15px';
  } else {
      container.style.width = '60%';
      container.style.padding = '20px';
  }
}

function adjustIframeHeight() {
  var iframe = document.getElementById('resumeFrame');
  iframe.style.height = window.innerHeight * 0.8 + 'px'; // 80% of viewport height
}

window.addEventListener('load', function() {
  adjustIframeContainer();
  adjustIframeHeight();
});

window.addEventListener('resize', function() {
  adjustIframeContainer();
  adjustIframeHeight();
});
