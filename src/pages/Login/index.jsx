import { Container, Content } from "../Login/styles"
import { Redirect, useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({authenticated, setAuthenticated}) {

  const history = useHistory()

  const handleNavigation = (patch) => {
    return history.push(patch)
  }

  const onSubmitFunction = (data) => {

    api.post('/sessions', data)
    .then((res) => {
      const {token, user} = res.data
      localStorage.setItem('@Kenziehub:token', JSON.stringify(token))
      localStorage.setItem('@Kenziehub:user', JSON.stringify(user))
      setAuthenticated(true)
      return history.push('/home')
    }).catch((err) => toast.error('Email ou senha inválido') )
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório!'),
    password: yup
      .string()
      .min(8, 'Minimo 8 digitos')
      .required('Campo obrigatório!'),
  })

  const { 
    register, 
    handleSubmit, 
    formState:{errors} 
  } = useForm({
    resolver: yupResolver(schema)
  })

  if (authenticated) {
    return <Redirect to='/home'/>
  }

  return <Container>
    <Content>
      <h1>Kenzie Hub</h1>
      <div>
        <h5>Login</h5>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Email</p>
          <input type="text" placeholder="Digite aqui seu Email"  {...register('email')}/>
          {errors.email?.message}
          <p>Senha</p>
          <input type="password" placeholder="Digite aqui sua senha"  {...register('password')} />
          {errors.password?.message}
          <button type="submit">Entrar</button>
        </form>
        <h6>Ainda não possui conta?</h6>
        <button className="button-register" onClick={() => handleNavigation('/Register')}>Cadastre-se</button>
      </div>
    </Content>
  </Container>
  
}

export default Login