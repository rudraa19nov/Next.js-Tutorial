interface  Post{
  id:number;
  title:string;
  body:string;
}

export default async function Home() {
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts:Post[]=await res.json();
  return (  
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of your Next.js application.</p>
      <h2>Posts from API:</h2>
      <ul>
        {posts.slice(0,5).map(post=>(
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 