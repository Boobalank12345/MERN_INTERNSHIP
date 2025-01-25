import {Suspense} from "react";
const LazyLoadingWithSuspense = () =>{
    return(
        <Suspense>
            <div>
                <h1>This is LazyLoading Component with Suspense</h1>
            </div>
        </Suspense>
    )
}
export default LazyLoadingWithSuspense;