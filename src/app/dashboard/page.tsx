"use client"

import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Dashboard Page</h1>
                <button type="button" onClick={() => router.back()}>Back</button>
            </div>
        </main>
    )
}