import React from 'react';
import {AiFillFacebook} from "react-icons/ai/";
import {AiFillTwitterCircle} from "react-icons/ai/";
import {AiFillInstagram} from "react-icons/ai/";




class SocialMedia extends React.Component{

  
    render(){

        return(

            <div>
                
            <table>
                <tbody>
                    
                    <tr>
                        
                        <td><AiFillFacebook><a href="https://facebook.com/freddybihozagara"/></AiFillFacebook> </td>
                        <td><AiFillInstagram><a href="https://instagram.com/freddybihozagara"/></AiFillInstagram> </td>
                        <td><AiFillTwitterCircle><a href="https://twitter.com/Fbihozagara"/></AiFillTwitterCircle> </td>
                    
                    
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