

$(document).ready(() => {
//     console.log( "ready!" );
}); // don't execute this js until entire content/page is loaded
// create an object with key value pairs-- names: image. png

// create a function that will pick a value out of object container,
// every time new page is run, function picks and returns an image

// if user scrolls further down then have a function pick and display a rand tastyfeed video

// have two text box containing 'quote of the day'; 'tip of the day'


// let randomLink = pickedRandomly();

// const thePic = $('<i>', { width: 120, height: 145, src: 'https://cdn.vox-cdn.com/thumbor/60u7Vldj688fYuk66kpt5R4NCLA=/0x0:3200x2128/920x613/filters:focal(1344x808:1856x1320):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58121353/GettyImages_870730432.0.jpg' });

const myRandPic = Math.ceil(Math.random() * 20);
const recipeVids = Math.ceil(Math.random() * 10);
const thePic = $('<img>', { width: 250, height: 250, src: `Biopic/Image${myRandPic}.png` });
$('#image-space').append(thePic);

const theVideo = $('<iframe>', { width: 560, height: 315, src: 'https://www.youtube.com/embed/Y_1LwzLBL2U?rel=0&amp;controls=0&amp;showinfo=0,frameborder:,0:(allow:autoplay,encrypted-media' });
$('#video-space').append(theVideo);


// function loop over constructor an display user1image

const randObj = {
  bioPhotos: [
    `Image${myRandPic}.png`],

  recipeVids: [

    'https://www.instagram.com/p/Bl9TD8yHY4R/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/Bl8VNyknLDE/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BllBrIthJBx/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/Blbs5eDn6Or/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BlVspmgHdSe/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BlLIpwjn16r/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BlB6XL_HpJ1/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/Bk1I6Trn_Cz/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BksbHN9Hxq1/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BkOjRpwH7mV/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BkGA0mkHHoo/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/Bj5DspYnzXS/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BjsHfPwnmnn/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BjfyEvsnQyX/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BjIfBukFyfz/?utm_source=ig_web_copy_link',

    'https://www.instagram.com/p/BjGevHTHhQg/?utm_source=ig_web_copy_link',
  ],
};

randObj.recipeVids[recipeVids];
const pickedRandomly = function (obj) {
  const keys = randObject.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};


const giveAdvice = ['Do not be that guy', 'We screen/sort out for assholes- Jon', 'Focus on your breathing for 1 minute', 'Beware the IMPOSTER SYNDROME', 'Do 10 pullups', 'It is important to stay as hydrated as possible- Adam', 'Go on a coffee-walk with your mentor', 'Clean-code', 'Family-dinners'];

function randomAdvice(giveAdvice) {
  for (let i = 0; i < giveAdvice.length; i++) {
    return Math.floor(Math.random()(giveAdvice[i]));
  }
}


// const giveAdvice = [ * advice.length)];
// function hideElement(query) {
//   const el = document.querySelector(query);
//   if (el) {
//     el.style.visibility = 'hidden';
//     return true;
//   }
//   return false;
// }

// function hideAsync(query) {
//   const hidden = hideElement(query);

//   if (!hidden) {
//     setTimeout(() => {
//       hideAsync(query);
//     }, 100);
//   } else {
//     putUpSomeContent();
//   }
// }

// function putUpSomeContent() {
//   if (!document.querySelector('#content')) return;

//   let div = document.querySelector('image-space');

//   if (!div) {
//     div = document.createElement('div');
//     div.className = 'image-space';
//     document.querySelector('#content').insertBefore(div, sorting);
//   }

// const div_innerHTML = $("p").css('background-image, 'https://media.giphy.com/media/zhJR6HbK4fthC/giphy.gif'));//   <h1> Do you know your spirit-comfort-food?</h1>'
//   <h1>You're welcome!</h1>

//   <a$('<img>', { width : 250, height : 250, src : 'https://cdn.vox-cdn.com/thumbor/60u7Vldj688fYuk66kpt5R4NCLA=/0x0:3200x2128/920x613/filters:focal(1344x808:1856x1320):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58121353/GettyImages_870730432.0.jpg' });
//   $('#image-space').append(thePic);</a>
//   <p><big>${advice[Math.floor(Math.random() * advice.length)]}</big></p>
//   <p>Scroll down for some yummy goodness!</p>
//   <p><br/></p>

//   <a>$('<iframe>', { width: 420, height: 345, src: 'https://www.youtube.com/embed/tgbNymZ7vqY' });
//   $('#video-space').append(theVideo)</a>
//   `;
// }

// // Go through dangerouns elements and hide them

// [
//   '#imagelist',
//   '#top-comments',
//   '.sentence-sorting',
//   '#right-content',
//   '#extended-imagelist',
//   '.next-prev',
// ].forEach(hideAsync);

// putUpSomeContent()
