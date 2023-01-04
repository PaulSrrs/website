import Image from "next/image";
import styles from "../styles/Home.module.scss";
import {useTheme} from "next-themes";

export default function I18nBtn() {
    const {theme, systemTheme, setTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return  <Image className={styles.themeBtn}
                   alt="Icône de darkMode"
                   onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                   src={theme === 'dark' ? "/buttons/light-mode.svg" : "/buttons/dark-mode.svg"}
                   height={24}
                   width={24}/>
}
