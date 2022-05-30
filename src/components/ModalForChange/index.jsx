import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import api from "../../services/api";
import edit from './edit.png'

export default function ForChangeModal({setChangeTecs}) {

  const {register, handleSubmit} = useForm()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const onSubmitFunction = (data) => {

    console.log(data)
    setChangeTecs(data)
    api.put('/users/works/:work_id', data)
    .then((_) => { })
    
  }

  const deleteFunction = (data) => {

    console.log(data)
    api.delete('/users/works/:work_id', data)
    .then((_) => { })
    
  }

  return (
    <>
      <button onClick={handleOpen} > <img src={edit} alt="img"/> </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <div>
            <h5>Tecnologia Detalhes</h5>
          </div>
          <div className='div-contain'>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h6>Nome do projeto</h6>
              <input type="text" {...register('title')} />
              <h6>Status</h6>
              <input list='status' {...register('status')}/>
              <datalist id="status" >
                <option value='Iniciante'  />
                <option value='Intermediário' />
                <option value='Avançado' />
              </datalist>
              <button type="submit">Salvar alterações</button>
              <button onClick={deleteFunction} >Excluir</button>
            </form>
          </div>
        </Container>
      </Modal>
    </>
  );
}