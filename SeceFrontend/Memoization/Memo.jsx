import useState  from "react";
import updateNumber from "./UpdateNumber";
import updateText from "./UpdateText";

const Memo=()=>{
    var[num,setNum]=useState(0);
    return(
        <div>
            <h2>This page is ment for Optimization Process using React.memo</h2>
            <UpdateNumber value={{num}}/>
            <button onClick={()=>setNum(num+1)}>+</button>
            <UpdateText />
        </div>
    );
};
export default Memo;