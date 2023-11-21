import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>
          
        <img src="https://www.svgrepo.com/download/13644/avatar.svg" alt="" />
        </span>
        <span>

        <p> Academy Hub</p>
        <h3>ENTERPRISE PLAN</h3>
        </span>

      </div>
      <div className="dashboard">
      <h3>Dashboard</h3>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
       
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Acedemy</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
