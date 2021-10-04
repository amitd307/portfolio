import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .downLoadCV {
    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: 'var(--gray-1)';
    padding: 1rem 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
      .downLoadCV {
        font-size: 1.5rem;
      }
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Amit Debnath</span>
              </p>
              <h2 className="about__heading">A Mechanical Design Engineer</h2>
              <div className="about__info">
                <PText>
                  I'm from New Delhi, India. A spot which had rich legacy and
                  history. Since, the start of my expert profession, I'm
                  exceptionally energetic and committed myself into art and
                  design.
                  <br /> <br />
                  I began CAD Designing, since my recognition's first year, from
                  that day I actually have that enthusiasm and devotion for
                  engineering plan. It address who I am truly.
                  <br />
                  <br />
                  My vision is to make the world a superior spot, my moto isn't
                  simply planning stuff yet to enhancing it. I might want to
                  make something which has an importance to it
                </PText>
              </div>
              <div className="downLoadCV">
                <a
                  href="https://drive.google.com/file/d/1KsMsntrTjM8cwaEw8kTaVaqPzAXWjbIl/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Sukhamoy H.S. School, Agartala']}
              />
              <AboutInfoItem
                title="Diploma"
                items={['PM College of Engineering, Sonipat']}
              />
              <AboutInfoItem
                title="Collage"
                items={['KCC Institute of Technology, Greater Noida']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['Dr. A.P.J. Abdul Kalam Technical University, Lucknow']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="Drafting" items={['2D/3D Drafting']} />
              <AboutInfoItem
                title="Design"
                items={[
                  '3D Modeling, SPM Design',
                  'Hard Surface Modeling, Illustration',
                ]}
              />
              <AboutInfoItem
                title="Tools"
                items={[
                  'Fusion 360, GD&T, AutoCAD, STAAD, 3Ds Max, V-Ray',
                  'SolidWorks, Keyshot, Inventor, Blender',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021 -"
                items={['Mechanical Engineer at SEPL India Ltd.']}
              />
              <AboutInfoItem
                title="2018 -"
                items={['Freelance Mechanical Design Engineer']}
              />
              <AboutInfoItem
                title="2016"
                items={['Jr. Design Engineer at TATA Motors, Agartala']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
