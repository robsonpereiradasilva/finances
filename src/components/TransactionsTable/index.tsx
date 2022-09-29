import { Container } from './styles'

export function TransactionsTable() {
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