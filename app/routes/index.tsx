import logo from "../images/logo-complete.svg";
import emailIcon from "../icons/email-icon.svg";
import linkedInIcon from "../icons/linkedin-icon.svg";
import littleLogo from "../images/logo-S.svg";
import githubIcon from "../icons/github-icon.svg";
import moonIcon from "../icons/moon-icon.svg";
import { PresentationWrapper } from "~/components/presentation";
import { SectionWrapper } from "~/components/section";
import { Skill } from "~/components/skill";

export default function Index() {
  return (
    <div>
      <div className="btn-section">
        <button className="mode_btn hover_item">
          <img src={moonIcon} />
        </button>
      </div>
      <PresentationWrapper>
        <div className="presentation centralize">
          <img src={logo} />
          <h3>Front - end Jr & Ilustradora</h3>
          <p>
            Olá! me chamo Sabrina, sou desenvolvedora Front-end e Ilustradora,
            prazer em conhecê-lo!
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
            <Skill text="Metodologias Ágeis"/>
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
          <p>Conheça alguns dos meus projetos</p>

          <div className="projects centralize">
            <div className="container_projeto hover_item"></div>
            <div className="container_projeto hover_item"></div>
            <div className="container_projeto hover_item"></div>
          </div>

          <div className="botao_container">
            <a href="https://github.com/limasbrn">
              <button className="btn_github centralize">
                <img src={githubIcon} />
                <span className="bolder_subtext">Visite o repositório</span>
              </button>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <h2>Contatos</h2>
          <p>Me mande um alô!</p>
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

      <footer>
        <img src={littleLogo} />
      </footer>
    </div>
  );
}
