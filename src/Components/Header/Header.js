import React from 'react'
import Styles from './Header.module.css'
import { Button, notification } from 'antd';
function Header() {

    const openNotification = () => {
        notification.open({
          message: 'Approach',
          description:
            'I have used NPM package "string-similarity" for finding similar Quotes',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    return (
       
        
        <div className={Styles.header}>
       
            <div className={Styles.text} onClick={()=>{window.location.reload()}}>
                Quotes Generator!
            </div>
            <div className={Styles.text}>
                <Button type="primary" onClick={openNotification}>
                  Approach I used
                 </Button>
           
            </div>
       </div>
      
    )
}

export default Header
