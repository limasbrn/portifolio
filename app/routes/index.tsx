import logo from "../images/logo-complete.svg";
import emailIcon from "../icons/email-icon.svg";
import linkedInIcon from "../icons/linkedin-icon.svg";
import littleLogo from "../images/logo-S.svg"

export default function Index() {
  return (
    <div>
      <section className="section_presentation">
        <div className="presentation">
          <img src={logo} />
          <h3>Front - end Jr & Ilustradora</h3>
          <p>
            Olá! me chamo Sabrina, sou desenvolvedora Front-end e Ilustradora,
            prazer em conhecê-lo!
          </p>
        </div>
      </section>

      <section className="section_skills">
        <div className="skills">
          <h2>Skills</h2>
          <p>Conhecimentos e ferramentas com que tenho trabalhado</p>
          <div className="container_skills">
            <div className="item">HTML</div>
            <div className="item">CSS</div>
            <div className="item">React Js</div>
            <div className="item">Git</div>
            <div className="item">Metodologias Ágeis</div>
            <div className="item">Adobe XD</div>
            <div className="item">JavaScript</div>
            <div className="item">Tailwind</div>
            <div className="item">Stiches</div>
            <div className="item">Illustrator</div>
            <div className="item">Figma</div>
          </div>
        </div>
      </section>

      <section className="section_project">
        <div className="projetos_area">
          <h2>Projetos</h2>
          <p>Conheça alguns dos meus projetos</p>
        </div>
      </section>

      <section className="section_project">
        <div className="projetos_area">
          <h2>Contatos</h2>
          <p>Me mande um alô!</p>
          <div className="link_contact">
            <img src={emailIcon} />
            <p>lima.sbrn@gmail</p>
          </div>
          <div className="link_contact">
            <img src={linkedInIcon} />
            <p>/sabrinalsilva</p>
          </div>
        </div>
      </section>

      <footer>
        <img src={littleLogo}/>
      </footer>
    </div>
  );
}
