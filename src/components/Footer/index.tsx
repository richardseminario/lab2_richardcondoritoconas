import Link from 'next/link';
import styles from './styles.module.css';
const Footer = () => {
    return (
        <footer className={styles.foot}>
            <div className=''>
                <ul>
                    <li>
                        <h3>Sitemap</h3>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/post">Posts</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </footer>  
    );
};

export default Footer