import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const {myData} = useLoaderData()

    {/*
    const [data, setData] = useState();
    useEffect(() => {
       fetch('https://api.github.com/git-anshudubey')
       .then(response => response.json())
       .then(data => {
        console.log(data);
        setData(data)
       })
    },)
    */}

    return(
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {myData.followers}
      <img src={myData.avatar-user} alt="Git picture" width={300} />
      </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/git-anshudubey')
    return response.json()
}