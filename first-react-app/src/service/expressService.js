import axios from 'axios';

function expressService(){
    axios.get('http://localhost:3002/test').then(
            response => {
                console.log('this is express response ',response.data);
            }
        ).catch(error => {
            console.error(error);
        })
}

export default expressService