import styles from "./AboutUs.module.css";
import testImage from "../../../images/Aboutus.webp";
import animte2 from "../../../images/History.png";
import animate3 from "../../../images/wcu.webp";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useEffect } from "react";
const AboutUs = ({ color }) => {
  // console.log(color)
  useEffect(() => {
    document.getElementById("about").style.color = color;
  }, [color]);
  return (
    <div className={styles.about} id="about" style={{ color: "white" }}>
      <div className={styles.craouselContainer}>
        
          {/* <Link to = ""><h1>About Us</h1></Link> */}
        
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={testImage} alt="" />
            </AnimationOnScroll>
          </div>

          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>
                About our company
              </h2>
              <p>Blitzpath Innovations was conceived with the vision of providing
              equal opportunities to talented individuals across India. We
              recognized a significant gap between the availability of skilled
              resources in Tier 2 and Tier 3 cities and the organizations
              seeking the right skilled resources. With our commitment to
              democratizing access to opportunities, we have developed a
              platform that connects organizations with remote talent,
              especially in the information technology services sector. Our
              game-changing platform integrates people and processes, making us
              the go-to solution for cost optimization while enabling remote
              access to highly skilled resources. Since our inception in 2017,
              we have grown our team to include over 400 technical and language
              experts, along with 50+ developers operating in cycles, providing
              24x7 support to meet your IT and IT-enabled service needs.</p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type2}>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>Our History</h2>
              <p>Since our establishment in 2017, we have been committed to
              creating a platform that empowers individuals in remote areas to
              access IT job opportunities from their homes. With our innovative
              and flexible working model, we have successfully eliminated the
              need for relocation to metro cities to build a career in the
              industry.</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <img src={animte2} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={animate3} alt="" />
            </AnimationOnScroll>
          </div>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>
                Why choose Blitzpath
              </h2>
              <p>We pride ourselves on our ability to provide cutting-edge,
              innovative solutions that are meticulously designed to meet the
              unique needs of our clients. We place a strong emphasis on being
              client-centric, always keeping your specific requirements and
              preferences in mind throughout the development process. Our
              proprietary platform is specifically designed to help break down
              the geographic and linguistic barriers that often prevent
              companies from accessing the technical talent they need. With over
              400 technical and language experts, as well as a team of 50+
              skilled developers operating in cycles, we are able to provide
              24x7 support to ensure that your IT and IT-enabled service needs
              are always met. Our team is deeply committed to continuous
              learning and development, and we stay up-to-date with the latest
              technological advancements so that we can deliver the best
              possible outcomes for our clients. Whether you're looking for a
              partner who can provide cost-effective solutions, or simply need a
              team of experts who can help you navigate the complexities of
              modern technology, Blitzpath Innovations is here to help.</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
