import React from 'react';
import styled from 'styled-components';
import profilePic from '../../imgs/profilePic.jpg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AboutText = styled.p`
  text-align: center;
  line-height: 1.6;
`;


export default function About() {
  return (
    <AboutContainer>
      <ProfileImage src={profilePic} alt="Profile Image" />
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Greetings! I'm Zach Leone, a passionate developer eager to learn and grow in the field. 
        Just like many developers, I'm constantly honing my skills to stay ahead of the game.
        Despite being located in Arizona, where water sports are limited, I find solace in sailing, 
        jetskiing, and other aquatic activities whenever possible. When I'm not out exploring the world 
        around me, I dive into the fascinating realm of new technologies, always curious about how they 
        can be applied in practical ways. Currently, I'm focused on expanding my expertise in backend development, 
        specifically with MongoDB and GraphQL. Please feel free to take the time to view
        my projects and do not hesitate to reach out to me with any questions.
      </AboutText>
    </AboutContainer>
  );
}