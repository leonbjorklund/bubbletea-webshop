import { Link } from "react-router-dom";

export function Header() {

  return (
    <header style={headerStyle}>
      <h1>I'm the header!</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
        <Link to="checkout">Cart</Link>
        <Link to="admin">Admin Page</Link>
      </div>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  height: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'pink',
};