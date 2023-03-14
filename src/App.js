import Logo from "./assets/logo.svg";
import Flag from "./assets/flag.png";
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
        -z-50
        "
    >
      <nav className="mx-auto w-max z-50">
        <img
          className="
          min-w-logo
          max-w-logo
        "
          src={Logo}
          alt="Aster logo"
        />
      </nav>
      <body className="mx-auto w-max text-center z-50 relative">
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
          <div className={'flex justify-center items-end mt-3'}>
            <h2
                className="
            text-primary
              font-visbyCF
              font-bold
            "
            >
              Based, in Bharat
            </h2>
            <img className={'flag-image'} src={'https://em-content.zobj.net/thumbs/120/whatsapp/326/flag-india_1f1ee-1f1f3.png'} alt={'flag'} />
          </div>
        </div>
        <hr className="border-white rounded-small" />
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
            Stay tuned, new website coming soon!
          </h4>
        </div>
        <div className="mx-auto w-max">
          <ButtonContainer />
        </div>
      </body>
      <img
        id="background-logo"
        className="
        w-screen
        h-auto
        fixed
        opacity-5
        z-0
      "
        src={Logo}
        alt="background logo"
      />
    </div>
  );
}

export default App;
