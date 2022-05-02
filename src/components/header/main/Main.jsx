import React from "react";
import "./main.css";
import { AiOutlinePhone } from "react-icons/ai";
import { BsHouseDoor, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left-side">
        <section className="top-left-side">
          <article>
           
            <p className="phone-number">
              <AiOutlinePhone className="phone" /> 0736-009506
            </p>
            <p className="address">
              <BsHouseDoor className="house" />
              Norra Ågatan 3, 416 49 Göteborg
            </p>
            <p className="email">
              <MdOutlineMailOutline className="letter" />
              carin.wood.85@gmail.com
            </p>
          </article>

          <article className="icon-area">
            <a target="_blank" href={"https://github.com/CarinWood"}>
              <BsGithub className="git" />
            </a>
            <a target="_blank" href={"https://www.linkedin.com/in/carin-wood"}>
              <BsLinkedin className="linked" />
            </a>
          </article>
          <div className="div"></div>
        </section>

        <section className="middle-left-side">
          <h1 className="edu-heading">Utbildning</h1>
          <p className="webbdev">Webbutveckling, Campus Mölndal</p>
          <p className="webdev-date">Examensår: 2022 </p>
          <p className="edu-text">HTML, CSS, JavaScript, TypeScript, 
          UX/UI, React.js, Node.js, Express.js, 
          API, MongoDB, RestAPI, Mongoose, SQL, NoSQL, MERN, frontend, backend, fullstack</p>

      
          <p className="economy">Ekonomie magisterexamen, Handelshögskolan Göteborg</p>
          <p className="economy-date">Examnensår: 2012</p>
          <p className="economy-text">Företagsekonomi, Nationalekonomi, statistik, juridik, ekonomisk historia</p> 
          <p className="economy-text-2">Min kandidatuppsats behandlade marknadsföring
           och min magisteruppsats externredovisning</p>
        </section>
        <section className="lower-left-side">
        <div className="div-2"></div>
          <h1 className="about-heading">OM MIG</h1>
        
          <p className="about-text">
            Jag studerar just nu Webbutveckling på Campus Mölndal. Jag är mycket driven
            i mina studier och utmanar mig hela tiden att prestera mitt absolut bästa.
          </p>
          <p className="about-text">
            Roligast i utbildningen så här långt har varit att bygga webbsidor med
            JavaScript och React och att se ett visuellt resultat av mitt arbete.
          </p>
          <p className="about-text">
            För mig är detaljer lika viktiga som helheten och jag är snabb på att hitta
            lösningar på de problem som uppstår. 
          </p>
          <p className="about-text">
            Som person är jag positiv, lätt att jobba med och har en stor portion humor.
          </p>
          
        </section>
      </div>
    
      <div className="divider"></div>
      <section className="right-side">
       
        <section className="middle-right-side">
          <div className="div-3"></div>
        <h1 className="job-heading">Anställningar</h1>
        <p className="job-text">
          Under min studietid på Handels arbetade jag extra med diverse servicejobb såsom 
          restaurangbiträde på Liseberg, croupier på Casino Cosmopol och butikssäljare på Åhléns.
        </p>
        <p className="job-text">
          Som utbildad civilekonom har arbetat på olika företag inom ekonomibranschen. Bland annat som bankadministratör på Nordea
          och ekonomiassistent på Akzo Nobel. 
        </p>
        <p className="job-text">Jag har de senaste åren varit anställd inom den offentliga sektorn.
          Dels som handläggare på Försäkringskassan samt utredare och administratör på Polismyndigheten.
        </p>
        <p className="job-text">Efter att ha arbetat en tid inom offentlig sektor kände jag att jag ville göra någonting helt annat.
        Jag kände att programmering var det rätta för mig då jag är analytiskt lagd och gillar problemlösning. Då vårt samhälle blir 
        mer och mer digitaliserat känns det som att ett jobb inom it-branschen ligger helt rätt i tiden.</p>
       
        
        
        <div className="div-4"></div>
        <h1 className="language-heading">SPRÅK</h1>
        <p className="language-text">Modersmål svenska
        <br/>
        Mycket goda kunskaper i engelska
        <br/>
        Goda kunskaper i tyska</p>
        </section>
        <section className="lower-right-side">
        <h1 className="others-heading">ÖVRIGA MERITER</h1>
        <p className="others-text">Körkort, behörighet B</p>
        </section>
        <section className="bottom-right-side">
        <h1 className="references-heading">Referenser</h1>
        <p className="others-text">Goda referenser lämnas på begäran</p>
        </section>
      </section>
    </div>
  );
};

export default Main;
