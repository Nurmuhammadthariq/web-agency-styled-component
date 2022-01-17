import React from 'react';
// Images
import pinkBlob from '../../assets/blobPink.png';
import whiteBlob from '../../assets/blob white.png';
import purpleBlob from '../../assets/blob purple.png';
import Arrow from '../../assets/Arrow Right.svg';
import Mobile from '../../assets/mobile.svg';

// Elements
import {
  HomeSection,
  Blobs,
  MainContent,
  MobileSvg,
  PinkBlob,
  WhiteBlob,
  PurpleBlob,
  LeftBlock,
  Topic,
  Circle,
  Title,
  SubText,
  CTA,
} from './HeroElements';

const Hero = () => {
  return (
    <HomeSection>
      <Blobs>
        <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />
        </PinkBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob>
      </Blobs>

      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle />
            <span>We Build Web</span>
          </Topic>
          <Title>Transforming your digital presence</Title>
          <SubText>
            {' '}
            We help fast growing companies build award winning websites{' '}
          </SubText>
          <CTA>
            Get in touch &nbsp;
            <img src={Arrow} alt="" />
          </CTA>
        </LeftBlock>

        <MobileSvg src={Mobile} alt="Mobile"></MobileSvg>
      </MainContent>
    </HomeSection>
  );
};

export default Hero;
