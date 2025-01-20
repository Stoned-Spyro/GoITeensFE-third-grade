const options = {
  rootMargin: "-100px 0px 0px 0px",
  threshold: [0.25, 0.5, 0.75, 1],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
    }
  });
}, options);

const flower1 = document.querySelector("#flower1");
const flower2 = document.querySelector("#flower2");
const flower3 = document.querySelector("#flower3");
const flower4 = document.querySelector("#flower4");
const flower5 = document.querySelector("#flower5");
const flower6 = document.querySelector("#flower6");

observer.observe(flower1);
observer.observe(flower2);
observer.observe(flower3);
observer.observe(flower4);
observer.observe(flower5);
observer.observe(flower6);
