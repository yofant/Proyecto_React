const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                <i class="bi bi-house-fill"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Formulario">
                <i class="bi bi-ui-checks"></i>
                  Formulario
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Saludo ">
                <i class="bi bi-person-arms-up"></i>
                  Saludo
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  };
  export default NavBar;
   