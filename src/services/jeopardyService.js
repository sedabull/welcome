import axios from 'axios';

class JeopardyService {
    
    constructor() {
        this.client = axios.create();
        this.url = 'http://jservice.io/api/';
    }//end constructor

    getRandomQuestion(){
        return this.client.get(this.url + 'random').then(res => res.data[0]);
    }//end getQuestion

}//end JeopardyService

export default JeopardyService;