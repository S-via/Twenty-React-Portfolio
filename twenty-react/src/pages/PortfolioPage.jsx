/* titled images of six of the developer’s applications 
with links to both the deployed applications and the corresponding GitHub repositories  */
import React from 'react';
import myImage from '../assets/blogyou.png'
export default function Portfolio() {
    return(
        <div>
            <h3>Portoflio Title</h3>
           {/*  add hover css over images */}
           {/* fix sizing image  */}
            <a href ="https://s-via.github.io/Four-Personal-Blog/">
            <img src ={myImage} atl='myImage'/>
            </a>
            <p> 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 
                this is portfolio page content 

            </p>
        </div>
    )
}