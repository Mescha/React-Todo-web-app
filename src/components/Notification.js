import React, {useState, useEffect} from 'react'
import { requestForToken, onMessageListener } from '../firebase';
import axios from 'axios'; 
import firebase from 'firebase/compat'
import moment from 'moment';
import TimePicker from 'react-time-picker';


function  Notification() {
  const [notification, setNotification] = useState({title: '', body: ''});
  

  requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({title: payload.notification.title, body: payload.notification.body});
      console.log(payload);     
    })
    .catch((err) => console.log('failed: ', err));

 // axios api request FCM serveru i notifikacija bez upotrebe firebase console    
/*
 function  sendNotify() {
      const postData = function (url, payload) {
        return axios.post(url, payload, config);
    };
    let config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : "key= AAAAkb_oc1g:APA91bHy2dk9nY5NxAA-6cagGb_B3mDWGTZ3jq_h00vH0-hvx1q_foe5KRsKxcImAEUVPBgKApSgYuOahXbbEnUIPcGFjycSNwgzxvMsJLbo7pby9pkriLRQ2NQUB33DNIGJQBeEhE38"
        }
    };
    let body =  {
      "to": "dm2ty2pKsOEr2XJinsZb25:APA91bFgM5HA_GfjcF8DjMLqMTN9ry7thirK-L34y3fNz87CKp4Lw70ZNNIbRe2NcPSsoiZcWpeDoiHMEdGrZVaar_ufiacAseruatkFff01vZgjyTBaj32xpg934_LR9rmGw2V8xsqb",
      "notification": {
          "title": "Task reminder!!!",
          "body": "Notification",
          //"mutable_content": true,
          
      }
    };
    postData("https://fcm.googleapis.com/fcm/send",body).then((d)=>{
    console.log("d",d)
    }).catch((e)=>{
    console.log("e",e);
    });
     
    };
  */  

/*  
//svaki minut salje obavijest( moze se specificirati na odredjeni vremenski period da salje notifikacije(svaki sat i slicno tome))     
 const MINUTE_MS= 60000;
 useEffect(() => {
  const interval = setInterval(() => {
    console.log('Logs every minute');
    sendNotify();
  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])
*/

// mogucnost slanja notifikacije u tacno odredjeno vrijeme 
   // new Date(year, monthIndex(0-11), day, hours, minutes, seconds, miliseconds)
/*
   let customTime = new Date (2022,4,16,19,13).getTime() - Date.now();
 let timeout = setTimeout (
       function(){
         sendNotify();
       }, customTime
 );

 */


 
  //Razlika u ms izmedju odabranog vremenena i trenutnog vremena
  /*const [value, onChange] = useState('22:00');
    
      const currentTime = new Date();
      const pomoc = currentTime.getHours() + ':' + currentTime.getMinutes();

      console.log(pomoc);
      let ds = Number(pomoc.split(':')[0]) * 60 * 60 * 1000 + Number(pomoc.split(':')[1]) * 60 * 1000;
      
      console.log(ds);
      //dobra stvar pravo converter string u ms 
      let ms = Number(value.split(':')[0]) * 60 * 60 * 1000 + Number(value.split(':')[1]) * 60 * 1000;
      console.log(ms); ;
      //
      
       let diference = ms - ds;
        console.log(diference);

        let timeout = setTimeout (
          function(){
            sendNotify();
          }, diference
    );
   */
        /*useEffect(() => {
        const interval = setInterval(() => {
          console.log('Logs on time');
          sendNotify();
        }, diference);
      
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])
  */


 
       return(
           
         <div className='pickTimeToNotify'>
              <p></p>
         {    // <TimePicker onChange={onChange} value={value}  />   
               }    
              
           </div>
    
       

        
      );
    
}


export default Notification

