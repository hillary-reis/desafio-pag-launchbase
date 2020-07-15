const modalOverlay = document.querySelector ('#modal-overlay');
const modalImg = modalOverlay.querySelector ('.modal-img');
const modalDescription = modalOverlay.querySelector ('.modal-description');
const modalPrice = modalOverlay.querySelector ('.modal-price');
const courses = document.querySelectorAll ('.course');


for (let course of courses) {
  course.addEventListener ('click', function () {
    const imageCourse = course.querySelector ('.course-img').innerHTML;
    const descriptionCouse = course.querySelector ('.info').innerHTML;
    const priceCourse = course.querySelector ('.price').innerHTML;

    modalImg.innerHTML = imageCourse;
    modalDescription.innerHTML = descriptionCouse;
    modalPrice.innerHTML = priceCourse;

    modalOverlay.classList.add ('active');
  });
};


document.querySelector ('.close-modal').addEventListener ('click', function () {
  modalOverlay.classList.remove ('active');
});


