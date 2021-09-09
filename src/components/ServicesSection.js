import React from 'react';
import { FaAdobe, FaArtstation, FaDraftingCompass } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<GiGears />}
            title="SPM Design"
            desc="Accomplish SPM design skill, which help me to build various complex fully functional machine."
          />
          <ServicesSectionItem
            icon={<FaArtstation />}
            title="Hard Surface Modeling"
            desc="Hard surface modeling with blazing fast speed and ready to print model."
          />
          <ServicesSectionItem
            icon={<FaDraftingCompass />}
            title="2D/3D Drafting"
            desc="Having knowledge of reading 2D/3D engineering blueprint as well as 3 years plus exprience of  making them. "
          />
          <ServicesSectionItem
            icon={<FaAdobe />}
            title="Illustration Design"
            desc="Also design 2D illustration from time to time and I had 500 plus sell around the globe. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
