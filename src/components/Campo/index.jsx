import './Campo.css';

const Campo = ({label, type, placeholder, obrigatorio, valor, aoAlterado})=>{

    const aoDigitado = (e) =>{
        aoAlterado(e.target.value)
    }
    return(
        <div className='campo'>
        <label>{label}</label>
            <input 
                type={type} 
                value = {valor}
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo