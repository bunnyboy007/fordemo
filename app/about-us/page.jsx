

import InnerBanner from "./InnerBanner";
import AboutusSection from "../reusedcomponent/AboutUs";
import Facts from "../reusedcomponent/Facts";

export default function Page(){
    return(
        <>
        <InnerBanner/>
        <AboutusSection/>
        <div className="mb-5">
        <Facts/>

        </div>
        
        </>
    )
}