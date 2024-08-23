
import { useEffect, React } from "react";

// ErrorPage Component
function ErrorPage() {
  useEffect(() => {
    document.title = "410 - Page Gone";
  }, []);
  return (
    <main style={styles.container}>
      <section>
        <h1 style={styles.heading}>410 - Page Gone</h1>
        <p style={styles.paragraph}>
          The page you are looking for is no longer available. It may have been removed or the link you followed might be outdated.
        </p>
        <p style={styles.paragraph}>
          Please <a href="/" style={styles.link}>return to the homepage</a> or use the navigation menu to find what you're looking for.
        </p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.25rem',
    color: '#666',
    margin: '20px 0',
  },
  link: {
    color: '#832d14',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default ErrorPage;
