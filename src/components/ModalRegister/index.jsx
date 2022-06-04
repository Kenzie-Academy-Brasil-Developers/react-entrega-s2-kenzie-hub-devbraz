import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

export default function RegisterModal({changeTecs, setChangeTecs, userLoged}) {

  const {register, handleSubmit} = useForm()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userToken = JSON.parse(localStorage.getItem('@Kenziehub:token'))
  const {id} = userLoged

  const getUser = () => {

    api.get(`/users/${id}`).then((res) => {
      localStorage.setItem('@Kenziehub:user', JSON.stringify(res.data))
      setChangeTecs(res.data.techs)
      
    })

    handleClose()
    
  }

  const onSubmitFunction = (data) => {

    api.post('/users/techs', data, {
      headers: {Authorization: `Bearer ${userToken}`}
    })
    .then((res) => {
      getUser()
    })
    .catch((err) => console.log(err) )
    
  }

  return (
    <div>
      <Button onClick={handleOpen} className='button-card' >+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <div>
            <h5>Cadastrar Tecnologia</h5>
          </div>
          <div className='div-contain'>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h6>Nome</h6>
              <input type="text" {...register('title')}/>
              <h6>Selecionar status</h6>
                <input list='status' placeholder='Status' {...register('status')}/>
              <datalist id="status" >
                <option value='Iniciante'  />
                <option value='Intermediário' />
                <option value='Avançado' />
              </datalist>
              <button type="submit">Cadastrar Tecnologia</button>
            </form>
          </div>
        </Container>
      </Modal>
    </div>
  );
}