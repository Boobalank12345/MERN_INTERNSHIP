import { useState } from "react";
const ExamResults =(res)=>{
    
    return(
        <div>
            <h3>Result published and your SGPA is {res.sgpa},CGPA is {res.cgpa} </h3>
        </div>
    )
}
export default ExamResults;