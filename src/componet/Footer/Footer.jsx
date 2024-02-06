import React from "react";

import {FaFacebook, FaSquareXTwitter , FaInstagram , FaWhatsapp, FaRegCopyright} from "react-icons/fa6";

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
                <FaRegCopyright /> 2023. ALL RIGHTS RESERVED BY COFFEE PL.{" "}
                </h6>
              </div>
            </div>
            <div class="col">
              <div class="social-icons">
                <a href="#" class="instagram">
                <FaInstagram />
                </a>
                <a href="#" class="facebook">
                <FaFacebook />
                </a>
                <a href="#" class="twitter">
                <FaSquareXTwitter />
                </a>

                <a href="https://wa.me/your-phonenumber" class="whatsapp">
                <FaWhatsapp />
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
