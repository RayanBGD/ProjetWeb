const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();


const img = document.getElementById('fetch');
fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => {
    if(res.ok){
      res.json().then(data => {
        img.src = data[0].url
      })
    } else {
      console.log(res)
    }

  })
// import { createClient } from 'pexels';

// const client = createClient('563492ad6f917000010000016ac120d8cff147a5a2b79a1cf44c40d6');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => img.src= photos.url);