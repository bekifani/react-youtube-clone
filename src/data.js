export const API_KEY = 'AIzaSyBw7Rd18wxvhbNb_76o2okJD0Cx53MK7ok';

export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + "M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}