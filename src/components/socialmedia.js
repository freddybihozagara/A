import React from 'react';
import facebook from './facebook_.png';
import instagram from './instagram.png';
import twitter from './twitter_.png';


class SocialMedia extends React.Component{





    render(){

        return(

            <div>

            <table>
                <tbody>
                    <tr>
                        <td><img src={facebook} alt=""/></td>
                        <td><img src={instagram} alt=""/></td>
                        <td><img src={twitter} alt=""/></td>
                    </tr>
                </tbody>
            </table>

            </div>



            
        )
    }
}


export default SocialMedia;