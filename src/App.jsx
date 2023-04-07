import { useState } from 'react'

import './App.css'
import Form from './components/Form'

function App() {
  let initial = {
    nome: "",
    idade: "",
    genero: "",
    email: "",
    cpf: "",
    genf1: "",
    genf2: "",
    genf3: "",
    preferencia: ""
  }
  const [formEnviado, setFormEnviado] = useState(initial)
  const [className, setClassName] = useState({
    class1: "show",
    class2: "hide",
  });

  let formShow = true;

  const changeShow = () => {
    if (formShow) {
      formShow == false;
      setClassName({
        class1: "hide",
        class2: "show",
      })
    } else {
      formShow = true;
      setClassName({
        class1: "show",
        class2: "hide",
      });
    }
  }
  const enviado = (e) =>{
    setFormEnviado([e])
    
    console.log(formEnviado)
  } 

  return (
    <div className="App">
      <div /* className={className.class1} */>
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

      <div /* className={className.class2} */>
        <div className='header'>
          <img src="img/G.png" alt="" />
          <h1>Obrigado Por Contribuir!</h1>
        </div>
        <p>Com essas respostas podemos entender melhor oque você gosta e fazer recomendações mais acertivas.</p>
      
      <p>
        nome: {formEnviado.nome} <br />
        idade: {formEnviado.idade}<br />
        genero: {formEnviado.genero}<br />
        email: {formEnviado.email}<br />
        cpf: {formEnviado.cpf}<br />
        genf1: {formEnviado.genf1}<br />
        genf2: {formEnviado.genf2}<br />
        genf3: {formEnviado.genf3}<br />
        preferencia: {formEnviado.preferencia}<br />
      </p>
      </div>
    </div>
  )
}

export default App
