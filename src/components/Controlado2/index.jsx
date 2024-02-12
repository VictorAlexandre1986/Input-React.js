import { useState } from 'react';


const Controlado2 = () => {
    const [objetoFormulario, setObjetoForumlario] = useState(() => {
        return {
            nome: "",
            categoria: ""
        };
    });

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(objetoFormulario.nome, objetoFormulario.categoria);
    };
    
const handleCategoriaChange = (e) => {
    setObjetoForumlario({...objetoFormulario, categoria:e.target.value});
};

const handleNomeChange = (e) => {
    setObjetoForumlario(e);
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={objetoFormulario.nome} onChange={(e)=> handleNomeChange({...objetoFormulario, nome:e.target.value})} />
            <select value={objetoFormulario.categoria} onChange={(e) => handleCategoriaChange(e)}>
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

export default Controlado2;