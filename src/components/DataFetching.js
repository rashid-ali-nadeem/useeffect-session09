import React, { useEffect, useState } from 'react';

const DataFetching = () => {
    let initialData = {title: "Waiting for Data from server"};
    let [data, setData] = useState(initialData);
    let [dataLoad] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const dataFetched = await response.json();
            setData(dataFetched);
        }  
      fetchData();
      },[dataLoad])

  return (
    <div>
        <h2>Example 1</h2>
        <h4>Fatching data from API</h4>
        <h6>Title: {data.title} </h6>
        <hr/>   
    </div>
  )
}

export default DataFetching
