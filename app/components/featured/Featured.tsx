
import React from 'react'
import Image from 'next/image'

import styles from './Featured.module.css'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hello there!</b> Discover the best place to work.
            </h1>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image src="https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702406848/njmh0frr0zax62yuwgoi.jpg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured