import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Form.css';
import { useState } from "react";

const Form = ({formularioEnviado, changeShow}) => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [genf1, setGenf1] = useState('');
    const [genf2, setGenf2] = useState('');
    const [genf3, setGenf3] = useState('');
    const [preferencia, setPreferencia] = useState('');
    

    const itens = ['Preferencias', 'Filmes Curtos', 'Filmes Longos', 'Mini Séries', 'Séries']

    const aoSalvar = (e) => {
        e.preventDefault();

        formularioEnviado([{
            nome,
            idade,
            genero,
            email,
            cpf,
            genf1,
            genf2,
            genf3,
            preferencia,
        }]);
        changeShow()
        setNome("")
        setIdade("")
        setGenero("")
        setEmail("")
        setCpf("")
        setGenf1("")
        setGenf2("")
        setGenf3("")
        setPreferencia("")
    }

    return (
        <div className='formulario'>
            <form onSubmit={aoSalvar} >
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Idade"
                    type="number"
                    placeholder="Digite sua idade"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Genero"
                    type="text"
                    placeholder="Digite seu Genero"
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu Email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="CPF"
                    type="number"
                    placeholder="Digite seu CPF"
                    valor={cpf}
                    aoAlterado={valor => setCpf(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Gênero favorito de filme ou série"
                    type="text"
                    placeholder="ex: Ficção"
                    valor={genf1}
                    aoAlterado={valor => setGenf1(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Segundo gênero favorito de filme ou série"
                    type="text"
                    placeholder="ex: Terror"
                    valor={genf2}
                    aoAlterado={valor => setGenf2(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Terceiro gênero favorito de filme ou série"
                    type="text"
                    placeholder="ex: Romance"
                    valor={genf3}
                    aoAlterado={valor => setGenf3(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Preferencia"
                    itens={itens}
                    value={preferencia}
                    aoAlterado={time => setPreferencia(time)}
                />
                <button className='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Form;