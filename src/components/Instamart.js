import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black m-2 p-3">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <div>
        <button
          onClick={() => {
            setIsVisible(false);
          }}
          className="cursor-pointer underline"
        >
          hide
        </button>
        <p>{desc}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className="cursor-pointer underline"
        >
          show
        </button>
      )}
      {/* {isVisible && <p>{desc}</p>} */}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState("about");
  return (
    <div>
      <h1 className="font-bold text-3xl">Instamart</h1>
      <Section
        title={"AboutInstamart"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(isDisplay) => {
          if (isDisplay) {
            setvisibleSection("about");
          } else {
            setvisibleSection("");
          }
        }}
      />
      <Section
        title={"TeamInstamart"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(isDisplay) => {
          if (isDisplay) {
            setvisibleSection("team");
          } else {
            setvisibleSection("");
          }
        }}
      />
      <Section
        title={"Careers"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(isDisplay) => {
          if (isDisplay) {
            setvisibleSection("career");
          } else {
            setvisibleSection("");
          }
        }}
      />
    </div>
  );
};

export default Instamart;
