"use client";
import {useSearchParams} from "next/navigation";

const CurrentFilter = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const price = searchParams.get('price');

    return (
        <div>
            <p>Current filters: <b>{category || "All"}</b></p>
        </div>
    );
};

export default CurrentFilter;