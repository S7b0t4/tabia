import React from 'react';

import realEstate from "../Upload/real-estate.jpeg"
import restoran from "../Upload/restoran.jpeg"
import stepUp from "../Upload/stepUp.jpg"

import Avatar from "../Upload/avatar.svg"

import telegram from "../img/telegram.png"
import github from "../img/github.png"

import 'animate.css';

const ProjectCard = ({ title, description, imageUrl, projectLink, projectLinkGit }) => {
  return (
    <div className="project-card animate__fadeInUp">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className='link_row'>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Посмотреть проект
          </a>
          <a href={projectLinkGit} target="_blank" rel="noopener noreferrer" className="project-link-git">
            Посмотреть проект на github
          </a>
        </div>
      </div>
    </div>
  );
};



const DeveloperInfo = () => {
  return (
    <div className="developer_info">
      <div className='border'>
        <div className='avatar_block animate__backInDown'>
          <img src={Avatar} alt="Avatar" className='avatar'/>
        </div>
      </div>
      <div className='text_info'>
        <div className='cool_text animate__pulse'>Привет, меня зовут S7b0t4</div>
        <div>
          Web - developer
        </div>
        <div>
          Entry level (Начального уровня)
        </div>
        <div>
          Владею - Стеком MERN и всём что близко к пониманию
        </div>
        <div>
          Вы можете попросить или заказать у меня сайт Простого/Среднего уровня по ссылкам
        </div>
      </div>
      <div className='row_gap'>
        <a href={"https://github.com/S7b0t4"} className='img_link' >
          <img
          className='img' 
          src={github}
          alt="github"
          />
        </a>
        <a href={"https://t.me/S7b0t4"} className='img_link' >
          <img
            className='img' 
            src={telegram}
            alt="telegram"
            style={{ cursor: 'pointer' }}
          />
        </a>
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
				projectLinkGit: 'https://github.com/S7b0t4/real_estate',
        projectLink:"https://s7b0t4-real-estate.netlify.app"

			},
			{
				title: 'Меню для ресторана',
				description: 'Разработка веб-сайта с простым меню для ресторана. Возможность просмотра блюд, их цен и основной информации. Пользователи могут сделать заказ онлайн.',
				imageUrl: restoran,
				projectLinkGit: 'https://github.com/S7b0t4/Restoran',
        projectLink:"https://s7b0t4-restoran.netlify.app/"
			},
      {
				title: 'Магазин по продаже обуви',
				description: 'Создание онлайн-магазина для продажи обуви. Широкий выбор товаров, удобная навигация и возможность ознакомиться с отзывами покупателей.',
				imageUrl: stepUp,
				projectLinkGit: '#',
        projectLink:"#"
			},
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
          projectLinkGit={project.projectLinkGit}
        />
      ))}
    </div>
  );
};

export default Portfolio;
