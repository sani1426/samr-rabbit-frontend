import Navbar from "./Navbar"
import TopBar from "./TopBar"


const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <TopBar />
      <Navbar />
    </header>
  )
}

export default Header
