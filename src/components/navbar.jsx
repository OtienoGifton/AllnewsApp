import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  const ChangeMode = () => {
    document.body.classList.toggle("dark");

    const micon = document.getElementById("mode-icon");

    if (micon.classList.contains("fa-moon")) {
      micon.classList.remove("fa-moon");
      micon.classList.add("fa-sun");
    } else {
      micon.classList.remove("fa-sun");
      micon.classList.add("fa-moon");
    }
  };

  const ChangeModemobile = () => {
    document.body.classList.toggle("dark");

    const micon = document.getElementById("mode-icon");

    if (micon.classList.contains("fa-moon")) {
      micon.classList.remove("fa-moon");
      micon.classList.add("fa-sun");
    } else {
      micon.classList.remove("fa-sun");
      micon.classList.add("fa-moon");
    }

    let bar = document.getElementById("menu-bar");

    bar.classList.remove("showmenu");
  };

  function ToggleBar() {
    let bar = document.getElementById("menu-bar");

    bar.classList.toggle("showmenu");
  }

  function Removebar() {
    let bar = document.getElementById("menu-bar");

    bar.classList.remove("showmenu");
  }

  function Totop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <nav className="nav-bar">
      <div className="appname">
        <Link to="/">
          <i className="fa-solid fa-house-user house"></i>
        </Link>
        <p onClick={Totop}>
          <i className="fa-solid fa-search searching">
            <span> &nbsp;&nbsp; search</span>
          </i>
        </p>
      </div>

      <div>
        <div className="mobile-menu">
          <i onClick={ToggleBar} className="fa-solid fa-bars"></i>
        </div>
        <div id="menu-bar" className="mobile-menu-list">
          <p className="close-menu">
            <i onClick={Removebar} className="fa-solid fa-xmark"></i>
          </p>
          <Link to="/homepage" onClick={Removebar}>
            Home
          </Link>
          <Link to="/moviepage" onClick={Removebar}>
            Movies
          </Link>
          <Link to="/musicpage" onClick={Removebar}>
            Music
          </Link>
          <Link to="/bookpage" onClick={Removebar}>
            Books
          </Link>
          <Link to="/techpage" onClick={Removebar}>
            Technology
          </Link>
          <Link to="/footballpage" onClick={Removebar}>
            Football
          </Link>
          <Link onClick={ChangeModemobile}>Editors</Link>
          <Link to="/favorite" onClick={Removebar}>
            Favorites
          </Link>
        </div>
      </div>

      <div className="navbrand">
        <Link to="/homepage" className="nav-link">
          Home
        </Link>
        <Link to="/moviepage" className="nav-link">
          Movies
        </Link>
        <Link to="/musicpage" className="nav-link">
          Music
        </Link>
        <Link to="/bookpage" className="nav-link">
          Books
        </Link>
        <Link to="/techpage" className="nav-link">
          Technology
        </Link>
        <Link to="/footballpage" className="nav-link">
          Football
        </Link>
        {/* <Link to="/editorspage" className="nav-link">
          Editors
        </Link> */}
        <Link to="/favorite" className="nav-link">
          Favorites
        </Link>
      </div>

      <div className="navbrand">
        <p className="mode-btn" onClick={ChangeMode}>
          <i id="mode-icon" className="fa-solid fa-moon"></i>
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
