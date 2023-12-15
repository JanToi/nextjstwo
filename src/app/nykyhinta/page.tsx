
import styles from "../page.module.css";
import Navigationbar from "../components/navigation/navbar";
import Search from "../search/page";
import SearchBar from "../components/navigation/searchbar";
import { Line } from "react-chartjs-2";


export default function Nykyhinta() {
    return (        
            <div className={styles.description}>
                <Navigationbar />
                <SearchBar />
                <h1>Nykyiset hinnat</h1>

                <Search />
            </div>        
    )
}


