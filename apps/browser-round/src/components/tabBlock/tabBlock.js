import React, { useEffect, useState } from "react";

const tab_section = {
  HTML: {
    text: "A markup language to create web pages",
  },
  JavaScript: {
    text: "A scripting language to work with web pages.",
  },
  CSS: {
    text: "Styling language use to build web pages",
  },
};

const TAB = "tab";

function getDefaultTab() {
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get(TAB);
  return tab || "HTML";
}

function setUrlParam(tab) {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(TAB)) {
    urlParams.delete(TAB);
  }
  urlParams.set(TAB, tab);
  const urlString = urlParams.toString();
  const updatedUrl = `${window.location.pathname}?${urlString}`;
  window.history.replaceState({}, "", updatedUrl);
}

function TabSection() {
  const [currentTab, setCurrentTab] = useState(getDefaultTab);

  const handleTabClick = (e, tab) => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("urlParams.toString()", urlParams.toString());

    setCurrentTab(tab);
    setUrlParam(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          {Object.keys(tab_section)?.map((tab) => (
            <li>
              <button onClick={(e) => handleTabClick(e, tab)}>{tab}</button>
            </li>
          ))}
        </ul>
      </nav>
      <section>{tab_section[currentTab].text}</section>
    </div>
  );
}

export default TabSection;
