import React, { Component } from "react";
import styles from "../page.module.css";

async function getPricedata() {
    const prices = await fetch("https://api.porssisahko.net/v1/latest-prices.json");
    if (!prices.ok) {
      throw new Error("Nope");
    }
    return prices.json();
  }
  
  interface Price {
    price: number;
    startDate: string;
    endDate: string;
  }
  
  export default async function Search() {
    try {
      const responseData: { prices: Array<Price> } = await getPricedata();
      const { prices } = responseData;
  
      return (
        <main className={styles.main}>
          <div className={styles.description}>
            <ul>
              {prices.map((price, index) => (
                <li key={index}>
                  {price.price} - {new Date(price.startDate).toLocaleString()} to{' '}
                  {new Date(price.endDate).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </main>
      );
    } catch (error) {
      console.error('Error in Search component:', error);
      return (
        <main className={styles.main}>
          <h1>Search Page</h1>
          <p>Error fetching data. Please try again later.</p>
        </main>
      );
    }
  }
  