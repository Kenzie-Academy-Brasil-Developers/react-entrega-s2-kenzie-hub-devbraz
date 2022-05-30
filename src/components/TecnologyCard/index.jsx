import { Container } from "./styles"
import ForChangeModal from "../ModalForChange"

function TecnologyCard({dataUser, setDataUser, setChangeTecs, changeTecs}) {



  return <Container>

    <h5>{changeTecs.title}</h5>
    <div>
      <h6>{changeTecs.status} </h6>
      <ForChangeModal setChangeTecs={setChangeTecs} changeTecs={changeTecs}/>
    </div>

  </Container>
}

export default TecnologyCard


