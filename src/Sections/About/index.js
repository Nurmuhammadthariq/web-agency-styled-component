import React from 'react';
import Wave from '../../assets/waves.svg';
import hand from '../../assets/hand.svg';
import rocket from '../../assets/rocket image.png';
import human from '../../assets/human.svg';

import {
  AboutSection,
  Waves,
  Hand,
  Main,
  Title,
  CurvedLine,
  Content,
  Rocket,
  Human,
  AboutText,
  Text,
  Circle,
} from './AboutElements';

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={Wave} alt="" />
      {/* <Hand>
        <img src={hand} alt="" />
      </Hand> */}
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            {/* <Human>
              <img src={human} alt="" />
            </Human> */}

            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
            <div>
              <Circle style={{ backgroundColor: 'var(--purple)' }} />
              <Circle style={{ backgroundColor: 'var(--pink)' }} />
              <Circle style={{ backgroundColor: 'var(--black)' }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
