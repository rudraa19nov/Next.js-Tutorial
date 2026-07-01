"use client"

import  {useState ,useEffect} from "react";
export default  function Page() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function getPosts() {
        const res = await fetch('http://localhost:3000/api/posts');
        const data = await res.json();
        setPosts(data);
    }

    async function submitPost() {
        const res = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });
        let data = await res.json();
        setTitle("");
        setContent("");
        getPosts(); // Refresh the posts after submission
    }
    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Get and Post api</h1>
           <button onClick={getPosts}>Get Posts</button>
           <div style={{ marginTop: '20px' }}>
             <input 
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginRight: '10px' }}
                />
            <br></br>
            <input 
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ marginRight: '10px' }}
                />
            <br></br>
            <div style={{ marginTop: '10px' }}>
                <button onClick= {submitPost}>Submit Post</button>
            </div>
           <pre>{JSON.stringify(posts, null, 2)}</pre>
    
        </div>

        </div>
    )}


   