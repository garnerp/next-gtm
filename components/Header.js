import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <a href="/" style={linkStyle}>
      Home
    </a>

    <a href="/about" style={linkStyle}>
      About
    </a>
  </div>
);
/*
<Link href="/">
<a href="/" style={linkStyle}>Home</a>
</Link>
<Link href="/about">
<a href="/about/" style={linkStyle}>About</a>
</Link>
*/
export default Header;
