import { useState } from "react";
import { MenuList } from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'
export const MenuItem = ({ item = [] }) => {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleDisplayChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
       [currentLabel]: !displayCurrentChildren[currentLabel]
    })
  }
  console.log(displayCurrentChildren[item.label]);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span onClick={()=>handleToggleDisplayChildren(item.label)}>{!displayCurrentChildren[item.label] ? <FaPlus color="#fff" size={25}/>  : <FaMinus color="#fff" size={25}/>}</span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
