import Logo from "./assets/logo.svg";
import ButtonContainer from "./containers/ButtonContainer";
import "./App.css";

function App() {
  return (
    <div
      className="
        bg-black
        pt-45
        h-screen
        w-screen
        "
    >
      <nav className="mx-auto w-max">
        <img
          className="
          min-w-logo
          max-w-logo
        "
          src={Logo}
          alt="Aster logo"
        />
      </nav>
      <body className="mx-auto w-max text-center">
        <div>
          <h1
            className="
              text-brand
              font-butler
              text-white
            "
          >
            Aster
          </h1>
          <h2
            className="
            text-primary
              font-visbyCF
              font-bold
            "
          >
            Based, in Bharat 🇮🇳
          </h2>
        </div>
        <hr className="border-white" />
        <div>
          <h3
            className="
            text-gray
            text-lg
            font-visbyCF
            font-medium
            "
          >
            Affordable, beautiful and functional design
          </h3>
          <h4
            className="
            text-gray
            text-base
            font-visbyCF
            italic
            "
          >
            Stat tuned, new website coming soon!
          </h4>
        </div>
        <div className="mx-auto w-max">
          <ButtonContainer />
        </div>
      </body>

      {/* <div className="App">
        <header className="primary App-header">
          <img src={Logo} className="App-logo" alt="logo" />
        </header>
      </div> */}
    </div>
  );
}

export default App;
