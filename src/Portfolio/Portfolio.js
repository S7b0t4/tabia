import React from 'react';

import realEstate from "../Upload/real-estate.jpeg"
import restoran from "../Upload/restoran.jpeg"
import stepUp from "../Upload/stepUp.jpg"

import copy from 'clipboard-copy';

import telegram from "../img/telegram.png"
import main from "../img/main.png"
import github from "../img/github.png"

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          Посмотреть проект
        </a>
      </div>
    </div>
  );
};
const handleImageClick = (text) => {
  copy(text);
};



const DeveloperInfo = () => {
  return (
    <div className="developer-info">
      <h2>Привет, меня зовут Антон Паун</h2>
      <p>
        Я — начина́ющий веб-разработчик с фокусом на создание современных и креативных веб-сайтов. Мое портфолио представляет разнообразные проекты, отвечающие самым актуальным требованиям в области веб-технологий.
      </p>
      <p>
        Мои навыки включают в себя работу с HTML5, CSS3, JavaScript, Redux, Git, Github, Figma, Инструментов Google, а также использование фреймворка React. Я стремлюсь к постоянному обучению и следованию лучшим практикам разработки.
      </p>
      <div className='row_gap'>
        <a href={"https://github.com/S7b0t4"}><img
          className='img_link' 
          src={github} 
          /></a>
        <a><img
          className='img_link' 
          src={telegram}
          alt=""
          onClick={() => {handleImageClick("@S7b0t4")}}
          style={{ cursor: 'pointer' }}
          /></a>
        <a><img
          className='img_link' 
          src={main} 
          alt=""
          onClick={() => {handleImageClick("toni.paun.00@mail.ru")}}
          style={{ cursor: 'pointer' }}
          /></a>
      </div>
    </div>
  );
};

const Portfolio = () => {
		const projects = [
			{
				title: 'Магазин недвижимости',
				description: 'Разработка веб-платформы для поиска и просмотра недвижимости. Интеграция с картами, фильтрация по параметрам и удобный интерфейс для пользователей.',
				imageUrl: realEstate,
				projectLink: '#'
			},
			{
				title: 'Магазин по продаже обуви',
				description: 'Создание онлайн-магазина для продажи обуви. Широкий выбор товаров, удобная навигация и возможность ознакомиться с отзывами покупателей.',
				imageUrl: stepUp,
				projectLink: '#'
			},
			{
				title: 'Простое меню для ресторана',
				description: 'Разработка веб-сайта с простым меню для ресторана. Возможность просмотра блюд, их цен и основной информации. Пользователи могут сделать заказ онлайн.',
				imageUrl: restoran,
				projectLink: '#'
			}
		];
	

  return (
    <div className="portfolio">
      <DeveloperInfo />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;
