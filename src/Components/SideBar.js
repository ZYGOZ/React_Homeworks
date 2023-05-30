import React, { useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faCogs, faDatabase, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faCode} />
        <span>My App</span>
      </div>
      <div className="sidebar-menu">
        <div className={`sidebar-menu-item ${isCategorySelected('basics') ? 'active' : ''}`} onClick={() => toggleCategory('basics')}>
          <FontAwesomeIcon icon={faHome} />
          <span>C# Basics</span>
          <FontAwesomeIcon icon={isCategorySelected('basics') ? faChevronUp : faChevronDown} />
        </div>
        {isCategorySelected('basics') && (
          <div className="sidebar-submenu">
            <div className="sidebar-submenu-item">Variables</div>
            <div className="sidebar-submenu-item">Control Flow</div>
            <div className="sidebar-submenu-item">Functions</div>
          </div>
        )}
        <div className={`sidebar-menu-item ${isCategorySelected('oop') ? 'active' : ''}`} onClick={() => toggleCategory('oop')}>
          <FontAwesomeIcon icon={faDatabase} />
          <span>C# OOP</span>
          <FontAwesomeIcon icon={isCategorySelected('oop') ? faChevronUp : faChevronDown} />
        </div>
        {isCategorySelected('oop') && (
          <div className="sidebar-submenu">
            <div className="sidebar-submenu-item">Classes</div>
            <div className="sidebar-submenu-item">Inheritance</div>
            <div className="sidebar-submenu-item">Polymorphism</div>
          </div>
        )}
        <div className={`sidebar-menu-item ${isCategorySelected('advanced') ? 'active' : ''}`} onClick={() => toggleCategory('advanced')}>
          <FontAwesomeIcon icon={faCogs} />
          <span>C# Advanced</span>
          <FontAwesomeIcon icon={isCategorySelected('advanced') ? faChevronUp : faChevronDown} />
        </div>
        {isCategorySelected('advanced') && (
          <div className="sidebar-submenu">
            <div className="sidebar-submenu-item">Delegates</div>
            <div className="sidebar-submenu-item">Events</div>
            <div className="sidebar-submenu-item">Generics</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
