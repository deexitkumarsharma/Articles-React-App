function Counter() {
  return (
    <>
      <Component />
    </>
  );
}

function Component() {
  return (
    <>
      <div className="header">
        <h1 className="heading">All Articles</h1>
        <h3 className="sub-heading">Collection of Best Articles on StartUps</h3>
      </div>
      <DivHolder />
    </>
  );
}

function DivHolder() {
  return (
    <>
      <div className="card-holder">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="inner-div">
          <div className="image-holder">
            <div className="time">
              <p>27</p>
              <p>Mar</p>
            </div>
          </div>
          <div className="text-holder">
            <h3 className="div-heading">City Lights In New York</h3>
            <h4 className="div-sub-heading">The City That Never Sleep</h4>
            <p className="para">
              New York, the largest city in the U.S., is an architectural marvel
              with plenty of historic monuments, magnificent buildings and
              countless dazzling skyscrapers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
