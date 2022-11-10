import axios from "axios";

class UserService{
    getAllUsers(){
        return axios.get("http://localhost:8050/policy/pmsuser/listusers");
    }
    createUser(user){
        return axios.post("http://localhost:8050/policy/pmsuser/saveuser",user);
    }
    deleteUser(id){
        return axios.delete("http://localhost:8050/policy/pmsuser/deleteuserid/"+id);
    }
    updateUser(user,userId){
        return axios.put("http://localhost:8050/policy/pmsuser/updateuser/"+userId,user);
    }
    getUser(id){
        return axios.get("http://localhost:8050/policy/pmsuser/findbyuserid/"+id);
    }

}
export default new UserService();