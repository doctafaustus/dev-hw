// Populate initial play kit
init();


// Initialize main sequence
function init() {
  const defaultPlaykitIndex = 2; // Default to the Senser Play Kit as per design
  const selectedKit = window.playkits[defaultPlaykitIndex];
  window.template = getTemplate();
  populateTemplate(selectedKit);
  initCal();
  addCTAEvent();
}


// Update DOM with play kit object info
function populateTemplate({ title, reviews, suitableFor, desc, images }) {

  // Breadcrumb
  template.breadcrumb.textContent = title;

  // Title
  template.title.textContent = title;

  // Reviews
  template.reviews.stars.dataset.stars = reviews.stars;
  template.reviews.num.innerHTML = reviews.num;

  // Suitable For
  template.suitableFor.textContent = suitableFor;

  // Description
  template.desc.textContent = desc;

  // Images
  updateImages(images);

}


// Get play kit template
function getTemplate() {
  const container = document.querySelector('.container');

  return {
    breadcrumb: document.querySelector('.breadcrumb-current a'),
    title: container.querySelector('.playkit-title'),
    reviews: {
      stars: container.querySelector('.review-stars-full-overlay'),
      num: container.querySelector('.review-count-num'),
    },
    suitableFor: container.querySelector('.suitable-for'),
    desc: container.querySelector('.playkit-desc')
  };
}


// Initialize calendar and add change listener
function initCal() {
  const cal = document.querySelector('#calendar');
  const datepicker = new Datepicker(cal, {
    autohide: true
  });
  
  cal.addEventListener('changeDate', updatePlaykit);
}


// Update the playkit using the cal input value
function updatePlaykit(e) {
  const [ selectedDate ] = e.detail.datepicker.dates;

  // Find first kit where selectedDate is less than the maxAage
  const selectedKit = window.playkits.find(kit => {
    return kit.maxAge < selectedDate;
  });

  const errTooOld = document.querySelector('.err-too-old');
  if (!selectedKit) return errTooOld.style.display = 'block';

  errTooOld.style.display = 'none';
  populateTemplate(selectedKit);
  document.querySelector('.carousel-track li:first-child').scrollIntoView();
  document.querySelector('#subscribe-cta').textContent = 'Subscribe now';
  fadeload();
}


// Fake a fade load so user sees feedback from their cal selection
function fadeload() {
  const fadeClass = 'fade-in';
  const animationDuration = 1500;
  const mainContainer = document.querySelector('main');

  mainContainer.classList.add(fadeClass);
  setTimeout(() => {
    mainContainer.classList.remove(fadeClass);
  }, animationDuration);
}


// Add dummy CTA event
function addCTAEvent() {
  const subscribeCTA = document.querySelector('#subscribe-cta');
  subscribeCTA.addEventListener('click', () => subscribeCTA.textContent = 'Subscribed!');
}


// Rebuild carousel thumbnails and update main image
function updateImages(images) {
  document.querySelector('.main-image').src = `./images/${images[0]}`;

  const carouselImageHTML = images.map((image, i) => {
    return `<li><img class="${i === 0 ? 'selected': ''}" src="./images/${image}" alt="Playkit Thumbnail"></li>`;
  }).join('');

  document.querySelector('.carousel-track').innerHTML = carouselImageHTML;
  toggleControlStates(); // Defined in ./scripts/caoursel.js
}

