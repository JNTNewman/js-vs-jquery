let count = 1;

function increaseCount() {
  count++;
  console.log(count);
  document.getElementById("count").innerText = count.toString();
}

function decreaseCount() {
  if (count > 0) {
    count--;
    console.log(count);
    // @ts-ignore
    $("#count").text(count.toString());
  }
}

// let hoverToHide = document.getElementById("hover-to-hide");

// // @ts-ignore
// hoverToHide.addEventListener("mouseenter", function (e) {
//   hoverToHide.style.visibility = "hidden";
// });

// // @ts-ignore
// $("#hover-to-hide").mouseleave(function () {
//   // @ts-ignore
//   $("#hover-to-hide").css({ visibility: "visible" });
// });

// document
//   .getElementById("text-one")
//   // @ts-ignore
//   .addEventListener("mouseenter", function (e) {
//     document.getElementById("text-one").style.color = "red";
//   });

// // @ts-ignore
// $("#text-one").mouseout(function (e) {
//   e.preventDefault();
//   // @ts-ignore
//   $("#text-one").css("color", "blue");
// });

let navIsVisible = true;
let navLinks = document.getElementById("nav");


// // @ts-ignore
// $("#nav-toggle").click(function (e) {
//   e.preventDefault();
//   navIsVisible = !navIsVisible;
//   console.log(navIsVisible);

//   if (navIsVisible) {
//     // @ts-ignore
//     $(".nav").css({ visibility: "visible" });
//   } else {
//     // @ts-ignore
//     $(".nav").css({ visibility: "hidden" });
//   }
// });

document.getElementById("nav-toggle").addEventListener("click", function(e) {
  e.preventDefault();
  navIsVisible = !navIsVisible;
  console.log(navIsVisible);

  if(navIsVisible) {
   document.getElementById("nav").style.visibility = "visible";
  }
  else {
    document.getElementById("nav").style.visibility = "hidden";
  }
})


// hoverToHide.addEventListener("mouseleave", function () {
//   hoverToHide.style.visibility = "visible";
//   console.log("visible");
// });

// $("#hover-to-hide").mouseenter(function () {
//   $("#hover-to-hide").css({ visibility: "hidden" });
// });

// $("#text-one").mouseover(function (e) {
//   e.preventDefault();
//   $("#text-one").css({ color: "blue" });
// });

//   document
//     .getElementById("text-one")
//     .addEventListener("mouseleave", function (e) {
//       document.getElementById("text-one").style.color = "blue";
//       console.log("red");
//     });

// $("#text-one").mouseover(function (e) {
//   e.preventDefault();
//   $("#text-one").removeClass("red");
//   $("#text-one").addClass("blue");
// });

// $("#text-one").mouseout(function (e) {
//   e.preventDefault();
//   $("#text-one").removeClass("blue");
//   $("#text-one").addClass("red");
// });
