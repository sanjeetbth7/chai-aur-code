import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const userName = "sanjeetbth7"
const githubApi = `https://api.github.com/users/${userName}`

function Github() {

    const data = useLoaderData(); // It is more faster than useEffect, it start loading data when mouse pointer goes on the element of nav ( In this case , GitHub)
    
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch(githubApi).then((res)=>res.json()).then((data)=> setData(data))
    // },[]
    // )
    
    
  return (
    <div className='flex flex-col justify-center items-center bg-slate-500 text-white text-3xl p-4 m-4'>
      <img src={data.avatar_url || ""} alt="profile img" width="350" height="350"/>
      <h1 className='p-2 text-orange-500 text-4xl font-bold'>{data.name || "Name will be here"}</h1>
      <h2 className='p-2'>Github Followers: {data.followers || "error"} </h2>
    </div>
  )
}

export default Github

export const githubInfoLoader = (async ()=>{
    const response = await fetch(githubApi);
    return response.json();
})