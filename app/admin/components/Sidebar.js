
"use client"; 
import React from "react";
import { FaBars, FaTimes, FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaChartLine, FaCog } from "react-icons/fa";
import styles from "../../../styles/admin/Adminsidebar.module.css"; 

const Sidebar = ({ isOpen, toggleSidebar, setCurrentSection }) => {
  return (
    
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${!isOpen && styles.hidden}`}>
          Admin
        </h1> 
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <nav className={styles.nav}>
        <div onClick={() => setCurrentSection('Dashboard')} className={styles.navItem}>
          <FaTachometerAlt size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Dashboard
          </span>
        </div>
        <div onClick={() => setCurrentSection('Products')} className={styles.navItem}>
          <FaBoxOpen size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Products
          </span>
        </div>
        <div onClick={() => setCurrentSection('Orders')} className={styles.navItem}>
          <FaShoppingCart size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Orders
          </span>
        </div>
        <div onClick={() => setCurrentSection('Categories')} className={styles.navItem}>
          <FaChartLine size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Categories
          </span>
        </div>

        <div onClick={() => setCurrentSection('Settings')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Settings
          </span>
        </div>

        <div onClick={() => setCurrentSection('Users')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            Users
          </span>
        </div>

        <div onClick={() => setCurrentSection('Blog')} className={styles.navItem}>
          <FaCog size={20} />
          <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
            blog
          </span>
        </div>

       

      <div onClick={() => setCurrentSection('Chat')} className={styles.navItem}>
      <FaCog size={20} />
      <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
     Chats
      </span>
    </div>


    <div onClick={() => setCurrentSection('Components')} className={styles.navItem}>
    <FaCog size={20} />
    <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
    Notifications
    </span>
  </div>

  <div onClick={() => setCurrentSection('Reviews')} className={styles.navItem}>
    <FaCog size={20} />
    <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
    Reviews
    </span>
  </div>


    <div onClick={() => setCurrentSection('Pages')} className={styles.navItem}>
      <FaCog size={20} />
      <span className={`${styles.navIcon} ${!isOpen && styles.hidden}`}>
     Page Settings 
      </span> 
    </div>



    


      </nav>
    </div>


 

 
  );
};
 
export default Sidebar;


   {/* <div className={`${styles.sidebarContainertop} ${isOpen ? styles.sidebarOpentop : styles.sidebarClosedtop}`}>
      <div className={styles.headertop}>
        <h1 className={`${styles.titletop} ${!isOpen && styles.hiddentop}`}>
          Admin
        </h1> 

        <button onClick={toggleSidebar} className={styles.toggleButtontop}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <h1 className={`${styles.titletop} ${!isOpen && styles.hiddentop}`}>
          Admin
        </h1> 
        <h1 className={`${styles.titletop} ${!isOpen && styles.hiddentop}`}>
          Admin
        </h1> 
        <h1 className={`${styles.titletop} ${!isOpen && styles.hiddentop}`}>
          Admin
        </h1> 

      </div>

      <nav className={styles.nav2}>
        <div onClick={() => setCurrentSection('Dashboard')} className={styles.navItem2}>
          <FaTachometerAlt size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Dashboard
          </span>
        </div>
        <div onClick={() => setCurrentSection('Products')} className={styles.navItem2}>
          <FaBoxOpen size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Products
          </span>
        </div>
        <div onClick={() => setCurrentSection('Orders')} className={styles.navItem2}>
          <FaShoppingCart size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Orders
          </span>
        </div>
        <div onClick={() => setCurrentSection('Categories')} className={styles.navItem2}>
          <FaChartLine size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Categories
          </span>
        </div>

        <div onClick={() => setCurrentSection('Settings')} className={styles.navItem2}>
          <FaCog size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Settings
          </span>
        </div>

        <div onClick={() => setCurrentSection('Users')} className={styles.navItem2}>
          <FaCog size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            Users
          </span>
        </div>

        <div onClick={() => setCurrentSection('Blog')} className={styles.navItem2}>
          <FaCog size={20} />
          <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
            blog
          </span>
        </div>

       

      <div onClick={() => setCurrentSection('Chat')} className={styles.navItem2}>
      <FaCog size={20} />
      <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
     Chats
      </span>
    </div>


    <div onClick={() => setCurrentSection('Components')} className={styles.navItem2}>
    <FaCog size={20} />
    <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
    Notifications
    </span>
  </div>

  <div onClick={() => setCurrentSection('Reviews')} className={styles.navItem2}>
    <FaCog size={20} />
    <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
    Reviews
    </span>
  </div>


    <div onClick={() => setCurrentSection('Page')} className={styles.navItem2}>
      <FaCog size={20} />
      <span className={`${styles.navIcon2} ${!isOpen && styles.hiddentop}`}>
     Page Settings 
      </span>
    </div>



    


      </nav>
    </div> */}
