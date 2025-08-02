interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function fetchPosts(page:number, limit:number):Promise<Post[]>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    const data=await response.json()
    return data    
}