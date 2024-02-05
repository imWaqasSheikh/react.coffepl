import React from "react";

function Footer() {
  return (
    <div id="footer">
      <footer>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="touch-logo">
                <a href="#">
                  <img src="img/logo_white-e1592989810533.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col">
              <div id="COPYRIGHT">
                <h6>
                  COPYRIGHT &copy; 2023. ALL RIGHTS RESERVED BY COFFEE PL.{" "}
                </h6>
              </div>
            </div>
            <div class="col">
              <div class="social-icons">
                <a href="#" class="instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="twitter">
                  <i class="fab fa-twitter"></i>
                </a>

                <a href="https://wa.me/your-phonenumber" class="whatsapp">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
