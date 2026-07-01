import styles from './Card.module.css'; 
export default function About() {
  return (
    <div className={styles.card}>
      <h1>About Page</h1>
      <p>This is the about page of your Next.js application.</p>
    </div>
  );
}