// phillipclapham.github.io / phillipclapham.com
// Phillip A. Clapham's Developer Portfolio
// main.js

function picBoxChange() {
  picBoxID.classList.remove('picBoxPos1');
  picBoxID.classList.add('picBoxPos2');
}

let profileBoxID = document.getElementById('profileBoxID');
let projectBoxID = document.getElementById('projectBoxID');
let linkBoxID = document.getElementById('linkBoxID');
let contactBoxID = document.getElementById('contactBoxID');
let picBoxID = document.getElementById('picBoxID');
let picBoxID2 = document.getElementById('picBoxID2');
let picBoxID3 = document.getElementById('picBoxID3');
let picBoxID4 = document.getElementById('picBoxID4');
let picBoxID5 = document.getElementById('picBoxID5');
let profileBoxDA = document.getElementById('profileBoxDA');
let projectBoxDA = document.getElementById('projectBoxDA');
let linkBoxDA = document.getElementById('linkBoxDA');
let contactBoxDA = document.getElementById('contactBoxDA');
let meImgBoxID = document.getElementById('meImgBoxID');
let meImgID = document.getElementById('meImgID');
let meImgOverlayID = document.getElementById('meImgOverlayID');

profileBoxID.addEventListener('click', () => {
  picBoxChange();
  picBoxID.style.display = 'none';
  picBoxID3.style.display = 'none';
  picBoxID4.style.display = 'none';
  picBoxID5.style.display = 'none';
  picBoxID2.style.display = 'block';
});

projectBoxID.addEventListener('click', () => {
  picBoxChange();
  picBoxID.style.display = 'none';
  picBoxID2.style.display = 'none';
  picBoxID4.style.display = 'none';
  picBoxID5.style.display = 'none';
  picBoxID3.style.display = 'block';
});

linkBoxID.addEventListener('click', () => {
  picBoxChange();
  picBoxID.style.display = 'none';
  picBoxID2.style.display = 'none';
  picBoxID3.style.display = 'none';
  picBoxID5.style.display = 'none';
  picBoxID4.style.display = 'block';
});

contactBoxID.addEventListener('click', () => {
  picBoxChange();
  picBoxID.style.display = 'none';
  picBoxID2.style.display = 'none';
  picBoxID3.style.display = 'none';
  picBoxID4.style.display = 'none';
  picBoxID5.style.display = 'block';
});

profileBoxDA.addEventListener('click', () => {
  let counter = 0;
  let t = setInterval(() => {
    if (counter > 99) {
      clearInterval(t);
    } else {
      counter++;
      picBoxID2.style.top = `${counter}%`;
    }
  }, 15);
  setTimeout(() => {
    picBoxID2.style.top = "0%";
    picBoxID2.style.display = 'none';
    picBoxID3.style.display = 'none';
    picBoxID4.style.display = 'none';
    picBoxID5.style.display = 'none';
    picBoxID.style.display = 'block';
  }, 1500);
});

projectBoxDA.addEventListener('click', () => {
  let counter = 0;
  let t = setInterval(() => {
    if (counter > 99) {
      clearInterval(t);
    } else {
      counter++;
      picBoxID3.style.top = `${counter}%`;
    }
  }, 15);
  setTimeout(() => {
    picBoxID3.style.top = "0%";
    picBoxID2.style.display = 'none';
    picBoxID3.style.display = 'none';
    picBoxID4.style.display = 'none';
    picBoxID5.style.display = 'none';
    picBoxID.style.display = 'block';
  }, 1500);
});

linkBoxDA.addEventListener('click', () => {
  let counter = 0;
  let t = setInterval(() => {
    if (counter > 99) {
      clearInterval(t);
    } else {
      counter++;
      picBoxID4.style.top = `${counter}%`;
    }
  }, 15);
  setTimeout(() => {
    picBoxID4.style.top = "0%";
    picBoxID2.style.display = 'none';
    picBoxID3.style.display = 'none';
    picBoxID4.style.display = 'none';
    picBoxID5.style.display = 'none';
    picBoxID.style.display = 'block';
  }, 1500);
});

contactBoxDA.addEventListener('click', () => {
  let counter = 0;
  let t = setInterval(() => {
    if (counter > 99) {
      clearInterval(t);
    } else {
      counter++;
      picBoxID5.style.top = `${counter}%`;
    }
  }, 20);
  setTimeout(() => {
    picBoxID5.style.top = "0%";
    picBoxID2.style.display = 'none';
    picBoxID3.style.display = 'none';
    picBoxID4.style.display = 'none';
    picBoxID5.style.display = 'none';
    picBoxID.style.display = 'block';
  }, 2000);
});

meImgOverlayID.addEventListener('click', () => {
  let boxheight = 20;
  meImgBoxID.style.height = "20%";
  let t1 = setInterval(() => {
    if (boxheight <= 39) {
      boxheight++;
      meImgBoxID.style.height = `${boxheight}%`;
    } else {
      clearInterval(t1);
    }
  }, 5);
  let angle = 0;
  let t2 = setInterval(() => {
    if (angle < 359) {
      angle++;
      meImgID.style.transform = `rotate(${angle}deg)`;
    } else {
      clearInterval(t2);
    }
  }, 1);
  let picBoxIDArray = document.querySelectorAll('#picBoxID h2');
  let picBoxIDArray2 = document.querySelectorAll('#picBoxID h3');
  for (let i of picBoxIDArray2) {
    if (i.style.display === "" || i.style.display === "none") {
      i.style.display = "inline-block";
    } else {
      i.style.display = "none";
    }
  }
  for (let i of picBoxIDArray) {
    if (i.style.display === "" || i.style.display === "inline-block") {
      i.style.display = "none";
    } else {
      i.style.display = "inline-block";
    }
  }
});