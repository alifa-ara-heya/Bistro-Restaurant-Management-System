import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-restaurant-ms-server-7dv31qurj-alifa-ara-heyas-projects.vercel.app',

})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;