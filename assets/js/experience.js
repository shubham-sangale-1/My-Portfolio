AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/a2z1.png",
    place: "A2Z IT HUB",
    time: "(Feb, 2024 - May, 2024)",
    desp: "<li> Worked on both frontend and backend development using HTML, CSS, Bootstrap, JavaScript, Node.js, and Express.js, delivering comprehensive web solutions..</li> <li> Developed and maintained websites for various projects, including a Farms Website, Dairy Website, and Hospital Website, ensuring robust functionality and user-friendly interfaces.</li> <li>Managed SQL and MongoDB databases, optimizing performance and ensuring data integrity across all projects.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "Nasa Space Apps Challenge 2023",
//     cardImage: "assets/images/experience-page/nasa_.png",
//     description:
//       "As a participant in the NASA hackathon, I tackled a challenging problem statement that aimed to enhance the efficiency of geologists through technology.",
//   },
  
// ];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Nasa Space Apps Challenge 2023",
    subtitle: "Participant",
    image: "assets/images/experience-page/nasa_.png",
    desp: "As a participant in the NASA hackathon, I tackled a challenging problem statement that aimed to enhance the efficiency of geologists through technology.",
    href: "",
  },
 
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
