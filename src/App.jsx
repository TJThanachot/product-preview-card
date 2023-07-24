import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="bg-cream flex justify-center items-center w-[100vw] h-[100vh] font-[Montserrat]">
      <div className="h-auto w-[40%] flex rounded-lg max-sm:flex-col max-sm:w-[90%] ">
        {/* left content */}
        <section className="w-1/2 max-sm:w-[100%] max-sm:min-h-[29rem] max-sm:h-[29rem]">
          <img
            className="sm:rounded-l-lg min-h-full min-w-full object-cover max-sm:-h-[29rem]  max-sm:rounded-t-lg"
            src="/src/assets/images/image-product-desktop.jpg"
            alt=""
          />
        </section>

        {/* right content */}
        <section className="sm:rounded-r-lg max-sm:rounded-b-lg w-1/2 max-sm:w-[100%] p-[2rem] bg-white flex flex-col justify-between gap-2 text-DarkGrayishBlue">
          <p>P E R F U M E</p>
          <div className="font-[Fraunces] font-extrabold text-3xl text-VeryDarkBlue">
            <p>Gabrielle</p>
            <p>Essence Eau</p>
            <p>De parfum</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tempore, dicta quaerat doloremque aut odit.
          </p>
          <div className="flex justify-around items-center flex-wrap">
            <div className="font-[Fraunces] font-extrabold text-3xl text-DarkCyan">
              $149.99
            </div>
            <div>
              $169.99
              <div className="relative top-[-12px] border-t-[1px] border-DarkGrayishBlue"></div>
            </div>
          </div>
          <button className="bg-DarkCyan w-[100%] h-12 rounded-lg text-white flex flex-wrap justify-center items-center gap-2">
            <img src="/src/assets/images/icon-cart.svg" alt="" />
            <p>Add to cart</p>
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
