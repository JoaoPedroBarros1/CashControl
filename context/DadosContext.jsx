import {createContext, useState} from 'react'

const Dados = createContext()


function DadosProvider({ children }) {
    const [receitas, setReceitas] = useState([])
    const [despesas, setDespesas] = useState([])


    async function fetchData(type, method, body, id=null) {
        if (type in ["PUT", "DELETE"] && id === null ) {
            return {"mensagem": "Erro: ID não selecionado"}
        }

        let config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let url = "127.0.0.1:5000/receitas"+['/'+id, ''][id === null]
        let result = await fetch(url, config)
        let resultJson = await result.json()
        setFeriados(resultJson)
    }


    return (
        <Dados.Provider value={{receitas, setReceitas, despesas, setDespesas}}>
            { children }
        </Dados.Provider>
    )
}


export {Dados, DadosProvider}