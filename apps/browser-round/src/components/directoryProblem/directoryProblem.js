import React, { useState } from "react";

function Directory({ directory, updateDirectory }) {
  return (
    <>
      <div>
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => updateDirectory(directory.id, true)}
        >
          📁+
        </button>
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => updateDirectory(directory.id, false)}
        >
          🗂️+
        </button>
      </div>
      <div>
        <label>{directory?.name}</label>
        {directory?.child?.map((dir) => {
          return (
            <div>
              <Directory
                directory={directory}
                updateDirectory={updateDirectory}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const DIRECTORY_INIT = {
  id: 1,
  name: "",
  child: [],
};

function DirectoryProblem() {
  const [directory, setDirectory] = useState(DIRECTORY_INIT);

  const updateDirectory = (parent, isFolder) => {};

  return (
    <div>
      <Directory directory={directory} updateDirectory={updateDirectory} />
    </div>
  );
}

export default DirectoryProblem;
