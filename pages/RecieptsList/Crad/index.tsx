import React, { ReactElement } from 'react'
import Image from 'next/image';
import {Data} from '../../../types/GlobalType';
import styles from '../../../styles/Card.module.scss'

function Card({img: {thumbnail, url}, amount, date, status}: Data): ReactElement {
    return (
        <div className={styles.container}>
            <Image src={thumbnail} alt='content' width='100' height='100' />
            <p>{amount}</p>
            <p>{date}</p>
            <p>{status}</p>
        </div>
    )
}

export default Card
