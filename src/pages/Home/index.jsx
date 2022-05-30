import { Container, Content } from "./styles"
import { Redirect, useHistory } from "react-router-dom"
import TecnologyCard from "../../components/TecnologyCard"
import RegisterModal from "../../components/ModalRegister"

function Home({authenticated, dataUser, setDataUser}) {

  const history = useHistory()
  const [changeTecs, setChangeTecs] = useState([])
  const userLoged = JSON.parse(localStorage.getItem('@Kenziehub:user'))

  if (!authenticated) {
    return <Redirect to='/'/>
  }

const logOut = () => {
  localStorage.clear()
  return history.push('/')
}

  return <Container>
    <Content>

      <nav>
        <h2>Kenzie Hub</h2>
        <button  onClick={(logOut)} >Sair</button>
      </nav>

      <header>
        <h3>Olá, {userLoged.name}</h3>
        <h6>{userLoged.course_module}</h6>
      </header>

      <div>
        <h5>Tecnologias</h5>
        <RegisterModal/>
      </div>

      <main className='button-card'>

        {changeTecs.map((tec, index) => {
					return <TecnologyCard className='button-card' dataUser={dataUser} setDataUser={setDataUser} setChangeTecs={setChangeTecs} changeTecs={changeTecs}/>
				})}

      </main>
  
    </Content>
  </Container>
}

export default Home