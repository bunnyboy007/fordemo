
import Portfolio from "../reusedcomponent/Portfolio"
import InnerBanner from "./InnerBanner";

export default function Page(){
    return(
        <>
         <InnerBanner/>
         
      
      <section className="portfolio" >
       <Portfolio/>
      </section>
   

        </>
    )
}