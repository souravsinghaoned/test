import styles from '../styles/about.module.css'
import Footer from '@/components/footer';
function About() {
    return (
        <div className={styles.highlight}>
            About page
        </div>
    )
}
export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}