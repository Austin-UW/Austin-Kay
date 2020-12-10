import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.onload = function() {
// eslint-disable-next-line no-undef
particlesJS("root", {
  "particles": {
     "number": {
        "value": 256,
        "density": {
           "enable": false
        }
     },
     "color": {
        "value": "#ffffff"
     },
     "shape": {
        "type": "circle",
        "stroke": {
           "width": 0,
           "color": "#000000"
        }
     },
     "opacity": {
        "value": 1,
        "random": true,
        "anim": {
           "enable": true,
           "speed": 1,
           "opacity_min": 0,
           "sync": false
        }
     },
     "size": {
        "value": 3.5,
        "random": true,
        "anim": {
           "enable": false,
           "speed": 4,
           "size_min": 0.3,
           "sync": false
        }
     },
     "line_linked": {
        "enable": false
     },
     "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
           "enable": false
        }
     }
  },
  "interactivity": {
     "detect_on": "canvas",
     "events": {
        "onhover": {
           "enable": true,
           "mode": "bubble"
        },
        "onclick": {
           "enable": true,
           "mode": "repulse"
        },
        "resize": true
     },
     "modes": {
        "bubble": {
           "distance": 250,
           "size": 0,
           "duration": 2,
           "opacity": 0,
           "speed": 3
        },
        "repulse": {
           "distance": 400,
           "duration": 0.4
        }
     }
  },
  "retina_detect": true
})
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
