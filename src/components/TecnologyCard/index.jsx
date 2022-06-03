import { Container } from "./styles"
import ForChangeModal from "../ModalForChange"

function TecnologyCard({tec}) {

  return <Container>

    <h5>{tec.title}</h5>
    <div>
      <h6>{tec.status} </h6>
      <ForChangeModal tec={tec}/>
    </div>

  </Container>
}

export default TecnologyCard


