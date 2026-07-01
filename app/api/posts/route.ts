import {NextResponse} from "next/server";

const posts = [
    {id: 1, title: "First Post", content: "This is the content of the first post."},
    {id: 2, title: "Second Post", content: "This is the content of the second post."},
    {id: 3, title: "Third Post", content: "This is the content of the third post."}
];
//get api route
export async function GET() {
    return NextResponse.json(posts);
}


 //POST ROUTE
    export async function POST(request:Request){
        const body=await request.json();

        //add new post to the posts array
        const newPost={
            id:posts.length+1,
            title:body.title,
            content:body.content
        }
        posts.push(newPost);


        return NextResponse.json({
            message:"Post created successfully",
            data:body
        },{
            status:201
        })
    }