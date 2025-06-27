function updateTime() {
  let date = new Date().toLocaleString().split(', ');
  let timeText = document.querySelector(".datetime");
  timeText.innerHTML = `${date[1]}<br/>${date[0]}`;
}

setInterval(updateTime, 1000);

const window = document.querySelector(".window")
dragElement(window);

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // if (document.getElementById(element.id + "header")) {
  //   console.log('here', document.getElementById(element.id + "header"));

  //   document.getElementById(element.id + "header").onmousedown = startDragging;
  // } else {
    element.addEventListener('mousedown', startDragging)
  

  function startDragging(e) {
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//window button close
function closeWindow(element) {
  
  element.style.display = 'none';
}

function openWindow(element) {
  element.style.display = "flex"
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

function closeableWindow(element) {
  console.log(element);
  
  
  element.querySelector('.window_button').addEventListener('click', () => {
    closeWindow(element);
  })
}

let biggestIndex = 1;

function handleIconClick(element) {
  element.addEventListener('click', () => {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    element.classList.toggle("selected");
  })
}

function initializeWindow(element) {
  closeableWindow(element);
  handleIconClick(element);
  dragElement(element);
  openWindow(element)
}

let icons = document.querySelectorAll('.icon').forEach((icon) => {
  icon.addEventListener('click', () => {
    let windowCopy = window.cloneNode(true);
    console.log(windowCopy);
    
    windowCopy.querySelector('.window_container').innerHTML = "hey"
    document.querySelector('body').append(windowCopy)
    initializeWindow(windowCopy);
    console.log(windowCopy);
    
  })
})