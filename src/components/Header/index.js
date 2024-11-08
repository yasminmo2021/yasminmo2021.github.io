import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(){
    return(
        <header>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href="/Sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}