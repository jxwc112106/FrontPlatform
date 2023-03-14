import axios from "../utils/network"



const api = {
    getVerificationCode() {
        return axios.get("103.233.253.29:8080/backend/getvarifacationcode")
    }
}

export default api