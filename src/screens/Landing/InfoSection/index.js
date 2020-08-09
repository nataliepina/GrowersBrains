import React from 'react';
import greenhouseImg from '../assets/greenhouse.jpg';
import contestImg from '../assets/contest.jpg';
import rankingImg from '../assets/ranking.jpg';
import howToImg from '../assets/howTo.jpg';
import dailyGrowImg from '../assets/dailyGrow.jpg';
import bestReviewedImg from '../assets/bestReviewed.jpg';
import './style.scss';

const sectionOne = [
  {
    id: 1,
    title: 'Green House',
    description: 'A locker of all the plants a person is growing with data of the daily processes including time-lapse generators,',
    imageUrl: greenhouseImg
  },
  {
    id: 2,
    title: 'Contest',
    description: 'Daily, weekly and monthly competitions will be help for growers of various categories.',
    imageUrl: contestImg
  },
  {
    id: 3,
    title: 'Growers Ranking',
    description: 'Ranking of the best growers in the world, who can help with the one on one consulting.',
    imageUrl: rankingImg
  }
]

const sectionTwo = [
  {
    id: 1,
    title: 'How-To Articles From Top Growers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id ipsam. Quasi explicabo necessitatibus quas, neque id minus quibusdam itaque earum, placeat officiis ab corporis, consequuntur eius iste nulla illo',
    imageUrl: howToImg
  },
  {
    id: 2,
    title: 'Best Reviewed Products',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id ipsam. Quasi explicabo necessitatibus quas, neque id minus quibusdam itaque earum, placeat officiis ab corporis, consequuntur eius iste nulla illo',
    imageUrl: bestReviewedImg
  },
  {
    id: 3,
    title: 'Daily Grow Updates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id ipsam. Quasi explicabo necessitatibus quas, neque id minus quibusdam itaque earum, placeat officiis ab corporis, consequuntur eius iste nulla illo',
    imageUrl: dailyGrowImg
  }
]

export default() => {
  return (
    <>
      <section id="sectionOne">
        {sectionOne.map(item => <SectionOneItem key={item.id} {...item} />)}
      </section>
      <section id="sectionTwo" className="container">
        {sectionTwo.map(item => <SectionTwoItem key={item.id} {...item} />)}
      </section>
    </>
  );
}

const SectionOneItem = ({ title, description, imageUrl }) => (
  <div
    className="sectionOne-item"
    style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="card">
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <a href="#link" className="link">{`Learn More \u2192`}</a>
      </div>
    </div>
  </div>
);

const SectionTwoItem = ({ title, description, imageUrl }) => (
  <div className="sectionTwo-item">
    <div className="imgContainer">
      <div className='border' />
      <img src={imageUrl} alt="test" />
    </div>
    <div className="content-container">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  </div>
);
