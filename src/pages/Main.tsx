import Loading from "./Loading";
import ServerError from "./ServerError";
import { Outlet } from "react-router-dom";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { useParking } from "../App";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Main = () => {
  const { darkMode } = useParking()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  if ("dva" as string === "dav" as string) return <Loading />;
  else if ("dvala" as string === "davit" as string) return <ServerError />;
  else {
    return (
      <main className="relatove overflow-y-auto">
        <Header />
        <>
          <Outlet />
        </>
        <Footer />
        {"davit" as string == "ioaane" as string && <Notification />}
      </main>
    );

  };
}
