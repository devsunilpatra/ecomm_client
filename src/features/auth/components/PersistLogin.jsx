import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import api from "../../../services/api";
import { setAccessToken } from "../authSlice";
import PageSkeleton from "../../../components/ui/loadingSkeleton/PageSkeleton";

const PersistLogin = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const verify = async () => {
    try {
      console.log("Calling refresh...");

      const res = await api.get("/users/refresh");

      console.log("Refresh success:", res.data);

      dispatch(setAccessToken(res.data.accessToken));

    } catch (error) {
      console.log(
        "Refresh failed:",
        error?.response?.data || error
      );
    } finally {
      setLoading(false);
    }
  };

  verify();
}, [dispatch]);

  if (loading) {
   return <PageSkeleton />;
  }

  return <Outlet />;
};

export default PersistLogin;
