import Link from "next/link";
import CurrentFilters from "./CurrentFilter";

interface ProductsPageProps {
    searchParams:{
        category?:string;
        sort?:string;
    }
}
const products=[
    {id:1,name:'Product 1',category:'electronics',price:100},
    {id:2,name:'Product 2',category:'clothing',price:50},
    {id:3,name:'Product 3',category:'electronics',price:150},   
    {id:4,name:'Product 4',category:'clothing',price:80},
    {id:5,name:'Product 5',category:'electronics',price:200},
]

export default async function ProductsPage({searchParams}:ProductsPageProps) {// servern component
    const {category,sort}=await searchParams;
    let filtered =products;
    if(category){
        filtered=filtered.filter(products=>products.category===category);
    }
    if(sort=="asc"){
        filtered=[...filtered].sort((a,b)=>a.name.localeCompare(b.name));
    }
    return(
        <div>
            <h1>Products</h1>

            <div style={{marginBottom:'20px'}}>
                <Link href="/product" style={{marginRight:'10px'}}>All</Link>
                <Link href="/product?category=electronics" style={{marginRight:'10px'}}>Electronics</Link>
                <Link href="/product?category=clothing" style={{marginRight:'10px'}}>Clothing</Link>
                <Link href="/product?sort=asc" style={{marginRight:'10px'}}>Sort A-Z</Link>
                <Link href="/product" style={{marginRight:'10px'}}>All Products</Link>
            </div>
            <p>
                Current filters: <b>{category || "All"}</b>| Sort:{" "}<b>{sort || "Default"}</b>
            </p>

            <ul>
                {filtered.map(products=>(
                    <li key={products.id}>{products.name}-{products.category}- ${products.price}</li>
                ))}
            </ul>
            <CurrentFilters/>
        </div>
         
    )
    
}