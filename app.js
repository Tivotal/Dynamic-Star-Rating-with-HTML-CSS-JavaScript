/* Created by Tivotal */

const stars = document.querySelectorAll(".star");

//loop throgh stars
stars.forEach((star, index) => {
  //adding event listener to star that runs function
  //when click event triggered
  star.addEventListener("click", () => {
    //again loop through stars
    stars.forEach((star, index2) => {
      //adding class active to clicked item and
      //other ant items which have lower index
      //and removing class active from items which have
      //index higher
      index >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
