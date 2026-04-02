import { useState } from "react";
import Nav from "./Nav";

export default function Header({getKeywords}) {
//  const onChangeHandler = (event) => {
//         // return console.log(event.target.value);
//        const value = event.target.value === '' ? false : true;
//         setKeywords(event.target.value);
//         setActive(value);
//     }
const [active, setActive]=useState(true);
 const [keywords, setKeywords] = useState('');
// const handleClick=()=>{
//     return console.log("clikced");
// }                
//     function handleClick(){
//   return console.log("clikced");
//     }
return (
    <>
    <header style={{background:`${active ? "red":"pink"}`}}>
    <div className="logo">
    {/* //  onClick={handleClick}
    // onPointerEnter={()=> console.log("Pointer enter")} */}
        Awesome News</div>
    <input type="text"
    onChange={getKeywords}
    onFocus={()=> console.log('Focused')}
    onBlur={()=> console.log('Blurred')}
    />
    {/* <p>The Keywords are:{keywords}</p> */}
  <Nav/>
    </header>
    </>
);
  
}