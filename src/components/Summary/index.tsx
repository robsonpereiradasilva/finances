import React from 'react';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from './styles'


export function Summary() {

    const { transactions } = useTransactions();

    // const totalDeposits =transactions.reduce((acc, transaction) =>{
    //     if(transaction.type ==='deposit'){
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // },0)

    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.deposits += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.withdrwas += transactions.amount;
            acc.total -= transactions.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdrwas: 0,
        total: 0,
    })

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>    {new Intl.NumberFormat('pt-Br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdrwas)}
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}