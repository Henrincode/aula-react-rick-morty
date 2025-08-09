import { Outlet, Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-center">Projeto Rick and Morty</h1>
        <Menu />
        <Outlet />
      </div>
    </>
  );
}
