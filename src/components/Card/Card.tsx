// Card.js
import styles from './styles.module.scss';
import { Pedidos, Rotas, Cartinhas } from '../../interfaces/interfaces';
import { useEffect, useState } from 'react';

interface CardProps {
    type: string;
    data: Cartinhas | Pedidos | Rotas;
}

const Card = ({ type, data }: CardProps) => {
    const [cardInfo, setCardInfo] = useState<Cartinhas | Pedidos | Rotas>()
    
    useEffect(() => {
        const handleData = () => {
            if(type === 'Cartinhas'){
                setCardInfo(data as Cartinhas)
            }
            if(type === 'Pedidos'){
                setCardInfo(data as Pedidos)
            }
            if(type === 'Rotas'){
                setCardInfo(data as Rotas)
            }
        }

        handleData()
    }, [data, type])
    console.log((data as Pedidos).descricao , type)
    return (
        <div className={styles.card}>
            <p>{cardInfo?.nome}</p>
        </div>
    );
};

export default Card;
