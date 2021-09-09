import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Amit Debnath</h1>
          <PText>
            A Mechanical Design Engineer from Delhi, India. I make top notch
            2D/3D design. I'm energetic in designing plan and workmanship,
            consistently attempt to show extraordinary perspectives to the crowd
            through my art.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91-7011211899',
                path: 'tel:+917011211899',
              },
              {
                title: 'amitdebnath307@gmail.com',
                path: 'mailto:amitdebnath307@gmail.com',
              },
              {
                title: 'R.K.Puram, New Delhi, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'linkedIn',
                path: 'https://www.linkedin.com/in/amit-debnath-843364180/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/amit.debnath.307',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/amitdebnath307',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/amit_dnath/',
              },
              {
                title: 'Art Station',
                path: 'https://www.artstation.com/amitdnath',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Sumit | Designed By Sumit Dev </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
