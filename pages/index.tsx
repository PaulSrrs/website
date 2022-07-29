import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import {useTheme} from "next-themes";

const Home: NextPage = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className={styles.container}>
            <Head>
                <title>Paul Surrans</title>
                <meta name="title" content="Paul Surrans"/>
                <meta name="description"
                      content="Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8F8F8" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://paul-surrans.fr/"/>
                <meta property="og:title" content="Paul Surrans"/>
                <meta property="og:description"
                      content="Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !"/>
                <meta property="og:image" content="/banner.jpeg"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="628"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://paul-surrans.fr/"/>
                <meta property="twitter:title" content="Paul Surrans"/>
                <meta property="twitter:description"
                      content="Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !"/>
                <meta property="twitter:image" content="/banner.jpeg"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="canonical" href="https://paul-surrans.fr/"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <header className={styles.header}>
                <div className={[styles.outer, styles.flex, styles.flexRow, styles.justifyContentEnd, styles.alignItemsCenter].join(' ')}>
                    <div className={styles.themeBtnCtn}>
                        {theme === 'dark' ?
                            <Image className={styles.themeBtn}
                                   alt={"Icône de soleil"}
                                   onClick={() => setTheme('light')} src="/buttons/light-mode.svg"
                                   height={20}
                                   width={20} /> :
                            <Image className={styles.themeBtn}
                                   alt={"Icône de lune"}
                                   onClick={() => setTheme('dark')} src="/buttons/dark-mode.svg"
                                   height={20}
                                   width={20} />
                        }
                    </div>
                    <Image className={styles.flag}
                           alt={"Drapeau De La France"}
                           src="/flags/fr.svg"
                           height={24}
                           width={24} />
                </div>
            </header>
            <main className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.main}>
                        <section className={styles.hero}>
                            <div className={styles.profileCtn}>
                                <Image className={styles.profilePic}
                                       alt={"Photo De Paul Surrans"}
                                       src="/profile-pic.png"
                                       height={180}
                                       width={180} />
                                <div className={styles.profileName}>
                                    <h1>Paul Surrans</h1>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 19.1434 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69C7.69 16.7301 7.69 8.55014 7.69 7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z"
                                              fill={theme === 'dark' ? 'white' : 'black'}/>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.475 0 0 4.58819 0 10.2529C0 14.7899 2.8625 18.6219 6.8375 19.9804C7.3375 20.0701 7.525 19.7625 7.525 19.4934C7.525 19.2499 7.5125 18.4425 7.5125 17.5838C5 18.058 4.35 16.9558 4.15 16.3791C4.0375 16.0843 3.55 15.1743 3.125 14.9308C2.775 14.7386 2.275 14.2644 3.1125 14.2516C3.9 14.2388 4.4625 14.9949 4.65 15.3025C5.55 16.8533 6.9875 16.4175 7.5625 16.1484C7.65 15.4819 7.9125 15.0334 8.2 14.777C5.975 14.5207 3.65 13.6364 3.65 9.71466C3.65 8.59965 4.0375 7.67689 4.675 6.95918C4.575 6.70286 4.225 5.65193 4.775 4.24215C4.775 4.24215 5.6125 3.97301 7.525 5.29308C8.325 5.06239 9.175 4.94704 10.025 4.94704C10.875 4.94704 11.725 5.06239 12.525 5.29308C14.4375 3.9602 15.275 4.24215 15.275 4.24215C15.825 5.65193 15.475 6.70286 15.375 6.95918C16.0125 7.67689 16.4 8.58683 16.4 9.71466C16.4 13.6492 14.0625 14.5207 11.8375 14.777C12.2 15.0975 12.5125 15.7126 12.5125 16.6738C12.5125 18.0452 12.5 19.1474 12.5 19.4934C12.5 19.7625 12.6875 20.0829 13.1875 19.9804C15.1726 19.2932 16.8976 17.9851 18.1197 16.2401C19.3418 14.4951 19.9994 12.4012 20 10.2529C20 4.58819 15.525 0 10 0Z"
                                              fill={theme === 'dark' ? 'white' : 'black'}/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.welcomeMessage}>
                                <p className={styles.title}><span className={"blue"}>Bienvenue</span> 😊,</p>
                                <p className={styles.content}>
                                    Ravi de vous avoir sur mon site.<br /><br />

                                    Vous pouvez en apprendre un peu plus
                                    sur moi, bonne navigation !<br /><br />

                                    Je suis ouvert à de nouvelles opportunités,
                                    n’hésitez pas à <Link href="#contact-me"><a className={"blue bold"}>me contacter</a></Link>.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export default Home
