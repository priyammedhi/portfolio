import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <h5>Priyam Medhi</h5>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <a href="https://www.instagram.com/_priyammedhi_" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/priyammedhi" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:priyamkar23@gmail.com" className="text-white mr-3">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/priyam-medhi-b49910201/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="tel:+918472824009" className="text-white mr-3">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>© Designed by Priyam Medhi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;