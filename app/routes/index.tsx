import logo from "../images/logo-complete.svg";
import emailIcon from "../icons/email-icon.svg";
import linkedInIcon from "../icons/linkedin-icon.svg";
import littleLogo from "../images/logo-S.svg";
import githubIcon from "../icons/github-icon.svg";
import moonIcon from "../icons/moon-icon.svg";
import { PresentationWrapper } from "~/components/presentation";
import { SectionWrapper } from "~/components/section";
import { Skill } from "~/components/skill";
import linha1Right from "../images/1r-line.svg"
import linha2Right from "../images/2r-line.svg"
import linhaCurve from "../images/curve-line.svg"
import x1Left from "../images/x-1.svg"
import x2Right from "../images/x-2.svg"
import blackCircleTop from "../images/cicle-top.svg"
import blackCircle from "../images/r-b-cicle.svg"
import eye1 from "../images/eye-1.svg"
import eye2 from "../images/eye-2.svg"
import x3Right from "../images/x-3.svg"
import blackCircleLeft from "../images/circle-left.svg"
import footerLine from "../images/line_footer.svg"
import oucastStore from "../images/Home_mini.jpg"
import studyBuddies from "../images/studdy-buddies.jpg"
import uxAcademy from "../images/ux-academy.jpg"


export default function Index() {
  return (
    <div>
      <div className="btn-section">
        <div>
          <img className="linha1" src={linha1Right}/>
      
        </div>
        <button className="mode_btn hover_item">
          <img src={moonIcon} />
        </button>
      </div>
      <PresentationWrapper>
      <img className="linha2" src={linha2Right}/>
      <img className="linha_curve" src={linhaCurve}/>
      <img className="x1_left" src={x1Left}/>
      <img className="x2_right" src={x2Right}/>
      <img className="black_circle_top" src={blackCircleTop}/>
      <img className="black_circle" src={blackCircle}/>
      <img className="eye_1" src={eye1}/>
      <img className="circle_left" src={blackCircleLeft} />

        <div className="presentation centralize">
          <img src={logo} />
          <h3>Front - end Jr & Ilustradora</h3>
          <p>
            Ol??! me chamo Sabrina, sou desenvolvedora Front-end e Ilustradora,
            prazer em conhec??-lo!
          </p>
        </div>
      </PresentationWrapper>

      <SectionWrapper>
        <div className="container">
          <h2>Skills</h2>
          <p>Conhecimentos e ferramentas com que tenho trabalhado</p>
          <div className="container_skills">
            <Skill text="HTML"/>
            <Skill text="CSS"/>
            <Skill text="React Js"/>
            <Skill text="Git"/>
            <Skill text="Metodologias ??geis"/>
            <Skill text="Adobe XD"/>
            <Skill text="JavaScript"/>
            <Skill text="Tailwind"/>
            <Skill text="Stiches"/>
            <Skill text="Illustrator"/>
            <Skill text="Figma"/>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <h2>Projetos</h2>
          <p>Conhe??a alguns dos meus projetos</p>

          <div className="projects centralize">
            <div className="container_projeto hover_item centralize">
              <img src={ oucastStore }/>
              <div className="project_detail"> 
                <span className="bolder_subtext">Outcast Store</span>
                <ul className="tools_project">
                  <li className="normal_subtext centralize">React Js</li>
                  <li className="normal_subtext centralize">Tailwind</li>
                </ul>
              </div>
            </div>
            <div className="container_projeto hover_item">
              <img src={ studyBuddies}/>
              <div className="project_detail"> 
                <span className="bolder_subtext">Study Buddies</span>
                <ul className="tools_project">
                  <li className=" normal_subtext centralize">Css</li>
                  <li className=" normal_subtext centralize">Html</li>
                  <li className=" normal_subtext centralize">Js</li>
                </ul>
              </div>
            </div>
            <div className="container_projeto hover_item">
              <img src={ uxAcademy }/>
              <div className="project_detail"> 
                <span className="bolder_subtext">Ux Acadamy</span>
                <ul className="tools_project">
                  <li className=" normal_subtext centralize">Css</li>
                  <li className=" normal_subtext centralize">Html</li>
                  <li className=" normal_subtext centralize">Js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="botao_container">
            <a href="https://github.com/limasbrn">
              <button className="btn_github centralize">
                <img src={githubIcon} />
                <span className="bolder_subtext">Visite o reposit??rio</span>
              </button>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <img className="eye_2" src={eye2} />
        <img className="x3_right" src={x3Right} />
        <div className="container">
          <h2>Contatos</h2>
          <p>Me mande um al??!</p>
          <div className="link_contact">
            <img src={emailIcon} />
            <p className="bolder_subtext">lima.sbrn@gmail</p>
          </div>
          <div className="link_contact">
            <img src={linkedInIcon} />
            <a href="https://www.linkedin.com/in/sabrinalsilva/">
              <p className="bolder_subtext">/sabrinalsilva</p>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <footer className="footer_container">
        <img src={footerLine} className="footer_line"/>
        <img src={littleLogo} className="footer_logo" />
      </footer>
    </div>
  );
}
