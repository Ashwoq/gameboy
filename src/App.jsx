import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import tickIcon from "./assets/tick.svg";
function App() {
  const [sceneUrl, setSceneUrl] = useState(import.meta.env.VITE_ORIGINAL_URL);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    setShowProgress(true);
    const timer = setTimeout(() => {
      setShowProgress(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const resetProgress = () => {
    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 4500);
  };

  const isToonyTheme = sceneUrl === import.meta.env.VITE_TOONY_URL;

  const isOriginalTheme = sceneUrl === import.meta.env.VITE_ORIGINAL_URL;
  return (
    <div className="outerDiv">
      {showProgress && (
        <div className="progress">
          <div className="frontLoader">
            <div className="svg-container">
              <svg
                className="svg-animation"
                viewBox="0 0 535 478"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="grad"
                    cx="5%"
                    cy="95%"
                    r="100%"
                    fx="5%"
                    fy="95%"
                  >
                    <stop
                      offset="0%"
                      style={{
                        stopOpacity: 1,
                        animation: "rotate-gradient 4s infinite linear",
                        WebkitAnimation: "rotate-gradient 4s infinite linear",
                      }}
                    />
                    <stop
                      offset="25%"
                      style={{
                        stopOpacity: 1,
                        animation: "rotate-gradient 4s infinite linear",
                        WebkitAnimation: "rotate-gradient 4s infinite linear",
                        animationDelay: "0.2s",
                        WebkitAnimationDelay: "0.2s",
                      }}
                    />
                    <stop
                      offset="50%"
                      style={{
                        stopOpacity: 1,
                        animation: "rotate-gradient 4s infinite linear",
                        WebkitAnimation: "rotate-gradient 4s infinite linear",
                        animationDelay: "0.3s",
                        WebkitAnimationDelay: "0.3s",
                      }}
                    />
                    <stop
                      offset="75%"
                      style={{
                        stopOpacity: 1,
                        animation: "rotate-gradient 4s infinite linear",
                        WebkitAnimation: "rotate-gradient 4s infinite linear",
                        animationDelay: "0.4s",
                        WebkitAnimationDelay: "0.4s",
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopOpacity: 1,
                        animation: "rotate-gradient 4s infinite linear",
                        WebkitAnimation: "rotate-gradient 4s infinite linear",
                        animationDelay: "0.5s",
                        WebkitAnimationDelay: "0.5s",
                      }}
                    />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#grad)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M317.659 1.99999C317.659 1.99999 84.2631 132.327 1 476C138.49 340.946 193.655 287.93 234.805 253.564C229.756 262.265 225.573 392.408 231 403C236.427 413.592 277.178 476 277.178 476C277.178 476 263.982 454.566 257.505 382.184C251.028 309.801 265.828 227.513 265.828 227.513C271.214 223.366 283.75 213.51 283.75 213.51C270.75 262.863 271.503 372.348 272.638 382.184C273.773 392.019 289.284 476 289.284 476C337.49 347.044 452.302 155.492 453.478 156.722C454.066 157.337 449.62 151.283 443.325 142.712L443.322 142.709C437.028 134.139 427.809 123.052 421 113.596C428.922 107.488 437.897 101.191 445.959 94.7633L445.963 94.7603C469.856 75.7103 522.455 38.9654 526.873 35.6681C531.292 32.3707 534.008 31.0009 534 30.6552C533.99 30.25 530.971 31.521 525.875 33.9578C498.129 47.2265 408 95.5 408 95.5C404.722 91.8542 402.028 88.3582 399 85C357.569 37.1356 356.333 35.0824 329.25 1.99999C317.191 69.1028 306.441 107.137 287.5 178.5L270.75 193.444L317.659 1.99999ZM300.634 392.776L298.743 384.453C297.716 315.207 311.39 193.295 314.632 191.706C317.875 190.117 367.547 153.385 400.378 129.442L420.185 156.722C366.487 244.91 340.512 297.167 300.634 392.776ZM66 370.787C145.009 291.752 185.456 256.589 216.583 231.95C222.931 226.925 237.514 215.137 237.708 214.053C237.903 212.968 273.458 72.5035 273.458 72.5035C179.884 155.04 138.317 225.837 66 370.787ZM320.307 156.343L386.5 110L344.52 59.1222L333.549 107.165L320.307 156.343Z"
                  stroke="black"
                  style={{ animation: "shadow 5s infinite linear" }}
                />
              </svg>
            </div>
            <div className="card">
              <span></span>
            </div>
            <div className="textBox">
              <div className="heading">
                <span style={{ fontFamily: "Pixelify Sans, sans-serif" }}>
                  GAMEBOY
                </span>
                <span style={{ fontFamily: "Bangers, system-ui" }}>
                  &nbsp;AD&nbsp;
                </span>
              </div>
              <div className="dot">&nbsp;.</div>
              <div className="dot">&nbsp;.</div>
              <div className="dot">&nbsp;.</div>
            </div>
          </div>
        </div>
      )}

      <Spline scene={sceneUrl} />
      <div className="boxContainer">
        <div className="box">
          <button
            className="evenboxinner"
            onClick={() => {
              resetProgress();
              setSceneUrl(import.meta.env.VITE_TOONY_URL);
            }}
          >
            Toony Theme
            {isToonyTheme ? (
              <img src={tickIcon} alt="Tick" className="tickIcon" />
            ) : (
              " . . ."
            )}
          </button>
          <button
            className="theme-button"
            onClick={() => {
              resetProgress();
              setSceneUrl(import.meta.env.VITE_ORIGINAL_URL);
            }}
          >
            Original Theme
            {isOriginalTheme ? (
              <img src={tickIcon} alt="Tick" className="tickIcon" />
            ) : (
              " . . ."
            )}
          </button>
        </div>
        <div className="lft">CLICK & DRAG TO INTERACT 🔊 . . .</div>
      </div>
    </div>
  );
}

export default App;
