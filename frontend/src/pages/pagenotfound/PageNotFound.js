import React from 'react'
import noFoundLogo from "../../img/404.png"
import "./pagenotfound.css"
import HeadTabar from "../../components/HeadTabar";

const PageNotFound = () =>{
   return(
       <div>
           <HeadTabar/>
       <div className="page-not-found">
          <div className="nofound-content">
             <img className="nofound-logo" src={noFoundLogo}/>
             <div className="describe">
                <h1>页面没找到... ...</h1>
             </div>
          </div>

       </div>
       </div>
   )
}


export default PageNotFound;