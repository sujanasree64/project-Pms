import axios from "axios";

class AddressService{
    getAllAddress(){ 
        return axios.get("http://localhost:8050/policy/pms/findalladdress");
    }
    createAddress(address){
        return axios.post("http://localhost:8050/policy/pms/saveaddress",address);
    }

}
export default new AddressService();