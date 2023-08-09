"use client"
import React, { useEffect, useState } from 'react';
async function susanta() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const page = async () => {
  // let [data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const url = "https://jsonplaceholder.typicode.com/todos";
  //     let response = await fetch(url);
  //     let jsonData = await response.json();
  //     setData(jsonData);
  //   })()
  // }, [])
  // console.log(data);
  let data = await susanta();

  return (
    <>
        <h2>home page</h2>
        <ol className='mylist'>
          {
            data.map((item, index) => {
              if(item.id < 10) {
                return (
                  <div key={index}>
                    <li>{item['title']}</li>
                  </div>
              )
            }
            })
          }
        </ol>
    </>
  )
}

export default page;
