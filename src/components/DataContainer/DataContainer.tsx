// DataContainer.js
import { capitalizeFirstLetter } from '../../utils/formatString/capitalizeFirstLetter';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Cartinhas, Pedidos, Rotas } from '../../interfaces/interfaces';
import styles from './styles.module.scss'

interface DataProps {
    data: (Cartinhas | Pedidos | Rotas)[];
    title: string;
}
const DataContainer = ({ data, title }: DataProps) => {
    const [containerTitle, setContainerTitle] = useState('');

    useEffect(() => {
        const convertTitle = title;

        setContainerTitle(capitalizeFirstLetter(convertTitle));
    }, [title]);

    console.log(data);
    return (
        <div className={styles.container}>
            <div>
                <h1>{containerTitle}</h1>
            </div>
            <div className={styles.cardContainer}>
                {data &&
                    data.map((item, index) => (
                        <Card key={index} type={containerTitle} data={item} />
                    ))}
            </div>
        </div>
    );
};

export default DataContainer;
