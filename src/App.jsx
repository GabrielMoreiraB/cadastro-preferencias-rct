import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [formEnviado, setFormEnviado] = useState([])
  const [className, setClassName] = useState({
    class1: "show",
    class2: "hide",
  });

  let formShow = true;

  const changeShow = () => {
    if (formShow) {
      formShow == false;
      setClassName({class1: "hide",class2: "show"})
    } else {
      formShow == true;
      setClassName({class1: "show",class2: "hide"});
      setFormEnviado([])
    }
  }
  const enviado = (e) =>{
    setFormEnviado([e])
  
  } 

  return (
    <div className="App">
      <div className={className.class1}>
        <div className='header'>
          <img src="img/G.png" alt="" />
          <h1>Eii! Me Ajude a Melhorar..</h1>
        </div>
        <p>Esse é um formulario de preferências para recomendarmos o melhor para você!</p>
        <Form
          formularioEnviado={envio => enviado(envio)}
          changeShow={changeShow}
        />
      </div>

      <div  className={className.class2}>
        <div className='header'>
          <img src="img/G.png" alt="" />
          <h1>Obrigado Por Contribuir!</h1>
        </div>
        <p>Com essas respostas podemos entender melhor oque você gosta e fazer recomendações mais acertivas.</p>
      
        {formEnviado[0] ? <p>
        Nome: {formEnviado[0].nome} <br />
        Idade: {formEnviado[0].idade}<br />
        Genero: {formEnviado[0].genero}<br />
        Email: {formEnviado[0].email}<br />
        Cpf: {formEnviado[0].cpf}<br />
        Gênero favorito: {formEnviado[0].genf1}<br />
        Gênero favorito 2: {formEnviado[0].genf2}<br />
        Gênero favorito 3: {formEnviado[0].genf3}<br />
        preferencia: {formEnviado[0].preferencia}<br />
      </p> : ''}
      <button className='reload' onClick={()=> location.reload()}>Refazer o Questionário</button>
      </div>
    </div>
  )
}

export default App
