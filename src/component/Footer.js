import React from "react";
import "../styles/footer.css";
import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 pb-0 my-4 border-top footer">
          <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">&copy; 2021 Jabenstar</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                <SlSocialInstagram className="ig-icon"></SlSocialInstagram>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
