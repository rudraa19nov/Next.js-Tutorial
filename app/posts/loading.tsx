import Link from 'next/link';

export default function Loading() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Loading...</h1> 
            <p>Please wait while we fetch the posts.</p>
            <Link href="/" style={{ marginTop: '20px', display: 'inline-block' }}>Go Back to Home</Link>
        </div>
    );
}