import React, { ReactElement } from 'react'
import styles from '../../styles/Heading.module.scss'

function Heading(): ReactElement {
    return (
        <div className={styles.container}>
            <h4>Image</h4>
            <h4>Amount</h4>
            <h4>Date</h4>
            <h4>Status</h4>
        </div>
    )
}

export default Heading
