const container = document.getElementById('gallery-container');

const overlay = document.getElementById('imageOverlay');
const expandedImage = document.getElementById('expandedImage');
const closeBtn = document.getElementById('closeBtn');

const overlayTitle = document.getElementById('overlayTitle');
const overlayDesc = document.getElementById('overlayDesc');
const toggleBtn = document.getElementById('toggleImageBtn');  

photoDatabase.reverse();

let isShowingRaw = false;
let currentEditedSrc = "";
let currentRawSrc = "";

for (let i = 0; i < photoDatabase.length; i++) {
  const photoData = photoDatabase[i];
  
  const div = document.createElement('div');
  div.className = 'grid-item';
  
  const img = document.createElement('img');
  img.src = `images/places-images/${photoData.filename}`;
  img.alt = photoData.title;
  img.style.cursor = 'pointer';
  
  img.onload = function() {
    if (this.naturalWidth > this.naturalHeight) {
      div.classList.add('span-wide');
    }
  };
  
  img.onclick = function() {
    overlay.style.display = "block";
    
    isShowingRaw = false;
    currentEditedSrc = this.src;
    currentRawSrc = `images/places-images/${photoData.rawFilename}`;
    
    expandedImage.src = currentEditedSrc;
    overlayTitle.textContent = photoData.title;
    overlayDesc.textContent = photoData.description;
    
    if (photoData.hasRaw) {
      toggleBtn.style.display = "inline-block";
      toggleBtn.textContent = "View Raw";
    } else {
      toggleBtn.style.display = "none";
    }
  };

  div.appendChild(img);
  container.appendChild(div);
}

toggleBtn.onclick = function() {
  isShowingRaw = !isShowingRaw;
  if (isShowingRaw) {
    expandedImage.src = currentRawSrc;
    toggleBtn.textContent = "View Edited";
  } else {
    expandedImage.src = currentEditedSrc;
    toggleBtn.textContent = "View Raw";
  }
};

closeBtn.onclick = function() {
  overlay.style.display = "none";
}

overlay.onclick = function(event) {
  if (event.target === overlay || event.target.className === 'overlay-layout' || event.target.className === 'overlay-image-container') {
    overlay.style.display = "none";
  }
}