const courses = document.querySelectorAll ('.course');

for (let course of courses) {
  course.addEventListener ('click', function () {
    const courseId = course.getAttribute ('id');

    window.location.href = `/courses/${courseId}`;
  });
};
