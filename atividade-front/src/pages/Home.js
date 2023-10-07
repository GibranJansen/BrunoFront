import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div>
      <h3>Inicio</h3>
      <Button onClick={handleLogout} variant="contained"> Desconectar </Button>
    </div>
  )
}

export default Home