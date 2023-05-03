import styles from "./Service.module.css";
import plus from "../../images/plus.svg";
import ServiceSection from  "./Section1/Service_section1";
// import About_Section1 from "../../images/ServicesPage.png";
import { useState, useEffect } from "react";
import ConsultingServices from "../../images/Consulting.png";
import AnalyticsServices from "../../images/Analytics.png";
import TechnologyServices from "../../images/techser.png";
import SourcingServices from "../../images/Sourcing.png";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
// import plus from '../../images/plus.svg';


const Service = ({currentService,setCurrentService}) => {
  const {width} = useWindowDimensions();

  const [height,setHeight] = useState('100%')
  const [display,setDisplay] = useState('flex')
  useEffect(()=>{
    if(currentService !== ''){
      setHeight('80vh')
    }
    else{
      setHeight('100%')
    }
  },[currentService])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ServiceSection/>
    <div className={styles.container} style={{height:height}}>
      <div className={styles.wrapper1} >
      
        {currentService === "Consulting" && (
          <div className={styles.popup} >
            <div className={styles.header}>
              <h1>Consulting</h1>
              <div>
                <img src={plus} alt="" onClick={() => {
                  setCurrentService("")
                  setHeight('100%')
                  setDisplay('flex')
                }} />
              </div>
            </div>
            <div className={styles.content} >
              <div className={styles.paragraph}>
                <p>
                  World is changing everyday and the technology is changing
                  faster than that. With every change, the challenge to keep
                  pace with customer expectation keeps increasing. Customers
                  expect help on channel of their choice to get variety of
                  support. Blitzpath has expertise to develop right strategy for
                  any business to select right channel for customer support. As
                  per recent study, countries like India, China, Brazil, Japan,
                  Australia and almost entire Europe has huge adoption for
                  digital asynchronous channels such as WhatsApp, WeChat, Line.
                  Blitzpath can help you to select right sales and support
                  strategy to engage with customers
                </p>
                <p>
                  Sometimes decision to arrive at right sourcing strategy for
                  services can be complicated. Balancing customer experience
                  with cost of support is not only challenging but can be a game
                  changer. Many small and medium size brands have made it big
                  with very unique sourcing strategy. Blitzpath has expertise in
                  analytics, market study and vendor identification process to
                  help their customers in deciding the right approach just
                  perfect and customized for their requirement. Engaging
                  Blitzpath early and partnering in strategy session can
                  multiply the ROI. Outsourcing, Crowdsourcing, Offshoring and
                  Process leasing decisions have never been so easy – engage
                  Blitzpath.
                </p>
              </div>
              <div className={styles.image}>
                <img src={ConsultingServices} alt="" />
              </div>
            </div>
          </div>
        )}
        {currentService === "Technology" && (
          <div className={styles.popup}>
            <div className={styles.header}>
              <h1>Technology</h1>
              <div>
                <img src={plus} alt="" onClick={() => {setCurrentService("")
              setHeight('100%')
              setDisplay('flex')}} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                <p>
                  Technology and Software development skills are commodity in
                  the 21st century. India has been biggest pool of software
                  development resources and as per market study entire country
                  is a competency in itself for development and maintenance
                  activities. Freelancers in software development, product
                  maintenance and support can bring the cost down significantly
                  which can help in powering the bottom-line, Blitzpath has
                  helped several Small and Medium businesses to develop right
                  strategy which takes the entire project from conceptualization
                  to delivery of results.
                </p>
                <p>
                  Blitzpath has delighted clients in execution of Technology
                  Programs which are targeted towards
                </p>
                <ul>
                  <li>Development of applications</li>
                  <li>QA and related activities</li>
                  <li>Database Management</li>
                  <li>Maintenance of large application – ERP, CRM</li>
                  <li>Customization of products</li>
                  <li>Post release support</li>
                </ul>
                <p>
                  Various customizable models of business engagements are
                  available which are just right for their clients requirements.
                </p>
              </div>
              <div className={styles.image}>
                <img src={TechnologyServices} alt="" />
              </div>
            </div>
          </div>
        )}
        {currentService === "Analytics" && (
          <div className={styles.popup}>
            <div className={styles.header}>
              <h1>Analytics</h1>
              <div>
                <img src={plus} alt="" onClick={() => {setCurrentService("")
              setHeight('100%')
              setDisplay('flex')}} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                <p>
                  Leading industry giants in Technology space have forecasted
                  that 50% of processes will be taken over by Artificial
                  Intelligence (AI) and Machine Learning (ML) based algorithms
                  by 2030. With such a promising future, it is always
                  recommended that businesses remain ahead of the curve. One of
                  the leading app based ride-share brand partnered with
                  Blitzpath to develop their AI powered chatbot solution which
                  helps in quick response to their riders/ drivers to address
                  their queries. Partnering with development agencies and
                  helping them with annotation services using crowdsourcing
                  solution was a great learning experience. Blitzpath took the
                  practice forward and makes these services available for all of
                  their Small and Medium business customers.
                </p>
              </div>
              <div className={styles.image}>
                <img src={AnalyticsServices} alt="" />
              </div>
            </div>
          </div>
        )}
        {currentService === "Sourcing" && (
          <div className={styles.popup}>
            <div className={styles.header}>
              <h1>Sourcing</h1>
              <div>
                <img src={plus} alt="" onClick={() => {setCurrentService("")
              setHeight('100%')
              setDisplay('flex')}} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                <p>
                  Evolving business models in the industry are fueled further by
                  Information Technology Enabled Services. While late 20th
                  century experienced surge in Offshore and outsourcing models,
                  it laid foundations for much advanced partnership arrangement
                  in early 21st century. Business Process Outsourcing relied a
                  lot on cost arbitrage, liability reductions however it still
                  has significant dependency on training, infrastructure and
                  country regulations.
                </p>
                <p>
                  Blitzpath extended all prevailing sourcing frameworks and
                  started experimenting on gig model – good 3-4 years ahead of
                  its popularity. Crowdsourcing has not only cost advantage, but
                  edge over other sourcing models in terms of quality. Clients
                  get all advantage of outsourcing whereas Blitzpath work on
                  their behalf to rally around all resources who can work within
                  a framework. Being ahead in this strategy means – better
                  platform, secured environment, sustaining pipeline in several
                  domains such as support, services, linguists, software
                  developers, data quality, data entry specialists.
                </p>
              </div>
              <div className={styles.image}>
                <img src={SourcingServices} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.wrapper} style={{display:display}} >

        <div
          className={styles.serviceCard}
          onClick={() => {
            setCurrentService("Consulting")
            setDisplay('none')
            if(width<=400){
              setHeight('150vh')
              
            }
            else{
              setHeight('90vh')
            }
          }}
        >
          <div className={styles.im}>

            <img src={ConsultingServices} alt="" />
          </div>
          <h1>Consulting</h1>
          <div className={styles.plus}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div
          className={styles.serviceCard}
          onClick={() =>
            { setCurrentService("Technology")
            setDisplay('none')
            if(width<=400){
              setHeight('115vh')
              
            }
            else{
              setHeight('90vh')
            }
          }}
          >
          <div className={styles.im}>

<img src={TechnologyServices} alt="" />
</div>
          <h1>Technology</h1>
          <div className={styles.plus}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div
          className={styles.serviceCard}
          onClick={() => 
            {setCurrentService("Analytics")
            setDisplay('none')
            if(width<=400){
              setHeight('100vh')
              
            }
            else{
              setHeight('90vh')
            }
            }
          }
        >
          <div className={styles.im}>

<img src={AnalyticsServices} alt="" />
</div>
          <h1>Analytics</h1>
          <div className={styles.plus}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div
          className={styles.serviceCard}
          onClick={() => {setCurrentService("Sourcing")
          setDisplay('none')
          if(width<=400){
            setHeight('115vh')
            
          }
          else{
            setHeight('90vh')
          }}}
        >
          <div className={styles.im}>

<img src={SourcingServices} alt="" />
</div>
          <h1>Sourcing</h1>
          <div className={styles.plus}>
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
    </div>
        
    </>

  );
};

export default Service;