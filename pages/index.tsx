import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import {useRouter} from "next/router";
import ContactForm from '../components/ContactForm';
import {CSSProperties} from "react";

const I18N = dynamic(() => import('../components/I18nBtn'), {ssr: false})
const LinkedinIcon = dynamic(() => import('../components/LinkedinIcon'), {ssr: false})
const GithubIcon = dynamic(() => import('../components/GithubIcon'), {ssr: false})
const NextJsIcon = dynamic(() => import('../components/NextJsIcon'), {ssr: false})

const Home: NextPage = () => {
    const {t, lang} = useTranslation('common');

    const hideFormStyle: CSSProperties = {
        width: 0,
        height: 0,
        border: 'none',
        position: 'absolute'
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Paul Surrans - Consultant IT</title>
                <meta name="title" content="Paul Surrans"/>
                <meta name="description"
                      content="Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8F8F8"/>
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000"/>
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
                <div
                    className={styles.outer}>
                    <div className={styles.themeBtnCtn}>
                        <I18N/>
                        {lang === 'fr' ? <Link href={'/en'} locale="en">
                            <Image className={styles.flag}
                                   alt={"Drapeau Anglais"}
                                   src="/flags/uk.svg"
                                   height={20}
                                   width={20}/>
                        </Link> : <Link href={'/fr'} locale="fr">
                            <Image className={styles.flag}
                                   alt={"Drapeau Français"}
                                   src="/flags/fr.svg"
                                   height={20}
                                   width={20}/>
                        </Link>}

                    </div>
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
                                       width={180}/>
                                <div className={styles.profileName}>
                                    <h1>Paul Surrans</h1>
                                    <Link href="https://www.linkedin.com/in/paulsurrans/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <LinkedinIcon/>
                                        </a>
                                    </Link>
                                    <Link href="https://github.com/PaulSrrs" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <GithubIcon/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.welcomeMessage}>
                                <p className={styles.title}><span className={"blue"}>{t('welcome')}</span> 😊,</p>
                                <p className={styles.content}>
                                    {t('intro')}<Link href="#contact-me" legacyBehavior><a
                                    className={"blue bold"}>&nbsp;{t('contactMe')}</a></Link>.
                                </p>
                            </div>
                        </section>
                        <div className={styles.blueSeparator}>

                        </div>
                        <section className={styles.whoAmI}>
                            <h2 className={styles.title}>{t('whoAmI')}</h2>
                            <p className={[styles.content, styles.textJustify].join(' ')}>
                                {t('whoAmIContent')}
                            </p>
                        </section>
                        <section className={styles.achievements}>
                            <h2 className={styles.title}>{t('achievements')}</h2>
                            <div className={styles.achievementsGrid}>
                                <Link href="https://app.woken.exchange/" legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/woken-bg.jpg")',
                                            filter: "blur(3px) brightness(90%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Woken</h3>
                                        <p className={styles.description}>(Dapp)</p>
                                    </a>
                                </Link>
                                <Link href="https://wholesale.banking.societegenerale.com/fr/actus-opinions/contenus-pedagogiques/video/video/decouvrez-global-cash/" legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/societe-generale-bg.jpg")',
                                            filter: "blur(3px) brightness(90%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Société Générale</h3>
                                        <p className={styles.description}>(Global cash)</p>
                                    </a>
                                </Link>
                                <Link href="https://keyboon.fr/" legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/keyboon-bg.jpeg")',
                                            filter: "blur(3px) brightness(90%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Keyboon</h3>
                                        <p className={styles.description}>({t('TMS')})</p>
                                    </a>
                                </Link>
                                <Link href="https://cryptoast.fr/cryptoast-nouvelle-version-site-nouveau-logo/"
                                      legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/cryptoast-bg.jpg")',
                                            filter: "blur(3px) brightness(90%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Cryptoast</h3>
                                        <p className={styles.description}>({t('cryptoastV3')})</p>
                                    </a>
                                </Link>
                                <Link href="https://paulsrrs.github.io/cryptoast_v3_snippet/"
                                      legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/cryptoast-bg.jpg")',
                                            filter: "blur(3px) brightness(90%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Cryptoast</h3>
                                        <p className={styles.description}>(Snippet)</p>
                                    </a>
                                </Link>
                                <Link href="https://llmh.fr/" legacyBehavior>
                                    <a target="_blank" style={{border: "1px solid rgba(255, 255, 255, 0.33)"}}
                                       className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/llmh-bg.jpg")',
                                            filter: "blur(3px)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Lomme Lille Métropole Handball</h3>
                                        <p className={styles.description}>({t('website')})</p>
                                    </a>
                                </Link>
                                <Link href="https://sc-haubourdin-loos-handball.fr/" legacyBehavior>
                                    <a target="_blank" style={{border: "1px solid rgba(255, 255, 255, 0.33)"}}
                                       className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/schl-bg.jpg")',
                                            filter: "blur(3px) brightness(50%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Sporting Club Haubourdin Loos Handball</h3>
                                        <p className={styles.description}>({t('website')})</p>
                                    </a>
                                </Link>
                                <Link href="https://safi.style/" legacyBehavior>
                                    <a target="_blank" style={{border: "1px solid rgba(255, 255, 255, 0.33)"}}
                                       className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/safi-bg.jpg")',
                                            filter: "blur(3px)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Safi</h3>
                                        <p className={styles.description}>({t('website')})</p>
                                    </a>
                                </Link>
                                <Link href="https://elodie-cholat.com/" legacyBehavior>
                                    <a target="_blank" style={{border: "1px solid rgba(255, 255, 255, 0.33)"}}
                                       className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/elodie-cholat-bg.jpg")',
                                            filter: "blur(3px) brightness(50%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Elodie Cholat</h3>
                                        <p className={styles.description}>({t('website')})</p>
                                    </a>
                                </Link>
                                <Link href="https://marie-surrans.fr/" legacyBehavior>
                                    <a target="_blank" style={{border: "1px solid rgba(255, 255, 255, 0.33)"}}
                                       className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/marie-surrans-bg.jpg")',
                                            filter: "blur(3px) brightness(50%)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Marie Surrans</h3>
                                        <p className={styles.description}>({t('website')})</p>
                                    </a>
                                </Link>
                                <Link href="https://socrate.paul-surrans.fr/" legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/socrate-bg.jpg")',
                                            filter: "blur(1px)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Socrate</h3>
                                        <p className={styles.description}>(Landing page V2)</p>
                                    </a>
                                </Link>
                                <Link href="https://socrate-old.paul-surrans.fr/" legacyBehavior>
                                    <a target="_blank" className={styles.gridItem}>
                                        <div style={{
                                            backgroundImage: 'url("/card-bg/socrate-bg.jpg")',
                                            filter: "blur(1px)"
                                        }}
                                             className={styles.illustration}>
                                        </div>
                                        <h3 className={styles.title}>Socrate</h3>
                                        <p className={styles.description}>(Landing page V1)</p>
                                    </a>
                                </Link>
                                <div style={{
                                    cursor: "default",
                                    transform: "scale(1.0)",
                                    background: 'linear-gradient(to right bottom, var(--deep-blue), black)'
                                }}
                                     className={styles.gridItem}>
                                    <h3 className={styles.title}>{t('comingSoon')}...</h3>
                                    <p className={styles.description}>({t('stayConnected')})</p>
                                </div>
                            </div>
                        </section>
                        <section className={styles.skills}>
                            <h2 className={styles.title}>{t('skills')}</h2>
                            <div className={styles.skillsGrid}>
                                <div className={styles.gridItem}>
                                    <Link href="https://angular.io/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône d'Angular"}
                                                   title={"Angular"}
                                                   height={108}
                                                   width={108}
                                                   src="/skills/angular.svg"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://reactjs.org/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de ReactJs"}
                                                   title={"ReactJs"}
                                                   height={86}
                                                   width={97}
                                                   src="/skills/reactjs.png"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link className={styles.gridItem} href="https://nextjs.org/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <NextJsIcon/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://nodejs.org/en" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de NodeJS"}
                                                   title={"NodeJS"}
                                                   height={162}
                                                   width={108}
                                                   src="/skills/node-js.svg"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://nestjs.com/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de NestJS"}
                                                   title={"NestJS"}
                                                   height={97}
                                                   width={97}
                                                   src="/skills/nestjs.svg"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://wikipedia.org/wiki/Hypertext_Markup_Language" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de HTML"}
                                                   title={"HTML"}
                                                   height={96}
                                                   width={96}
                                                   src="/skills/html5.png"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://en.wikipedia.org/wiki/CSS" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de CSS"}
                                                   title={"CSS"}
                                                   height={96}
                                                   width={96}
                                                   src="/skills/css3.png"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://en.wikipedia.org/wiki/Javascript" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de JavaScript"}
                                                   title={"Javascript"}
                                                   height={96}
                                                   width={96}
                                                   src="/skills/javascript.png"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://www.typescriptlang.org/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de Typescript"}
                                                   title={"Typescript"}
                                                   height={96}
                                                   width={96}
                                                   src="/skills/typescript.png"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.gridItem}>
                                    <Link href="https://figma.com/" legacyBehavior>
                                        <a className={styles.flex} target="_blank">
                                            <Image alt={"Icône de Figma"}
                                                   title={"Figma"}
                                                   height={84}
                                                   width={56}
                                                   src="/skills/figma.png"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section id="contact-me">
                            <h2 className={styles.title}>{t('ContactMe')} 👋</h2>
                            <p className={styles.content}>
                                {t('ContactMeIntro')}
                            </p>
                            <div className={styles.formContainer}>
                                <div style={lang === 'en' ? hideFormStyle : undefined}>
                                    <ContactForm  src={t('demandes')} title={t('contactForm')}/>
                                </div>
                                <div style={lang === 'fr' ? hideFormStyle : undefined}>
                                    <ContactForm src={t('ask')} title={t('contactForm')}/>
                                </div>
                            </div>
                        </section>
                        <section className={styles.usefulLinks}>
                            <h2 className={styles.title}>{t('usefulLinks')}</h2>
                            <div className={styles.usefulLinksCardCtn}>
                                <div className={styles.usefulLinksCard}>
                                    <h3 className={styles.cardTitle}>{t('myResume')}</h3>
                                    <p className={styles.cardDescription}>{t('downloadResume')}</p>
                                    <div className={[styles.flex, styles.flexRow, styles.alignItemsCenter].join(' ')}>
                                        <p className={styles.download}>{t('download')}</p>
                                        <div className={styles.downloadBtn}>
                                            <a href="/documents/CV_Paul_Surrans.pdf" style={{padding: '2px 0'}} className={styles.flex} target="_blank">
                                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.303 6.35016C14.303 6.12541 14.211 5.90792 14.0483 5.74843L9.39967 0.985355C9.2157 0.804112 9.02467 0.724365 8.82655 0.724365C8.37372 0.724365 8.04825 1.0506 8.04825 1.49284C8.04825 1.72483 8.14023 1.92057 8.28174 2.06557L9.87373 3.7185L11.9256 5.63968L10.2841 5.53819H1.70859C1.23453 5.53819 0.909058 5.87167 0.909058 6.35016C0.909058 6.82139 1.23453 7.15488 1.70859 7.15488H10.2841L11.9256 7.05338L9.87373 8.97456L8.28174 10.6275C8.14023 10.7725 8.04825 10.9682 8.04825 11.2002C8.04825 11.6425 8.37372 11.9687 8.82655 11.9687C9.02467 11.9687 9.2157 11.8889 9.38552 11.7222L14.0483 6.94463C14.211 6.78514 14.303 6.56765 14.303 6.35016Z"
                                                        fill="#027DFD"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.usefulLinksCard}>
                                    <h3 className={styles.cardTitle}>{t('siteMockUp')}</h3>
                                    <p className={styles.cardDescription}>{t('downloadMockUp')}</p>
                                    <div className={[styles.flex, styles.flexRow, styles.alignItemsCenter].join(' ')}>
                                        <p className={styles.download}>{t('download')}</p>
                                        <a href="/documents/paul-surrans-website-mock-up.fig" className={styles.flex}
                                           target="_blank">
                                            <div className={styles.downloadBtn}>
                                                .fig
                                            </div>
                                        </a>
                                        <a href="/documents/paul-surrans-website-mock-up.pdf" className={styles.flex}
                                           target="_blank">
                                            <div className={styles.downloadBtn}>
                                                .pdf
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.outer}>
                    <p className={styles.copyright}>Paul Surrans © 2023</p>
                    <div className={styles.socialNetworks}>
                        <Link href="https://www.linkedin.com/in/paulsurrans/" legacyBehavior>
                            <a className={styles.flex} target="_blank">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 19.1434 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69C7.69 16.7301 7.69 8.55014 7.69 7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="https://github.com/PaulSrrs" legacyBehavior>
                            <a className={styles.flex} target="_blank">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0C4.475 0 0 4.58819 0 10.2529C0 14.7899 2.8625 18.6219 6.8375 19.9804C7.3375 20.0701 7.525 19.7625 7.525 19.4934C7.525 19.2499 7.5125 18.4425 7.5125 17.5838C5 18.058 4.35 16.9558 4.15 16.3791C4.0375 16.0843 3.55 15.1743 3.125 14.9308C2.775 14.7386 2.275 14.2644 3.1125 14.2516C3.9 14.2388 4.4625 14.9949 4.65 15.3025C5.55 16.8533 6.9875 16.4175 7.5625 16.1484C7.65 15.4819 7.9125 15.0334 8.2 14.777C5.975 14.5207 3.65 13.6364 3.65 9.71466C3.65 8.59965 4.0375 7.67689 4.675 6.95918C4.575 6.70286 4.225 5.65193 4.775 4.24215C4.775 4.24215 5.6125 3.97301 7.525 5.29308C8.325 5.06239 9.175 4.94704 10.025 4.94704C10.875 4.94704 11.725 5.06239 12.525 5.29308C14.4375 3.9602 15.275 4.24215 15.275 4.24215C15.825 5.65193 15.475 6.70286 15.375 6.95918C16.0125 7.67689 16.4 8.58683 16.4 9.71466C16.4 13.6492 14.0625 14.5207 11.8375 14.777C12.2 15.0975 12.5125 15.7126 12.5125 16.6738C12.5125 18.0452 12.5 19.1474 12.5 19.4934C12.5 19.7625 12.6875 20.0829 13.1875 19.9804C15.1726 19.2932 16.8976 17.9851 18.1197 16.2401C19.3418 14.4951 19.9994 12.4012 20 10.2529C20 4.58819 15.525 0 10 0Z"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
