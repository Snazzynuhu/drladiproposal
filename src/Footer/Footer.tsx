import React from 'react'
import './FooterStyle.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer">
          <p>Research proposal By: Rakiat Haruna Ladi</p>
          <p>&copy; {currentYear}. All rights reserved.</p>
        </div>
      );
}

export default Footer