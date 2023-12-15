import styles from "./page.module.css";

async function getPrices() {
  const res = await fetch("https://api.porssisahko.net/v1/latest-prices.json");
  if(!res) {
    throw new Error("No data");
  }
  return res.json();
}


export default async function Home() {
  const prices = await getPrices();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Home Page</h1>
      </div>
    </main>
  )
}