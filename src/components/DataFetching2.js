import React, { useEffect, useState } from 'react';

const DataFetching2 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
        console.log(idFromButtonClick)
    }

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        }
    fetchData();
    },[idFromButtonClick])

  return (
    <div>
        <h2>Example 3</h2>
        <h4>Fatching require data from API after button click </h4>
        <h6>Give value upto 100</h6>
        <input type = 'text' value = {id} onChange = {(e) => setId(e.target.value)} />
        <button type = 'button' onClick = {handleClick} >Fetch Post</button>
        <div>{post.title} </div>
        <hr/>
    </div>
  )
}

export default DataFetching2
