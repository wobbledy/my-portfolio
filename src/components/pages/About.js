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
        Hello, I'm Zach Leone and I'm a developer in training, although most developers are. I enjoy sailing, jetskiing, and all sorts of water sports not too available in
        Arizona. When I'm not out exploring in my free time, I enjoy learning about new technologies and how to implement them.
        I'm currently working on expanding my skillset in backend development using MongoDB and GraphQL. Please feel free to take the time to view
        my projects and contact me if you have any questions.
      </AboutText>
    </AboutContainer>
  );
}