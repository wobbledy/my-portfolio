import React from 'react';
import styled from 'styled-components';
import motivateMe from '../../imgs/motivateme.jpg';
import budgetPlanner from '../../imgs/budgetPlanner.jpg';
import jate from '../../imgs/jate.jpg';
import ecommerce from '../../imgs/ecommerce.jpg';
import notetaker from '../../imgs/notetaker.jpg';
import weather from '../../imgs/weather.jpg';
import schedule from '../../imgs/schedule.jpg';
import employee from '../../imgs/employee.jpg';
import social from '../../imgs/social.jpg';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Updated to 3 columns */
  grid-template-rows: repeat(3, 1fr); /* Updated to 3 rows */
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 20px auto; /* Updated margin value */
`;

const ProjectCard = styled.a`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function PortfolioPage() {
  const projects = [
    { title: 'Motivate Me', image: motivateMe, link: 'https://wobbledy.github.io/Motivate-Me/' },
    { title: 'Monthly Budget Planner', image: budgetPlanner, link: 'https://countzachula.herokuapp.com/' },
    { title: 'Just Another Text Editor', image: jate, link: 'https://github.com/wobbledy/text-editor' },
    { title: 'E-Commerce Backend Project', image: ecommerce, link: 'https://github.com/wobbledy/e-commerce-backend' },
    { title: 'Note Taker', image: notetaker, link: 'https://note-taker-zach.herokuapp.com/' },
    { title: 'Weather Dashboard', image: weather, link: 'https://wobbledy.github.io/weather-dashboard/' },
    { title: 'Work Day Scheduler', image: schedule, link: 'https://wobbledy.github.io/work-day-scheduler/' },
    { title: 'Employee Tracker CLI', image: employee, link: 'https://github.com/wobbledy/employee-tracker' },
    { title: 'Social Network API', image: social, link: 'https://github.com/wobbledy/social-network-api'},
    { title: 'Ink Watch', link: 'https://ink-watch.herokuapp.com/'},
  ];

  return (
    <PortfolioContainer>
      {projects.map((project, index) => (
        <ProjectCard href={project.link} key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectCard>
      ))}
    </PortfolioContainer>
  );
}
