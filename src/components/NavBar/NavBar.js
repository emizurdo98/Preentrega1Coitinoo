import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>bebidas vip</h3>
      <div>
        <button>wisky</button>
        <button>tequilas</button>
        <button>otros</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
