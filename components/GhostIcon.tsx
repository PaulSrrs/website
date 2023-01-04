import Image from "next/image";
import {useTheme} from "next-themes";

export default function GhostIcon() {
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return  <Image alt={"Icône de Ghost"}
                   title={"Ghost"}
                   height={96}
                   width={96}
                   src={currentTheme === 'dark' ? "/skills/ghost-light.png" : "/skills/ghost-dark.png"}/>
}
