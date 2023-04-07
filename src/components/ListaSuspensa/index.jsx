const ListaSuspensa = ({label, aoAlterado, value, obrigatorio, itens}) => {
    return(
        <div className="campo">
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value = {value}>
                {itens.map(item => <option key = {item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa