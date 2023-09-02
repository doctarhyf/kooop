import { useEffect, useState } from "react";
import { LoggedInUser } from "../db/db";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/utils";

export default function PageLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = LoggedInUser();

    if (user) navigate(ROUTES.HOME.path);
  }, []);

  return <div>Login</div>;
}
