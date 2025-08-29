import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import selfie from "../images/about.jpg";
import diagonalArrowUpIcon from "../images/diagonal-arrow-up.svg";
import ceramicPot from "../images/ceramic-pot.svg";
import ceramicSculpture from "../images/ceramic-sculpture.svg";
import resumeFile from "../images/JulissaZavala_Resume_2024.pdf";

const Info = () => {
  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className="info-container">
          <section className="info-container-left">
            <section className="info-bio">
              <p className="info-bio-details">
                My name is Julissa Zavala and I am currently based in Queens,
                New York (where I’m from!).
                <p className="info-bio-details-2">
                  I’m a Product Designer with four years of experience creating
                  tools for a range of users, from teachers and guidance
                  counselors to shelter directors, at New Visions for Public
                  Schools.
                </p>
                Good design should feel seamless, almost invisible.
                <br />
                But the process to get there isn’t always straightforward; every
                solution comes from conversations, decisions, and countless
                iterations. The hidden work behind every great design has always
                pulled me in, and that process is what keeps me learning and
                growing as a designer. I take pride in the details, knowing they
                add up to something meaningful. For me, design is about creating
                solutions that make people’s lives easier, while also keeping
                the bigger picture in focus so the work meets business goals
                with clarity and purpose.
              </p>
              <p className="info-bio-question">
                Want to learn more about my work experience?
                <br />
                <a
                  className="resume-pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resumeFile}
                >
                  Take a look at my resume{" "}
                  <img
                    src={diagonalArrowUpIcon}
                    alt="Diagonal arrow up"
                    className="diagonal-arrow-up"
                  />
                </a>
              </p>
            </section>
            <img className="info-image" src={selfie}></img>
          </section>
          <section className="info-container-right">
            {/* <video></video> */}
            <div
              style={{
                width: 461,
                height: 254,
                border: "1px solid black",
                marginLeft: "auto",
                marginBottom: 24,
              }}
            ></div>
            <p className="info-bio-details-3">
              When I’m away from my computer, you can usually find me in the
              kitchen trying out new recipes, going on long walks with my dog
              Penny, or more recently, learning how to dance salsa.
            </p>
            <p className="info-bio-details-3">
              I also really enjoy hands-on creative work like sketching,
              painting and ceramics. Here’s some recent ceramics projects I’ve
              been working on, at various point of WIP!
            </p>
            <img
              src={ceramicPot}
              alt="Cerapic pot of a girl with black hair and large hands leaning over and cradling herself"
              className="ceramic-pot"
            />
            <img
              src={ceramicSculpture}
              alt="Ceramic sculpture of a hand holding a flower. The hand has a chrome finish and the flower has yellow petals and a green stem"
              className="ceramic-sculpture"
            />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Info;
