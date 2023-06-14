import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SocialLink = styled.a`
  color: #333;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialLink href="https://github.com/wobbledy" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/zachary-leone-595206125/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </SocialLink>
      <SocialLink href="mailto:zjleone@gmail.com">
        <FaEnvelope size={30} />
      </SocialLink>
    </FooterContainer>
  );
}