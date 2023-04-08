import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faYoutube,faLinkedinIn,faGithubAlt } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae diam tempus nunc laoreet dignissim. Suspendisse eros tellus, finibus a sollicitudin eu, placerat eu ipsum. Ut commodo facilisis neque eget malesuada. Sed rhoncus non mi eget tempor. Nunc pharetra dolor eget tellus volutpat pharetra. Quisque ornare sollicitudin tortor. Integer non sodales magna. Nunc porta lectus nec mi faucibus, quis pharetra odio feugiat. Integer gravida aliquam ex, ac interdum turpis ultrices ac. In pellentesque rutrum diam, a euismod sem tempus et. Vivamus blandit nibh in lorem commodo vehicula. Nulla hendrerit consequat augue. Sed auctor, ligula non condimentum fringilla, velit lacus eleifend ante, et iaculis nisl felis in erat. Maecenas in interdum justo. Nam efficitur euismod metus ut rhoncus. In sodales turpis nec dapibus ullamcorper. 
              </p>
            </div>
            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="">C</a>
                </li>
                <li>
                  <a href="">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="">
                    Java
                  </a>
                </li>
                <li>
                  <a href="">Android</a>
                </li>
                <li>
                  <a href="">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a >Scanfcode</a>.
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a href="https://ru-ru.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF}/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=ru">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@user-rs7jx8yk7d">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ProfBat018">
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/elvin-azimov-68787b15a/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
