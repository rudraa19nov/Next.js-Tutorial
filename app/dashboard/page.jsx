"use client";

import {useRouter} from 'next/navigation';  

export default function Dashboard () {
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={handleClick}>Go to Home</button>
        </div>
    );
}