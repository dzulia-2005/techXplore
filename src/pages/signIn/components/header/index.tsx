import Logo from "../../../../assets/images/Logo-ka.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import bussinesLogo from "../../../../assets/images/business-logo.svg";


const Header = () => {
  return (
         <div className="text-[#fff] flex items-center  py-[30px] gap-[25%]">
            <div>
                <img className="h-8" src={Logo} alt="Logo" />
            </div>
            <div className="flex text-sm gap-7 items-center">
                <div>tbcbank.ge</div>
                <div>უსაფრთხოება და კონფიდენციალურობა</div>
                <div>დაგვიკავშირდი</div>
                <div className="flex gap-0.5 items-center" >
                    <FontAwesomeIcon icon={faGlobe}/>
                    ქარ
                </div>
                <div className="bg-[#40c1f1] w-[100px] h-[40px] rounded flex items-center gap-0.5 pl-2.5">
                    <img src={bussinesLogo} alt="bag" className="w-[14px]"/>
                    ბიზნესი
                </div>
            </div>
         </div>
  )
}


export default Header