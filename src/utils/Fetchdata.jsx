import { Axios } from "axios";

export const Fetchdata = async () => {
   
    try {
      const res = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError(" Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };