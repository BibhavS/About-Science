import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function News() {
  const [newsData, setNewsData] = useState([]);
  
  useEffect(()=>{
     Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35388c35a7ac4687b8915eec0e2bb1a7')
     .then(res =>{
      setNewsData(res.data.articles);
     })
  }, [])

  console.log(newsData)
 
  const news = newsData.map((data, key)=>{
    if(data.urlToImage !== null){
      return (
        <div className='newsBox p-6 m-8 max-lg:m-4 rounded-2xl shadow-2xl' key={key}>
          <div className='h-[460px] max-xl:h-[350px] max-lg:h-[310px] max-md:h-[220px] flex flex-col items-center'>   
           <img src={data.urlToImage} alt="newsImg" className='h-[250px] max-xl:h-[180px] max-lg:h-[150px] max-md:h-[100px]' />
           <h4 className='text-[1.45rem] text-center font-bold mt-4 max-xl:text-sm max-lg:text-xs max-md:text-[0.5rem]'>{data.title}</h4>
           <h2 className='text-[1.3rem] max-xl:text-sm max-lg:text-xs text-center font-medium mt-6 max-md:mt-3 max-md:text-[0.5rem]'>-{data.author}</h2>
          </div>
          <footer className='text-center mt-2'>
            <a href={data.url} target='_blank' rel="noreferrer"><button className='px-6 py-4 bg-slate-800 text-xl max-xl:text-sm max-xl:py-3 
             max-lg:text-[0.5rem] max-lg:px-4 max-lg:py-1 max-md:text-[0.35rem] max-md:px-2 max-md:py-[0.15rem] text-white'>
              Read full article...</button>
            </a>
          </footer>
        </div>
      )
    }
  })

  return (
    <>
    <div className='flex justify-center'>
     <div className="container grid grid-cols-3 max-md:grid-cols-2 mt-4">
        {news}
     </div>
    </div>
    </>
  )
}
