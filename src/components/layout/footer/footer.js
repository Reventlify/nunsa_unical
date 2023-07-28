import BottomSpace from "../../bottomSpace";
import classes from "../footer/footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  const refresh = () => {
    return window.location.reload();
  };
  return (
    <div className={`${classes.footer}`}>
      <div className="centerDivH">
        <motion.div
          whileInView={{ rotate: 360 }}
          transition={{ from: 0, duration: 1 }}
        >
          <div className="hover limiter" onClick={refresh}>
            <img
              src="https://nunsa.org.ng/wp-content/uploads/2021/01/NUNSA_NORTH_NG-scale-1._20200703_023930-scale-1-removebg-preview-1.png"
              alt="nunsaLogo"
              width="115px"
            />
          </div>
        </motion.div>
      </div>
      <h6 className="center mt-2">
        Nigerian Universities Nursing Students’ Association (NUNSA), University
        Of Calabar (UNICAL) Chapter
      </h6>

      <div className="centerDivH mt-3 mb-5">
        <div className="lineForHeader centerDivH" style={{ width: "100px" }}>
          <div className="theLine"></div>
        </div>
      </div>
      <div className="container margingTopmass">
        <div className="container">
          <div className="underlineGrey paddTB ourserGrid">
            <div>
              <div className="lineForHeader">
                <h5 className="bolder">Contact Us</h5>
                <div className="theLine"></div>
              </div>
              <span className="block paddTB left">
                Contact us by giving us a call or using any of the social media
                handles below or send us a mail at{" "}
                <span className="">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </span>
              <span className="block paddTB atGrab left">
                <span className="hover">
                  <a
                    className="a or"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348052033333"
                  >
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </span>
                <span className="ml-2 hover or">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span className="ml-2 hover or">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span className="ml-2 hover or">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span className="ml-2 hover or">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </span>
            </div>
            <div className="hover">
              <div className="lineForHeader">
                <h5 className="bolder">About Us</h5>
                <div className="theLine"></div>
              </div>
              <span className="block paddTB">
                The Nigerian Universities Nursing Students' Association (NUNSA),
                University of Calabar (UNICAL) Chapter, is a dynamic and
                student-run academic organization dedicated to promoting
                academic excellence and advancing the nursing profession.
                Proudly affiliated with NUNSA NATIONAL . . .
              </span>
            </div>
          </div>
          <div className="paddTB">
            <p className=" cRight browni bold" style={{ marginBottom: 0 }}>
              Designed by Edify IT
            </p>
            <span className="cRight block paddTB bold">
              © Copyright - <span className="nunsa">NUNSA UNICAL</span>. All
              rights reserved.
            </span>
          </div>
        </div>
      </div>
      <BottomSpace />
    </div>
  );
};
export default Footer;
