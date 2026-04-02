// import "./componenets/header/Header";
import Header from "./componenets/header/Header";
import NewsList from "./componenets/NewsList";
import { newsData } from "./utils/data";
import "./styles.css";
import { useState } from "react";


export default function App() {
 const [news, setNews] = useState(newsData)
 const getKeywords = (event)=>{
   let keywords=(event.target.value);
   let filtered = newsData.filter(item =>{
    return item.title.indexOf(keywords)>-1;
   })
   setNews(filtered)
 }
  return(
    <>
    <Header getKeywords={getKeywords}/>
    <NewsList news={news}/>
    
    </>
  )
}