import { Container, Content } from "../Register/styles"
import { Redirect, useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api";
import { toast } from "react-toastify";


function Register({authenticated}) {

  const history = useHistory()

  const handleNavigation = (patch) => {
    return history.push(patch)
  }

  const onSubmitFunction = (data) => {
    delete data.passwordConfirm
    data.bio = 'teste'
    data.contact = 'teste'
    console.log(data)
    api.post('/users', data)
    .then((_) => {
      toast.success('Conta criada com sucesso!')
      return history.push('/')
    })
    .catch((err) => toast.error('Email já cadastrado') )
    
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório!')
      .matches(/^[A-Za-z ]*$/, 'Necessário apenas letras no nome'),
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório!'),
    password: yup
      .string()
      .min(8, 'Minimo 8 digitos')
      .required('Campo obrigatório!'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório!'),
    course_module: yup
    .string()
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
      <div>
        <h1>Kenzie Hub</h1>
        <button onClick={() => handleNavigation('/')} >Voltar</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Crie sua conta</h3>
        <h6>Rapido e grátis, vamos nessa</h6>
        <h5>Nome</h5>
        <input 
          type='text' 
          label='name' 
          placeholder='Digite aqui seu nome'
          name='name'
          {...register('name')} 
        />
        {errors.name?.message}
        <h5>Email</h5>
        <input 
          type='text' 
          label='email' 
          placeholder='Digite aqui seu email'
          name='email'
          {...register('email')} 
        />
        {errors.email?.message}
        <h5>Senha</h5>
        <input 
          type='password' 
          label='password' 
          placeholder='Digite aqui sua senha'
          name='password'
          {...register('password')}
        />
        {errors.password?.message}
        <h5>Confirmar Senha</h5>
        <input 
          type='password' 
          label='password confirm' 
          placeholder='Digite novamente sua senha'
          name='passwordConfirm'
          {...register('passwordConfirm')} 
        />
        {errors.passwordConfirm?.message}
        <h5>Selecionar o módulo</h5>
        <input list='modules' label='mod' name="course_module" placeholder='Selecionar Módulo' {...register('course_module')} />
        {errors.course_module?.message}
        <datalist id="modules">
          <option value='Primeiro módulo (Introdução ao Frontend)' />
          <option value='Segundo módulo (Frontend Avançado)' />
          <option value='Terceiro módulo (Introdução ao Backend)' />
          <option value='Quarto módulo (Backend Avançado)' />
        </datalist>
        <button type="submit"  >Cadastrar</button>
      </form>
    </Content>
  </Container>
  
}

export default Register