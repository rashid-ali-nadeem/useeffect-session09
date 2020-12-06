import React, { useEffect, useState } from 'react'; 

const DataFetching1 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setPost(data);
        }
    fetchData();
    },[id])

  return (
    <div>
        <h2>Example 2</h2>
        <h4>Fatching that data from API which is type in field </h4>
        <h6>Give value upto 100</h6>
        <input type = 'text' value = {id} onChange = {(e) => setId(e.target.value)} />
        <div>{post.title} </div>
        <hr/>
    </div>
  )
}

export default DataFetching1
