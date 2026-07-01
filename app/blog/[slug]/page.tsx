interface BlogProps {
  params: {
    slug: string;
  };
}
const blogData : Record<string, { title: string; content: string }> = {
    "nextjs":{
        title: "NextJs Basics",
        content: "NextJs is a React Framework for building web applications."
    },
    "react":{
        title: "React Basics",
        content: "React is a JavaScript library for building user interfaces."  
    },
    "javascript":{
        title: "JavaScript Basics",
        content: "JavaScript is a programming language for web development."  
    }
}

export default async function Blog({ params }: BlogProps) {
    const { slug } = await params;
    const blog = blogData[slug];

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
                Slug Url: {slug}
            </p>
        </div>
    );
}