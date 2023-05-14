import React,{useState} from 'react';
import { FaHome, FaGlobe, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HeaderStyle.css'
import coatOfArm from '../assets/Coat-of-Arms-of-Nigeria.png';
import {WARDS, EXPLOREDATA, REVIEWPOLICIES} from './wards'

const Header: React.FC = () => {
  const [showWards, setShowWards] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const handlePoliciesChange =()=>{
    setShowPolicies(!showPolicies)
    setShowExplore(false)
    setShowWards(false)
  }
  const handleWardsChange =()=>{
    setShowWards(!showWards)
    setShowPolicies(false)
    setShowExplore(false)
  }
  const handleExploreChange =()=>{
    setShowExplore(!showExplore)
    setShowWards(false)
    setShowPolicies(false)
  }
 
  const goHome =()=>{
    setShowExplore(false)
    setShowWards(false)
    setShowPolicies(false)
  }
 
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={coatOfArm} alt="OECD" className="header__logo-img" />
        </Link>
        <div className="header__text">
          <h2 className="header__text-title">
            <Link to="/" className="header__text-link">
              <span className="header__text-title-bold">NLRM Geo-Education</span>
            </Link>
          </h2>
          <p className="header__text-subtitle">
          Nasarawa State Education: Key Information and Statistics
          </p>
        </div>
        {/* Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link"  onClick={goHome}>
                <FaHome className="header__nav-icon" />
                <span className="header__nav-link-text">Home</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to='/' className="header__nav-link"  onClick={handleWardsChange}>
                <FaGlobe className="header__nav-icon" />
                <span className="header__nav-link-text">
                  Analyse by ward
                </span>
              </Link>
            </li>
            {showWards && (
              <div className={`wards ${showWards ? 'show' : ''}`}>
          <ul className='allwards'>
            {WARDS.map((ward) => (
              <Link to={'/ward'} key={ward} className='ward-link'>{ward}</Link>
              ))}
          </ul>
              </div>
        )}
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link"  onClick={handleExploreChange}>
                <FaSearch className="header__nav-icon" />
                <span className="header__nav-link-text">Explore data</span>
              </Link>
            </li>
            {showExplore && (
              <div className={`explore ${showExplore ? 'show' : ''}`}>
          <ul className='allexplore'>
            {EXPLOREDATA.map((explore) => (
              <li key={explore}>{explore}</li>
              ))}
          </ul>
              </div>
        )}
            <li className="header__nav-item">
              <Link
                to="/"
              className="header__nav-link"  onClick={handlePoliciesChange}
              >
                Review education policies
              </Link>
            </li>
            {showPolicies && (
              <div className={`policies ${showPolicies ? 'show' : ''}`}>
          <ul className='allpolicies'>
            {REVIEWPOLICIES.map((policies) => (
              <li key={policies}>{policies}</li>
              ))}
          </ul>
              </div>
        )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
