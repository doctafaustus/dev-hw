// Define constants
const mainImage = document.querySelector('.main-image');
const carouselEl = document.querySelector('.carousel');
const carouselTrack = carouselEl.querySelector('.carousel-track');
const selectedClass = 'selected';

// Add thumbnail listener
carouselTrack.addEventListener('click', updateMainImage);

// Add carousel controls listeners
document.querySelectorAll('.carousel-control').forEach(carouselControl => {
  carouselControl.addEventListener('click', scrollCarousel);
});


// Update main image with source of clicked thumnail
function updateMainImage(e) {
  if (!e.target.matches('img')) return;

  const clickedImage = e.target;
  mainImage.src = clickedImage.src;

  resetSelectedClass();
  e.target.classList.add(selectedClass);
}

// Remove selected class from thumbnails
function resetSelectedClass() {
  const thumbnails = carouselTrack.querySelectorAll('img');
  thumbnails.forEach(thumb => thumb.classList.remove(selectedClass));
}

// Scroll carousel left or right
function scrollCarousel(e) {

  const thumbnails = carouselTrack.querySelectorAll('img');
  const direction = (e.target.id === 'carousel-prev') ? 'left': 'right';

  let anchorIndex;
  let targetIndex;

  for (let i = 0; i < thumbnails.length; i++) {
    const currentThumb = thumbnails[i];
    if (isVisible(currentThumb)) {
      anchorIndex = i;
      if (direction === 'left') break;
    }
  }

  // Carousel will scroll 2 spaces by default
  const targetDirection = (direction === 'left') ? -2 : 2;
  targetIndex = anchorIndex + targetDirection;

  // If there's only one more space to scroll, then scroll by 1
  if (!thumbnails[targetIndex]) targetIndex = targetIndex - Math.sign(targetDirection);
  if (!thumbnails[targetIndex]) return;

  // NOTE: scrollIntoView() options are not available in Safari (use polyfill if needed)
  thumbnails[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


// Deterime if provided element is visible (and not hidden by overflow)
function isVisible(el) {

  const style = getComputedStyle(el);

  if (style.display === 'none' ||
      style.visibility !== 'visible' ||
      style.opacity < 0.1 ||
      (el.offsetWidth + el.offsetHeight + 
        el.getBoundingClientRect().height + el.getBoundingClientRect().width === 0)) {
        return false;
  }

  elCenter = {
    x: el.getBoundingClientRect().left + el.offsetWidth / 2,
    y: el.getBoundingClientRect().top + el.offsetHeight / 2
  };

  if (elCenter.x < 0 || elCenter.y < 0) return false;
  if (elCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
  if (elCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;

  let pointContainer = document.elementFromPoint(elCenter.x, elCenter.y);

  do {
    if (pointContainer === el) return true;
  } while (pointContainer = pointContainer.parentNode);

  return false;
}


// Use Intersection Observer to determine if first or last slides are visible to change arrow state
function toggleControlStates() {
  const controls = [
    {
      selector: carouselEl.querySelector('.carousel-track li:first-child'),
      arrow: carouselEl.querySelector('#carousel-prev')
    },
    {
      selector: carouselEl.querySelector('.carousel-track li:last-child'),
      arrow: carouselEl.querySelector('#carousel-next')
    }
  ];

  controls.forEach(control => {

    const options = {
      root: carouselEl.querySelector('.carousel-track'),
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(control.selector);

    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) control.arrow.disabled = true;
        else control.arrow.disabled = false;
      });
    }
  });

}
