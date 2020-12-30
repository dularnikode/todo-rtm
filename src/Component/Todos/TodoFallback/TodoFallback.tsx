import React from 'react';
import styles from './TodoFallback.module.css' ;
import {Link} from 'react-router-dom';

export default function TodoFallback(){
    return(
        <div className={styles.fallbackWrapper} >
            <div className={styles.centerMessage}>
            <Link to='/login'>
            <h3>Please Login To see Your Todos </h3>
            </Link>    
            </div>
        </div>
        
    );
}
