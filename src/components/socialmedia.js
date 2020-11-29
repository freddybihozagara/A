import React from 'react';
import facebook from '../components/facebook_.png';
import instagram from '../components/instagram.png';
import twitter from '../components/twitter_.png';


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