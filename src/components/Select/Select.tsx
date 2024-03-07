import styles from './styles.module.scss'
import { useState } from 'react';
import { options } from '../../utils/infos/SelectOptions';

interface SelectProps {

    isOpen: boolean;
    handleOption: (opt: string) => void
    handleClick: () => void
}
const Select = ({ isOpen, handleClick, handleOption }: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleClickOption = (selectOption: string, route: string) => {

        setSelectedOption(selectOption)
        handleOption(`${route.toLowerCase()}`)
    }

    return (
        <>
            <div className={styles.dropdown}>
                <button className={styles.dropdownButton} onClick={handleClick}>{selectedOption ? selectedOption : "Selecione uma opção"}</button>

                {
                    isOpen && (
                        <ul className={styles.menu}>
                            {options && (options.map((option, index) =>
                                <li onClick={() => handleClickOption(option?.option, option?.route)} key={index}>{option?.option}</li>
                            ))}
                        </ul>
                    )
                }

            </div>
        </>
    )
}

export default Select