import React, { ReactElement } from 'react'
import styles from '../../../styles/ImagePreview.module.scss'

interface Props {
    url :string;
}

function ImagePreview({url}: Props): ReactElement {
    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default ImagePreview
