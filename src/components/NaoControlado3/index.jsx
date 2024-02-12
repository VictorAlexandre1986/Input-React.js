import {useRef,useState} from 'react';

const NaoControlado3 = () => {
    const form = useRef('')
    const [erros,setErros] = useState( '')


    const handleSubmit = (event) => {
        //Para limpar a mensagem de erro caso ja esteja corrigido
        setErros('')

        event.preventDefault()
        const data = new FormData(form.current)
        console.log([...data.entries()])

        const {Item,Categoria} = Object.fromEntries([...data.entries()])
        if (Item.trim() === '') {
            console.log('Campo vazio')
            setErros('Campo vazio')
            return
        }else{
            console.log(Item,Categoria)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Cadastrar item" name="Item" />
            <select name="Categoria">
                <option value="Perifericos">Periféricos</option>
                <option value="Placa de video">Placa de video</option>
                <option value="Armazenamento">Armazenamento</option>
            </select>
            <button type="submit">Enviar</button>
            {erros && <p>{erros}</p>}
        </form>
    </div>
  );
};

export default NaoControlado3;
