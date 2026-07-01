import Link from "next/link";
export default function NotFound() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" style={{ marginTop: '20px', display: 'inline-block' }}>Go Back to Home</Link>
        </div>
    );
}