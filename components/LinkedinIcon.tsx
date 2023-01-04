import styles from "../styles/Home.module.scss";
import Image from "next/image";
import {useTheme} from "next-themes";

export default function LinkedinIcon() {
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <Image className={styles.themeBtn}
                  alt="Icône de Linkedin"
                  src={currentTheme === 'dark' ? "/social-networks/linkedin-light.svg" : "/social-networks/linkedin-dark.svg"}
                  height={20}
                  width={20}/>
}
