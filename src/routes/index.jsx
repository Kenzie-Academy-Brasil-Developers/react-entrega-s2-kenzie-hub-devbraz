import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useState, useEffect } from 'react'

function Routes({dataUser, setDataUser}) {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@Kenziehub:token'))

    if (token) {
      return setAuthenticated(true)
    }
  },[authenticated])

  return (

    <Switch>

      <Route exact path={'/'}>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path={'/register'}>
        <Register authenticated={authenticated}/>
      </Route>
      <Route path={'/home'}>
        <Home authenticated={authenticated} dataUser={dataUser} setDataUser={setDataUser}/>
      </Route>

    </Switch>

  )
  
}

export default Routes
