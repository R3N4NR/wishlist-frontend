import { useState } from 'react'
import Select from '../Select/Select'
import styles from './styles.module.scss'

interface SidebarProps {

    handleOption: (opt: string) => void
}
const Sidebar = ({handleOption}: SidebarProps) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className={styles.sidebar}>
            <Select handleOption={handleOption} isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)}/>
        </div>
        </>
    )
}

export default Sidebar