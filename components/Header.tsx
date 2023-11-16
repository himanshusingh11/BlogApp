import Nav from "./Nav";

function Header(props: HeaderComponent) {
  return (
    <header className="flex w-full flex-col bg-[#010101] py-5">
      <Nav />
    </header>
  );
}

Header.defaultProps = {
  tag: "Himanshu",
  title: "",
};

interface HeaderComponent {
  tag?: string;
  title?: string;
}

export default Header;
