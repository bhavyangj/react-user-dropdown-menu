import React, { useEffect, useRef, useState } from 'react'
import './usermenu.css';
import { AnimatePresence, motion } from 'framer-motion';
import useLongPress from './useLongPress';


const UserMenu = ({ user }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [item, setItem] = useState("regular");
  const menuRef = useRef();
  // useEffect(() => {
  //   const getClickOutside = (e) => {
  //     if (isMenu && e.target !== menuRef.current) {
  //       setIsMenu(false);
  //     }
  //   }
  //   window.addEventListener('click', getClickOutside);
  //   return () => {
  //     window.removeEventListener('click', getClickOutside);
  //   }
  // }, [isMenu]);

  const [longPressCount, setlongPressCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const onLongPress = () => {
    console.log('longpress is triggered');
    setlongPressCount(longPressCount + 1)
    setIsMenu(true);
  };

  const onClick = () => {
    console.log('click is triggered')
    setClickCount(clickCount + 1)
    setIsMenu(false);
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);


  return (
    <li className='user-menu-container'>
      {item}
      <div className={isMenu ? "user-data active" : "user-data"}
        {...longPressEvent}>
        <img src={user.image} alt="user" className='rounded-image' />
        <AnimatePresence>
          {isMenu && (
            <motion.ul
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%", transition: { duration: "0.15" } }}
              transition={{ type: "spring", stiffness: "100", duration: "0.05" }}
              className="user-menu"
            >
              <li onClick={() => setItem("Regular")} style={{ color: `${item === "Regular" ? 'red' : ''}` }}>Regular</li>
              <li onClick={() => setItem("Emergency")} style={{ color: `${item === "Emergency" ? 'red' : ''}` }}>Emergency</li>
              <li onClick={() => setItem("Urgent")} style={{ color: `${item === "Urgent" ? 'red' : ''}` }}>Urgent</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </li>
  )
}

export default UserMenu;