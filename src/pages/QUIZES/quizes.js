import './quize.css'
import {list} from './quizedata.js'
const Quizes=()=>
{
    const lis=list.map((items)=>
    {
        return (
        <>
        <div className='box1'>
        <img src={items.image} className='img1'/> 
        <h2 className="subt">{items.name} <button className="cbtn">{items.btn}</button></h2>
       </div>
        </>        
        )
    })
    return <div className='flex1'>{lis}</div>
}


export default Quizes;