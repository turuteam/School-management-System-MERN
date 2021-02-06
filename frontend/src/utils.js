//import {API_BASE_URL} from './api'
import moment from 'moment';
import {  toast } from 'react-toastify';

export const successAlert = (text) => {
    return  toast.success(text, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })  
}

export const errorAlert = (text) => {
    return  toast.error(text, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })  
}


export const  getID = function () {
    return  Math.random().toString(36).substr(2, 9);
  };

export const getTrimString = (str, length) => {
     if(str.length > length){
       return str.substr(0, length) + '...';
     }
    return str
}  

export const getCapitalize = (string) => {
    if(string){
        return string.charAt(0).toUpperCase() + string.substring(1);
     }
    else return 0;  
}

export const getLowerCase = (string) => {
    if(string){
        return  string.toLowerCase()
    }
    else return 0;
    
}

export const getIntial = (name ) => {
    return name.slice(0, 1).toUpperCase();
}

export const getImgSrc = () => {
     return `http://localhost:5000/consumerPhotos`
}


export const  timeStamp = (time) => {
  if( (moment().format('dddd')) ===  moment(time).format('dddd')){
       return `Today ${moment(time)?.format('h:mm a')}`
  }
  else if(moment().subtract(1, 'days').format('dddd') ===  moment(time)?.format('dddd')){
      return `Yesterday ${moment(time)?.format('h:mm a')}`
  }
  else{
       return moment(time)?.format('dddd,  h:mm a')
  }

}
