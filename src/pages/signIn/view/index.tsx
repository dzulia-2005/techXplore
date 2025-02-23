import Header from "../components/header"
import LoginCard from "../components/logInCard"


const LogIn = () => {
  return (
    <div className="w-full h-screen bg-[url('/src/assets/images/tbc-login-min.svg')] bg-cover bg-no-repeat px-12">
        <Header/>
        <LoginCard/>
    </div>
  )
}

export default LogIn