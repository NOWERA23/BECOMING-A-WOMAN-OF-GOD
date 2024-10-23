import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Form1 from './Form1'; // Import your form components
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';

function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/E.png)` }}>
        <header className="app-header">
          <h1 className="header-title"></h1> 
          <h1 className="header-title"><br /></h1>
          <div className="header-table">
            {/* Make each image clickable */}
            <div className="header-cell">
              <a href="/form1"> {/* Link to Form 1 */}
                <img src={`${process.env.PUBLIC_URL}/A.png`} alt="A" className="header-image rotate" />
              </a>
            </div>
            <div className="header-cell">
              <a href="/form2"> {/* Link to Form 2 */}
                <img src={`${process.env.PUBLIC_URL}/S.png`} alt="S" className="header-image rotate" />
              </a>
            </div>
            <div className="header-cell">
              <a href="/form3"> {/* Link to Form 3 */}
                <img src={`${process.env.PUBLIC_URL}/H.png`} alt="H" className="header-image rotate" />
              </a>
            </div>
            <div className="header-cell">
              <a href="/form4"> {/* Link to Form 4 */}
                <img src={`${process.env.PUBLIC_URL}/N.png`} alt="N" className="header-image rotate" />
              </a>
            </div>
            <div className="header-cell">
              <a href="/form5"> {/* Link to Form 5 */}
                <img src={`${process.env.PUBLIC_URL}/P.png`} alt="P" className="header-image rotate" />
              </a>
            </div>
            <div className="header-cell">
              <a href="/form6"> {/* Link to Form 6 */}
                <img src={`${process.env.PUBLIC_URL}/Y.png`} alt="Y" className="header-image rotate" />
              </a>
            </div>
          </div>
        </header>
        <footer className="app-footer">
          <h1><b><i>I AM BECOMING A WOMAN OF GOD</i></b></h1>
        </footer>
      </div>

      {/* Define Routes for the forms */}
      <Routes>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/form6" element={<Form6 />} />
      </Routes>
    </Router>
  );
}

export default App;
