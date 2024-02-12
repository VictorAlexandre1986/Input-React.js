
const NaoControlado2 = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Input:', event.target.Item.value)
        console.log('Select:', event.target.Categoria.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Cadastrar item" name="Item" />
            <select name="Categoria">
                <option value="Perifericos">Periféricos</option>
                <option value="Placa de video">Placa de video</option>
                <option value="Armazenamento">Armazenamento</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default NaoControlado2;
