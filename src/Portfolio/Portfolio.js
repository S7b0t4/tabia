import React from 'react';

import realEstate from "../Upload/real-estate.jpeg"
import restoran from "../Upload/restoran.jpeg"
import stepUp from "../Upload/stepUp.jpg"

import Avatar from "../Upload/avatar.svg"

import copy from 'clipboard-copy';

import telegram from "../img/telegram.png"
import main from "../img/main.png"
import github from "../img/github.png"

import 'animate.css';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card animate__fadeInUp">
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
        <a href={"https://github.com/S7b0t4"}><img
          className='img_link' 
          src={github}
          alt="github"
          />
        </a>
        <a href="https://t.me/S7b0t4">
          <img
            className='img_link' 
            src={telegram}
            alt="telegram"
            style={{ cursor: 'pointer' }}
          />
        </a>
        <img
            className='img_link' 
            src={main} 
            alt="mail"
            onClick={() => {handleImageClick("toni.paun.00@mail.ru")}}
            style={{ cursor: 'pointer' }}
          />
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
