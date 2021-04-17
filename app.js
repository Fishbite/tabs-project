const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

/* here we are adding an event listener to the elements in the html that have a class of 'about', this is the parent container of the buttons, articles and content etc.

You might think that  the event listener should have been added to the buttons, but this prject is all about using dataset attributes in the html and the 'event.target.dataset' to discover what has actually been clicked on. We don't do anything unless the thing clicked on has a dataset value that we are specifically listening for.

e.g. console.log(event.target) will show the details of anything clicked on (paragraph, article, button etc.) in the about section that we have added our event listener to below. We are using event.target to use event bubbling to identify which child element has been clicked. If we used event.currentTarget we would only see 'about'!

The buttons have a unique attribute in that they have a dataset attribute with a value of "id" (data-id) We only do something when when these are clicked

*/
about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  // if the clicked element has a data.id attribute, do something
  if (id) {
    //remove active class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      event.target.classList.add("active"); // add class to clicked button
    });
    // hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    console.log(id);
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
