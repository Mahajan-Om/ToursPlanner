// abhi hum tour me hai aur yha card ko use kr rhe hai to usko import bhi krna padega
import Card from './card'

function Tours({tours,removetour}){ // app.js se tours wala prop le liya // biche wale ke div ke ander 7 card create krne se achha map function ka use karo aur jo tours ka data hai jisme array hai aur each index pe sare cards ki info hai map function ka use karo jisse har ek index ko access kr pao
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Tour With OM </h2> 
            </div>


        
            <div className='cards'>
                {
                        tours.map((tour)=>{  // har ek tour ke liye card return kr diya  
                            return <Card key={tour.id} {...tour} removetour={removetour} ></Card>  // har ek card me jo tour ki value thi usko copy/clone kr diya as a prop // humare pass app.js se remove tour wala function aaya ab usko card.js me execute krna hai to usko phirse as a prop bhej denege card component me aur  tour function define krte time removetour as a parameter bhi lena padega tabhi usko use kr payenge as a prop // jb bhi map lagao kisis bhi list pe to always key pass karo jisme ek unique identifier hoga here id (good practice).if we don't have any unique identifier so pass index as key={index} 
                        })
                    }
            </div>

        </div>
    );
}

export default Tours;