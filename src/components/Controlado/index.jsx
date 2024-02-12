import { useState } from 'react';


const Controlado = () => {
    const [value, setValue] = useState(() => {
        return "";
    });
    const [categoria, setCategoria] = useState(() => {
        return "";
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        console.log(categoria);
    };
    
const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
};

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <select value={value} onChange={(e) => handleCategoriaChange(e)}>
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

export default Controlado;