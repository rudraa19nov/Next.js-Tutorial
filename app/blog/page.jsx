import Link from 'next/link';

const blog=[
    {slug:"nextjs",title:"NextJs Basics"},
    {slug:"reactjs",title:"ReactJs Basics"},
    {slug:"javascript",title:"JavaScript Basics"},
]

export default function Blog() {
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                {blog.map((item)=>(
                    <li key={item.slug}>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}