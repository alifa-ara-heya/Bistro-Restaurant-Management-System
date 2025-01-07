import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    /*  const [menu, setMenu] = useState([]);
     const [loading, setLoading] = useState(true)
     // console.log(`${import.meta.env.VITE_API_URL}/menu`);
     useEffect(() => {
         // fetch('menu.json')
         fetch(`${import.meta.env.VITE_API_URL}/menu`)
             .then(res => res.json())
             .then(data => {
                 setMenu(data)
                 setLoading(false)
             })
     }, []) */

    // we will use tanstack query so that we can refetch the data when delete a menu item
    const axiosPublic = useAxiosPublic();
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    });

    // Ensure `refetch` is returned correctly
    // console.log("useMenu refetch:", refetch); // Add this for debugging

    return [menu, loading, refetch]
};

export default useMenu;