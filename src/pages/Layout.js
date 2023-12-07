import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const imageUrl = './logo.png';
  return (
    <>
      <nav>
      <img src={imageUrl} alt="Logo" className="logo"/>    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Organigramme">Organigramme</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;