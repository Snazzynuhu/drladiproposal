import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HomePage.css'
import NasarawaMap from '../assets/the-map-of-Nasarawa-State-showing-Awe-town-Source-wwwgooglecom.png'
import PresenterPic from '../assets/rakiatladi.jpg'
import BookPic from '../assets/books.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="map-container">
        <h2 className="section-heading">Map of Nasarawa State</h2>
        <div className="map">
          <FaMapMarkerAlt className="map-marker" />
          <img src={NasarawaMap} alt="nasarawa-map" className="nas-map" />
          <div className="profile-container">
          <img src={PresenterPic} alt="presenterpic" className="presenterpic" />
          <img src={BookPic} alt="books" className="book" />

          </div>
        </div>
      </div>
      <div className="article-container">
        <h2 className="section-heading">Education in Nasarawa State</h2>
        <article className="article">
          <p>
            Nasarawa State, located in North-Central Nigeria, has a population of approximately 2 million people and is home to several ethnic groups. The state is known for its natural resources, including fertile land, abundant mineral resources, and tourist attractions such as the Farin Ruwa Falls and the Akwanga Game Reserve.
          </p>
          <p>
            Despite these resources, the quality of education in Nasarawa State has been affected by various factors such as government initiative, quality and number of teachers, social economy status, infrastructure, scholarship, environmental challenges, and performance level. The state government has made some efforts to address these challenges, but there is still much work to be done to improve the quality of education and provide more opportunities for students.
          </p>
          <p>
            One of the major challenges facing education in Nasarawa State is the shortage of qualified and competent teachers. Many teachers are untrained or undertrained, and there are not enough teachers to meet the needs of the growing population. This has led to a decline in the quality of education, particularly in rural areas where there are fewer teachers. In addition, many teachers are poorly paid and lack motivation, which further impacts the quality of education.
          </p>
          <p>
            Another issue is the lack of adequate infrastructure in many schools. This includes insufficient classroom space, poor sanitation facilities, and inadequate teaching materials. These factors have a negative impact on the learning environment and the quality of education that students receive. In some cases, students are forced to learn under trees or in dilapidated buildings that are not conducive to learning.
          </p>
          <p>
            Additionally, the socio-economic status of many families in the state has a significant impact on the education of their children. Many families cannot afford to send their children to school, and those who do often struggle to pay for school fees, uniforms, and other necessary expenses. This can lead to a high dropout rate and lower enrolment rates in schools. In addition, some families are reluctant to send their daughters to school, which further exacerbates gender inequality in education.
          </p>
          <p>
            To address these challenges, the government needs to take concrete steps to improve the quality of education in the state. This includes investing in the training and recruitment of qualified teachers, providing adequate infrastructure and teaching materials, and increasing access to scholarships and other financial assistance programs. By doing so, the government can help ensure that all children in Nasarawa State have access to quality education and the opportunity to succeed in life.
          </p>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
