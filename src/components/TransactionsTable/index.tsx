import { useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

export function TransactionsTable() {
    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data));
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desnvolvimento </td>
                        <td>12000</td>
                        <td>Portifolio</td>
                        <td>5000</td>
                    </tr>
                </tbody>
            </table>
             
        </Container>
    )
}