import { useState } from 'react';


const Controlado3 = () => {
    const [objetoFormulario, setObjetoForumlario] = useState(() => {
        return {
            nome: "",
            categoria: ""
        };
    });

    
    const handleChange = (event) => {
        setObjetoForumlario({...objetoFormulario, [event.target.name]: event.target.value});
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(objetoFormulario.nome, objetoFormulario.categoria);
        console.log(objetoFormulario);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" onChange={(e)=> handleChange(e)} />
            <select  name="categoria" onChange={(e) => handleChange(e)}>
                <option value="">Selecione uma categoria</option>
                <option value="Processador">Processador</option>
                <option value="Perifericos">Periféricos</option>
                <option value="Placa de video">Placa de video</option>
                <option value="Armazenamento">Armazenamento</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Controlado3;