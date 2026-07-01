"use client";

export default function Error( {
    error,reset,
}:{
error: Error,
reset: () => void;
}){

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>An error occurred!</h1>
            <p>Sorry, {error.message}.</p>
            <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', marginTop: '20px' }}>
                Retry
            </button>
        </div>
    );
}