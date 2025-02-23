import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/images/Logo-ka.svg";
import avatar from "../../../assets/images/avatar.png";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Header:React.FC = () => {
    const HandleLogOut = ()=> {
        localStorage.removeItem("accessToken");
         window.location.href = "/";
    } 

  return (
         <div className="fixed w-full z-10">
           <header className="px-7 bg-[#40c1f1] w-full h-14 text-[#ffff] flex items-center justify-between">
                   <div>
                       <img src={Logo} alt="logo" className="h-8" />
                   </div>
                   <div className="flex items-center gap-4">
                       <img src={avatar} alt="avatar" className="rounded-[50%] w-[34px]"/>
                       <FontAwesomeIcon 
                            icon={faArrowRightFromBracket} style={{ color: "#ffffff",cursor:"pointer" }} 
                            onClick={HandleLogOut}
                       />
                   </div>
               </header>
               <div className="w-full text-[#ffff] bg-[#333333f2] h-10 px-7 flex items-center justify-between">
               
                   <div className="flex items-center gap-3">
                       <NavLink to={"/home"} className={({ isActive }) =>
                            isActive 
                            ? 'text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md' 
                            : 'text-white hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md' 
                            }>მთავარი
                        </NavLink>
                       <div className="hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md">ჩემი პროდუქტები</div>
                       <div className="hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md">გადარიცხვები</div>
                       <div className="hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md">ტრანზაქციები</div>
                       <div className="hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md">ჩემი ფინანსები</div>
                       <div className="hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md">პროდუქტების აქტივაცია</div>
                       <NavLink to={"/assistant"}  className={({ isActive }) =>
                            isActive 
                            ? 'text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md' 
                            : 'text-white hover:text-[#40c1f1] cursor-pointer px-2 py-1 rounded-md' 
                            }>
                            ასისტენტი
                       </NavLink>
                   </div>
   
                   <div className="flex gap-1.5">
                       <FontAwesomeIcon icon={faCommentDots} className="text-white text-2xl" />
                       <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
                       <FontAwesomeIcon icon={faGear} className="text-white text-2xl" />
                   </div>
               
               </div>
          </div>
  )
}

export default Header