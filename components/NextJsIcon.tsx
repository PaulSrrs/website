import styles from "../styles/Home.module.scss";
import Image from "next/image";
import {useTheme} from "next-themes";

export default function NextJsIcon() {
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <Image className={styles.themeBtn}
                  alt="Icône de Linkedin"
                  src={currentTheme === 'dark' ? "/skills/nextjs-light.png" : "/skills/nextjs-dark.png"}
                  height={84}
                  width={140}/>
}
