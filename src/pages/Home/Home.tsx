import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { apiClient } from '../../services/apiClient'
import styles from './styles.module.scss'
import DataContainer from '../../components/DataContainer/DataContainer'
import {Cartinhas, Pedidos, Rotas} from '../../interfaces/interfaces'

 const Home = () => {
    const [payLoad, setPayLoad] = useState(null)
    const [select, setSelect] = useState('')

    useEffect(() => {
        const handleGet = async () => {
            const api = apiClient();

           const response =  await api.get(select)
            
            setPayLoad(response?.data)
        }
            handleGet()
    }, [select])
console.log(select)
    return(
        <>
            <div className={styles.pageBody}>
            <Sidebar handleOption={setSelect}/>
            <DataContainer data={payLoad} title={select}/>
            </div>
        </>
    )
}

export default Home