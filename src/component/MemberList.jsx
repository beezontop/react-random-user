import React from 'react';
import Member from './Member';

const MemberList = (props) => {

    

    return ( 
        <ul >
            {props.data.map((item) => <Member key={item.login.username} data={item} />)}
        </ul>

     );
}
 
export default MemberList;