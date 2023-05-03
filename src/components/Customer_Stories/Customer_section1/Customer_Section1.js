import React from "react";
import "./Customer_Section1.css";
import ConsultingCustomers from "../../../images/cstories1.jpeg";
import TechnologyCustomers from "../../../images/CS3.jpg";
import Stories from "../../../images/CS4_copy.webp";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Customer_Section1() {
  return (
    <div>
      <div className="Customer_Container">
        <div className="Customer_Image">
          <img src={Stories} alt="" />
        </div>
      </div>
      <div className="Customer_provide">
        <div className="stories_heading">
          <h1>"Committed to revolutionizing the IT services industry and delivering exceptional solutions to our clients."</h1>
        </div>
        <div className="Customer_box">
          <div className="Customer_box_image">
            <img src={ConsultingCustomers} alt="" />
          </div>
          <div className="Customer_box_content">
          <div className="title1">
    
          <div className="Customer_title">
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInUp"
            >
              <h1>Social Media and Communities is Future:</h1>
            </AnimationOnScroll>
          </div>
        </div>
            <div className="Customer_content">
              <p>
                Gone are the days when customers used to wait on phone lines to
                get answer to their simple queries. Blitzpath works with you to
                get best talent resolve your customer’s queries on their
                favorite platforms such as WhatsApp, Facebook, Instagram or
                Community. Our clients have leveraged cool solutions developed
                by our talented team which enable crowdsourced resources to
                support their customers enhanced efficiency and optimal cost.
                Research says that over 70% customers don’t want to pick up a
                phone and seek support. Rather getting asynchronous response on
                their pre-installed application on their hand held device gives
                them immense convenience. Blitzpath’s solutions bridge the gap
                between customers looking for right solution with self help
                options and support resources who are spending few hours of
                their free time from busy schedule of work and personal life in
                helping such customers. Our clients have brought their cost of
                support down up to 60% without compromising on customer
                experience.
              </p>
              <p>
                Blitzpath takes ownership of not
                only IT solution but has very strong resourcing wing to
                channelize talented and committed pool of resources to
                seamlessly ramp up a robust crowdsourcing program. Programs like
                these align very well with vision with which Blitzpath was
                started.
              </p>
            </div>
          </div>
        </div>
     
        <div className="Customer_box box2">
          <div className="Customer_box_content">
          <div className="title1">
          <div className="Customer_title">
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInUp"
            >
              <h1>Artificial Intelligence is driving transformation</h1>
            </AnimationOnScroll>
          </div>
            <div className="Customer_content">
              <p>
                Artificial Intelligence (AI) is the next generation workforce
                which will help in biggest automation across the industry. While
                the technology claims 80%+ accuracy in predictive analytics, it
                needs significant effort to prepare training data, testing and
                make machine learn. Blitzpath has demonstrated repeated success
                with such assignments at global level. We not only bring
                functional expertise in these areas but own end-to-end process
                of data interpretation. Annotation is just one example in case
                of a Chatbot development. We played a pivotal role in developing
                training data for ChatBot development for a global car rental
                company by annotating their conversation data with customers.
              </p>
              <p>
                 Blitzpath adds value by maintaining
                continuous pipeline of right skilled resources, technology for
                seamless tracking of productivity and payments. Effort for
                clients reduce and makes it cost effective to use crowdsourced
                resources. Chatbot solution for our client could roll-out on
                time and accuracy improved by 28% over 3 months.
              </p>
            </div>
          </div>
        </div>
          <div className="Customer_box_image">
            <img src={TechnologyCustomers} alt="" />
          </div>
      </div>
    </div>
      </div>
  );
}

export default Customer_Section1;
