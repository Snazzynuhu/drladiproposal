import React from "react";
import Header from "../Header/Header";
import { FaMapMarkerAlt } from "react-icons/fa";
import WardLoko from "../assets/ward.png";
import "./WardStyle.css";
const Ward = () => {
  return (
    <>
      <Header />
      <div className="ward-page">
        <div className="map-container">
          <div className="wmap">
            <FaMapMarkerAlt className="map-marker" />
            <img src={WardLoko} alt="nasarawa-map" className="wnas-map" />
          </div>
        </div>
        <div className="warticle-container">
          <h2 className="section-heading">Loko</h2>
          <article className="article">
            <p>
              Education is the key to unlocking the potential of any society.
              Unfortunately, the state of education in the Loko Local Government
              Area (LGA) of Nasarawa State, Nigeria, is not yet up to standard.
              Despite some government initiatives to improve education in the
              area, there are still several challenges that need to be
              addressed.
            </p>
            <p>
              One of the significant challenges facing education in the Loko LGA
              is the shortage of qualified teachers, especially in rural areas.
              This situation has resulted in poor quality education, which
              affects the students' academic performance. Another critical
              factor affecting education in the Loko LGA is poverty. Many
              students from low-income families struggle to access basic
              amenities like electricity and water, which can affect their
              academic performance.
            </p>
            <p>
              Furthermore, the lack of basic infrastructure such as libraries,
              laboratories, and instructional materials is also a significant
              challenge facing education in the Loko LGA. The government needs
              to invest more in building and equipping schools with necessary
              infrastructure to improve the quality of education in the area.
            </p>
            <p>
              In addition to these challenges, environmental factors such as
              floods, droughts, and other natural disasters also affect
              education in the Loko LGA. The government needs to develop
              strategies to mitigate the impact of these environmental
              challenges on education and provide necessary support to affected
              communities.
            </p>
            <p>
              Despite these challenges, there is hope for education in the Loko
              LGA. With the government's increased investment in education, the
              recruitment and training of qualified teachers, the addressing of
              poverty and other socio-economic factors, the provision of
              necessary infrastructure, and strategies to mitigate environmental
              challenges, education can be transformed in the Loko LGA.
            </p>
          </article>
        </div>
      </div>
      <div className="bottom-content">
      <p>
             <span style={{fontWeight: 'bold'}}> Primary Education in Loko</span> <br/>
             LGA Primary education is the foundation
              of any educational system, and it is essential to lay a solid
              foundation at this level. The Loko LGA has a total of 60 primary
              schools, with an estimated student population of over 25,000. The
              state government has made efforts to provide basic infrastructure
              such as classrooms and furniture. However, there is still a need
              for more schools in some areas of the LGA, especially in rural
              communities. Furthermore, the quality of education in primary
              schools in Loko LGA is a major concern. Most primary schools lack
              qualified teachers, and the few available teachers are overwhelmed
              with the number of students. The situation is worse in rural
              communities where teachers are unwilling to work due to poor
              incentives and a lack of basic amenities like electricity and
              water. The government needs to address these challenges by
              recruiting and training qualified teachers, providing incentives
              to encourage teachers to work in rural areas, and providing basic
              amenities in schools.<br/> <br/> 
              <span style={{fontWeight: 'bold'}}> Secondary Education in Loko LGA </span><br/> The Loko LGA
              has 13 government-owned secondary schools and three privately
              owned schools. However, the quality of education in most secondary
              schools is below standard. The reasons for this are similar to
              those of primary schools, with a shortage of qualified teachers
              being a significant challenge. In addition, most secondary schools
              lack basic infrastructure, including laboratories, libraries, and
              other instructional materials. The government needs to make more
              efforts to provide adequate funding for secondary education in the
              Loko LGA. They should also consider partnering with private
              individuals and organizations to provide more funding and support
              for secondary schools. This will help to improve the quality of
              education in secondary schools, attract qualified teachers, and
              provide necessary infrastructure. <br/> <br/>
              <span style={{fontWeight: 'bold'}}>Tertiary Education in Loko LGA </span><br/> 
              The Loko LGA does not have any tertiary institutions. Students
              from the LGA must travel to other parts of the state or country to
              pursue tertiary education. This can be a significant challenge for
              students from low-income families who cannot afford the cost of
              education outside the LGA. The government can address this
              challenge by providing scholarships and grants to students from
              the Loko LGA who want to pursue higher education.
            </p>
            <p>
              In conclusion, education is the foundation for any society's
              development. The challenges facing education in the Loko LGA are
              daunting, but with the right investment, commitment, and
              innovation, they can be overcome. Education in the Loko LGA can be
              transformed into a system that promotes excellence, inspires
              creativity, and unlocks the potential of the students, leading to
              a brighter future for the Loko LGA and Nasarawa State as a whole.
            </p>
      </div>
    </>
  );
};

export default Ward;
