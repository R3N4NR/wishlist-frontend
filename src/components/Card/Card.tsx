import styles from './styles.module.scss';
import { Pedidos, Rotas, Cartinhas } from '../../interfaces/interfaces';
import { useEffect, useState } from 'react';

interface CardProps {
    type: string;
    data: Cartinhas | Pedidos | Rotas;
}

const Card = ({ type, data }: CardProps) => {
    const [cardInfo, setCardInfo] = useState<Cartinhas | Pedidos | Rotas>()

    return (
        <div className={styles.card}>
            
        </div>
    );
};

export default Card;
