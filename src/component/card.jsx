import { useState } from "react";


function Card({id,name,info,image,price,removetour}){ // yha bhi direct props bhi likh sakte hai but aisa bhi likh sakte hai

    const [readmore,setreadmore]=useState(false); // jese hi read more pe click kiya to ui me change hua to usestae kaa use kiya usko starting me false de diya 
    const description= readmore ? info : `${info.substring(0,200)}...`; // hume ek hi bar me puri string nhi dikhani hai isliye 200 character ki substring nikal li ab usko pehle dikhayenge baki ki readmore pe click krne ke baad dikhayenge // now agr readmore true hai mtlb readmore pe click hua pda hai to puri ifno dikha do otherwise substring dikha do

    function readmoreHandler(){ // readmore pe click kiya to remaning data dikhta hai isliye uspe event listner lagaya jo ki readmore ki value ko toggle krta hai i.e readmore pe click kiya to readmore ko true kr dega aur bs slow less dikhega
         
        setreadmore(!readmore);
    }
        return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price ">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">  
                    {description} 
                    <span className="read-more" onClick={readmoreHandler}> 
                        {readmore ? `show less` : `read more`}
                    </span>

                </div> 
            </div>

            <button className="btn-red" onClick={()=>removetour(id) } >   
                Not Intrested 
            </button> 
            
        </div> // span ka use kiya taki readmore ko blue kr sake usme terniry operation ka use kiya that is if readmore true hai to shoeless dikhao otherwise readmore dikhao
    ) // not intrested pe click krne se tour gyb ho jata hai to uspe ek eventlistner lagayenge removetour idhr props to denge but function idhr nhi likh sakte becz hum card ke ander hai actually tour ke ander card hai so tour ko delete krne ke liye wha jana padega jha t=sare tours present ho i.e app.js
}

export default Card;