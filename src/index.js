import "./style.css";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
// Import images
import picture1 from "./img/my_photo_700.webp";
import picture2 from "./img/my_photo_500.webp";
import dashboard from "./img/admin-dashboard.png";
import library from "./img/library.png";
import todo from "./img/todo.png";
import tictac from "./img/tictac.png";
import weather from "./img/weather.png";
import calculator from "./img/calculator.png";
import footerImg from "./img/footer_image.png";

// Create the header section with a grid layout
const header = document.querySelector("header");
header.innerHTML = `
    <div class="grid-header">
   <div class="dev-container py-5">
                <img srcset="${picture1} 600w, ${picture2} 500w"
        alt="victor Tounaregha" 
        sizes="(min-width: 700px) 600px,
               (max-width: 699px) 500px">
               <p class="fname">Victor Tounaregha</p>
              </div>
               <div class="p-3 about-container bg-light">
                <h1>About me</h1>
                <p>
                  I'm Victor Joseph Tounaregha, a developer who turns complex ideas into reality. I have hands-on experience in collaborative environments building responsive applications and consuming RESTful APIs.

                  <br>Core Skills: 
                    React.js, 
                   JavaScript (ES6+), 
                   HTML5, 
                   CSS3

                  <br>Tools & Frameworks: Bootstrap 5, Tailwind CSS, Jest, Webpack, Git, npm

                  <br>Currently Learning: Node.js

                  <br>Seeking to apply my skills in a challenging new role. Let's talk.
                </p>
                <div class="icons">
                  <a href="https://github.com/victwa2baba" aria-label="github profile link">            
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>       
                  </a>
                  <a href="https://linkedin.com/in/victor-tounaregha" aria-label="linkedin profile link">            
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" class="svg"/>
                  </a>
                  <a href="https://x.com/victwa2baba" aria-label="X profile link">            
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" class="svg" />
                  </a>
                </div>
               </div>
</div>
`;
// Create the main section with a grid layout
const content = document.querySelector("#content");
content.innerHTML = `
      <div class="main-grid">
          <h2>My work</h2>
         <div class="work-wrapper">
           <div class="work-item">
             <img src="${dashboard}" alt="admin-dashboard">
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Admin Dashboard</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/admin-dashboard/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/admin-dashboard/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
           <div class="work-item">
             <img src="${library}" alt="library project">
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Library(JS)</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/library">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/library/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
           <div class="work-item">
            <img src="${todo}" alt="todo Screenshot" />
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Todo List(JS)</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/todo-list">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/todo-list/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
           <div class="work-item">
             <img src="${tictac}" alt="tictac project">
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Tic Tac Toe(JS)</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/tictactoe">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/tictactoe/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
           <div class="work-item">
             <img src="${weather}" alt="weather project">
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Weather App(JS)</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/weather-app/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/weather-app/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
           <div class="work-item">
             <img src="${calculator}" alt="calculator project">
            <div class="work-footer">
              <div class="work-name-container">
                <h3>Calculator(JS)</h3>
              <div class="work-icon">
                <a href="https://github.com/victwa2baba/javaScriptCalculator/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>
                </a>
                <a href="https://victwa2baba.github.io/javaScriptCalculator/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt et officiis a aliquam aliquid!
            </div>
        </div>
         </div>
        </div>
`;

// Create the footer section
const footer = document.querySelector("footer");
footer.setAttribute("class", "footer pt-3 text-lg-start");
footer.innerHTML = `
    <div class="footer-grid"> 
        <div class="contact-container">
          <h3>Contact me</h3>
          <p>Please get in touch if you think our work could be mutually beneficial!</p>
          <div class="d-grid">
            <p>Abuja,</p>
            <p>Nigeria</p>
          </div>
         <div class="d-grid">
           <p>2347016007224</p>
           <p>vtounaregha@gmail.com</p>
         </div>
           <div class="footer-icons">
              <a href="https://github.com/victwa2baba" aria-label="github profile link">            
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="svg"/>       
              </a>
              <a href="https://linkedin.com/in/victor-tounaregha" aria-label="linkedin profile link">            
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" class="svg"/>
              </a>
              <a href="https://x.com/victwa2baba" aria-label="X profile link">            
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" class="svg" />
              </a>
            </div>
        </div>
        <img src="${footerImg}" alt="victor tounaregha" class="footer-logo">
      </div>
`;
