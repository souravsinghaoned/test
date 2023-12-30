import styles from '../styles/about.module.css'
import Footer from '@/components/footer';
import Head from 'next/head';
function About() {
    return (
        <div className={styles.highlight}>
            <Head>
                <title>Learn next js</title>
                <meta name='description' content='Learn next js'/>
            </Head>
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