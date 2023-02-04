const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU" />
      </h1>
      <div>
        <input type="text" />
        <button>search</button>
      </div>
      <span className="icon"><img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"/></span>
    </div>
  );
};

export default Header;
