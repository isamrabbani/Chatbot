import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  useEffect(() => {
    // Remove any existing chatbot div to prevent duplicates
    const existingDiv = document.getElementById('aichatbot');
    if (existingDiv) {
      existingDiv.remove();
    }

    // Embed the new Chatbot script dynamically
    const chatbotDiv = document.createElement('div');
    chatbotDiv.id = 'aichatbot';
    document.body.appendChild(chatbotDiv);

    const chatbotConfigScript = document.createElement('script');
    chatbotConfigScript.innerHTML = `
      !function(w, d, s, ...args){
        var div = d.createElement('div');
        div.id = 'aichatbot';
        d.body.appendChild(div);
        w.chatbotConfig = args;
        var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
        j.defer = true;
        j.type = 'module';
        j.src = 'https://aichatbot.sendbird.com/index.js';
        f.parentNode.insertBefore(j, f);
      }(window, document, 'script', '6AB1BB72-32FD-48CA-B5FB-063B6F8EC498', 'I9pPkvSdmUJqRuSVw7k51', {
        apiHost: 'https://api-cf-ap-5.sendbird.com',
      });
    `;
    document.body.appendChild(chatbotConfigScript);
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <a href="#admissions">Admissions are open!</a>
          <a href="#tuition">Tuition Fee and Exam Fee</a>
          <button>Student Education Verification</button>
        </div>
        <div className="logo-section">
          <img src="/logo.png" alt="College Logo" className="logo" />
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#departments">Departments</a>
          <a href="#placements">Placements</a>
          <a href="#exam">Exam</a>
          <a href="#research">R&D</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="image-left">
            <img src="/award1.png" alt="Award Ceremony" />
          </div>
          <div className="image-right">
            <img src="/award2.png" alt="Another Award" />
          </div>
          <div className="image-bottom">
            <img src="/depts.png" alt="Departments" />
          </div>
        </div>
        <div className="updates-bar">
          <p>
            Placement Statistics A.Y 2023-24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Cybage Kushboo Scholarships 2023-24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Suspension of Exam
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
