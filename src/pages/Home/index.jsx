import { Container, Content } from "./styles"
import { Redirect, useHistory } from "react-router-dom"
import TecnologyCard from "../../components/TecnologyCard"
import RegisterModal from "../../components/ModalRegister"
import { useState } from "react"
import api from "../../services/api";

function Home({ authenticated, setAuthenticated }) {

  const history = useHistory()
  const [changeTecs, setChangeTecs] = useState([])
  const userLoged = JSON.parse(localStorage.getItem('@Kenziehub:user'))
  const { id } = userLoged

  api.get(`/users/${id}`).then((res) => {
    localStorage.setItem('@Kenziehub:user', JSON.stringify(res.data))
    setChangeTecs(res.data.techs)
  }).catch((err) => console.log(err))

  if (!authenticated) {
    return <Redirect to='/' />
  }

  const logOut = () => {
    localStorage.clear()
    setAuthenticated(false)
    return history.push('/')
  }

  return <Container>
    <Content>
      <nav>
        <h2>Kenzie Hub</h2>
        <button onClick={logOut} >Sair</button>
      </nav>

      <header>
        <h3>Olá, {userLoged.name}</h3>
        <h6>{userLoged.course_module}</h6>
      </header>

      <div>
        <h5>Tecnologias</h5>
        <RegisterModal changeTecs={changeTecs} setChangeTecs={setChangeTecs} userLoged={userLoged} />
      </div>

      <main className='button-card'>

        {changeTecs.map((tec, index) => {
          return <TecnologyCard key={index} className='button-card' tec={tec} setChangeTecs={setChangeTecs} />
        })}

      </main>
    </Content>
  </Container>
}

export default Home