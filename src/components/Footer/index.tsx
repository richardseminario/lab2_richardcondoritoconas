import Image from 'next/image';
import image from "./img/Seminario.jpeg"
import styles from './styles.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <div className={styles.footerText}>
                    <p>Sitemap</p>
                    <p>Home</p>
                    <p>Post</p>
                    <p>About</p>
                </div>
                <div className={styles.footerText}>
                    <p>Conectate con nosotros</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Tiktok</p>
                </div>
                <div className={styles.footerText2}>
                    <p>NEXT<span>js</span></p>
                </div>
                
                <div className={styles.footerText2}>
                    <p>Vercel</p>
                </div>
            </div>
            <div className={styles.footerImage}>
                    <Image src={image} alt="imagen de footer" width={100} height={100} />
            </div>
        </footer>  
    );
};

export default Footer