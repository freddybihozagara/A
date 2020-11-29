import React from 'react';



class SocialMedia extends React.Component{





    render(){

        return(

            <div>

            <table>
                <tbody>
                    <tr>
                        <td><img src={require('../facebook_.png')}  alt=""/></td>
                        <td><img src= {require('../instagram.png')} alt=""/></td>
                        <td><img src= {require('../twitter_.png')} alt=""/></td>
                    </tr>
                </tbody>
            </table>

            </div>



            
        )
    }
}


export default SocialMedia;