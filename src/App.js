//import logo from './logo.svg';
import React, { useEffect } from 'react';
import './styles/styles.css';
import './styles/media.css';
//import './ScrollReveal.js'; 
//import feather from 'feather-icons';
import home from './home'; 
import './App.css';
import Stock from './Stock';

function App() {
  return (
    
    <div>
      <header className="container">
        <nav>
          <div className="logo">
            <p>Expense company</p>
          </div>

          <div className="buttons">
                
              <a href="http://www.linkedin.com/in/santhosh-kumar-737a47204" className="button contact">Contact</a>
            <a href="./pages/Dashboard/dashboard.html" className="button get-started"
              >Dashboard</a
            >
            <a href="pages/Login/loginindex.html" className= "button login">Login</a>
          </div>
          
          <div className="mobile-menu">
            <div className="open-close">
              <img
                src="./images/menu.svg"
                alt="Abrir"
                className="open"
                onclick="Menu.open()"
              />
              <img
                src="./images/close.svg"
                alt="fechar"
                className="close"
                onclick="Menu.close()"
              />

              <div className="logo-menu">
                <img src="./images/logo.svg" alt="" />
                <p>Expense Tracker</p>
              </div>
            </div>
            <div className="menu">
              <div className="menu-open">
                <div className="menu-items">
                  <ul>
                    <li><a href="./index.html" onclick="Menu.close()">Home</a></li>
                    <li><a href="http://www.linkedin.com/in/santhosh-kumar-737a47204" onclick="Menu.close()">Contact</a></li>
                    <li>
                      <a
                        href="./pages/Dashboard/dashboard.html"
                        onclick="Menu.close()"
                        >Get Started</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="header-content">
          <div className="header-content-left">
            <h1>Stuggling with tracking your expenses?</h1>
            <p>
              we bring you an one stop solution for tracking your expenses.
            </p>
            <a href="./pages/Dashboard/dashboard.html" className="button get-started"
              >Start now!!</a
            >
          </div>

          <div className="header-content-right">
            <img src="./images/homeimage.png" alt="Team image" />
          </div>
        </div>
      </header>
      

      <main id="preview">
        <section className="app-preview container">
          <div className="app-preview-left">
            <img src="./images/laptop_preview.png" alt="App image" />
          </div>

          <div className="app-preview-right">
            <h2 className="section-title">Optimize your expenses for greater savings and financial security</h2>
            <p className="section-paragraph">
              Leave behind the hassle of spreadsheets as you embrace customizable budgeting. Effortlessly track and adjust your income and expenses to fit your needs.
            </p>
            <div className="get-started-line">
              <a href="./pages/Dashboard/dashboard.html" className="get-started"
                >Try Now !</a
              >
              <div className="green-line"></div>
            </div>
          </div>
        </section>
        <h1>

        </h1>
        <div className='App'>
          <Stock></Stock>
        </div>
        
        <section className="track-your-spending container" id="track">
          <div className="track-your-spending-left">
            <h2 className="section-title">Track your Expenses</h2>
            <p className="section-paragraph">
              Achieve your objectives through tailored budget plans, monitoring your earnings and expenditures daily, all at no cost.
            </p>
            <div className="get-started-line">
              <a href="./pages/Dashboard/dashboard.html" className="get-started"
                >Try Now !</a
              >
              <div className="green-line"></div>
            </div>
          </div>

          <div className="track-your-spending-right">
            <img src="./images/idea.png" alt="image" />
          </div>
        </section>
        
        <section id="contact" className="get-in-touch container">
          <div className="get-in-touch-content">
            <div className="get-in-touch-left">
              <h2 className="section-title">Sounds Intresting ?</h2>
            </div>
            <div className="get-in-touch-right">
              <a
                href="./pages/Dashboard/dashboard.html"
                className="button get-started"
                >Try Now !</a
              >
            </div>
          </div>
        </section>
        
      </main>

      <footer> 
        <div className="footer-card">
          <h3>Developer</h3>
          <h3>Santhosh Kumar S P (22BCE3084)</h3>
          <div className="social">
            <a href="http://www.linkedin.com/in/santhosh-kumar-737a47204" target="_blank" id="linkedin">
              <i data-feather="linkedin" className="dark-icon"></i>
            </a>
            <a href="https://github.com/isanthosh2004/" target="_blank">
              <i data-feather="github" className="dark-icon" id="git"></i>
            </a>
            <a href="https://www.instagram.com/.santhoshhhh_?igsh=MTJrdDRraHhsYW0xYQ==" target="_blank" id="insta">
              <i data-feather="instagram" className="dark-icon"></i>
            </a>
          </div>

        </div>
      </footer>

      
      
      

      {/* <script src="https://unpkg.com/scrollreveal"></script>
      <script src="scrollReveal.js"></script>
      <script src="home.js"></script>
      <script>
        feather.replace();
      </script>

      <script>
        // ==== LOADING SCREEN
        let spinner = document.querySelector('.loader-overlay');

        window.addEventListener('load', () => {
          spinner.parentElement.removeChild(spinner);
        })
      </script> */}
    </div>
  );
}

export default App;
