import React from 'react';
import {AiFillFacebook} from "react-icons/ai/";
import {AiFillTwitterCircle} from "react-icons/ai/";
import {AiFillInstagram} from "react-icons/ai/";
import { IconContext } from "react-icons";




class SocialMedia extends React.Component{

  
    render(){

        return(

            <div>
                
            <table>
                <tbody>
                    
                    <tr><IconContext.Provider value={{ size: "5em" }}>
                        <div>
                        
                        <td><AiFillFacebook width="100" height="100"><a href="https://facebook.com/freddybihozagara"/></AiFillFacebook> </td>
                        <td><AiFillInstagram width="100" height="100"><a href="https://instagram.com/freddybihozagara"/></AiFillInstagram> </td>
                        <td><AiFillTwitterCircle width="100" height="100"><a href="https://twitter.com/Fbihozagara"/></AiFillTwitterCircle> </td>
                    </div>
                    </IconContext.Provider>
                    
                    </tr>
                    
                    <tr>
                        <td><img src='https://unsplash.it/200/200?gravity=west' alt=''/></td>
                        
                    </tr>
                </tbody>
            </table>

            </div>



            
        )
    }
}


export default SocialMedia;