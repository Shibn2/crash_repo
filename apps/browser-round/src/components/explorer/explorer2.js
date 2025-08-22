import React, { useEffect, useState } from "react";

const generateId = (() => {
  let count = 0;
  return () => `id-${count++}`;
})();

const id = generateId();

const initialData = {
  [id]: {
    id,
    name: "Root Folder",
    type: "folder",
    children: {},
  },
};

function FolderItem({ directory, editItem, deleteItem, addNewItem }) {
  const { name, children, id, type } = directory;
  const [newItem, setNewItem] = useState({});
  const [newName, setNewName] = useState("");
  const [edit, setEdit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleNewItemSubmit = (e) => {
    // setNewItem((prev) => ({ ...prev, name: newName }));
    const newData = {
      ...newItem,
      name: newName,
      children: {},
    };
    addNewItem(id, newData);
    setEdit(false);
    setExpanded(true);
  };

  return (
    <li className="folder-item">
      <div style={{ display: "flex", alignItems: "space-between" }}>
        <div className="folder-item-ctrl">
          <button onClick={() => setExpanded((prev) => !prev)}>
            {type === "folder" ? (expanded ? "📂" : "📁") : "🗂️"}
            {name}
          </button>
          <button
            onClick={() => {
              setNewItem((prev) => ({
                ...prev,
                type: "folder",
                id: generateId(),
              }));
              setEdit(true);
            }}
          >
            🆕📁
          </button>
          <button
            onClick={() => {
              setNewItem((prev) => ({
                ...prev,
                type: "file",
                id: generateId(),
              }));
              setEdit(true);
            }}
          >
            🆕🗂️
          </button>
          <button onClick={() => deleteItem(id)}>🗑️</button>
        </div>
        <div className="folder-item-edit">
          {edit ? (
            <>
              <input
                placeholder="Enter new item"
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleNewItemSubmit}>Submit</button>
            </>
          ) : null}
        </div>
      </div>

      {expanded && Object.values(children).length
        ? Object.values(children).map((childFolder) => {
            return (
              <ul>
                <FolderItem
                  directory={childFolder}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  addNewItem={addNewItem}
                />
              </ul>
            );
          })
        : null}
    </li>
  );
}

function Folder({ directory, editItem, deleteItem, addNewItem }) {
  return (
    <ul className="directory-list">
      {Object.values(directory).map((folder) => {
        return (
          <FolderItem
            directory={folder}
            editItem={editItem}
            deleteItem={deleteItem}
            addNewItem={addNewItem}
          />
        );
      })}
    </ul>
  );
}

function Directory() {
  const [directory, setDirectory] = useState(initialData);
  // To edit the existing item in the data.
  useEffect(() => {
    console.log("directory", directory);
  }, [directory]);
  const editItem = () => {};
  // To delete an item from the data.
  const deleteItem = (id) => {
    const processItem = (prev) => {
      const updated = { ...prev };
      console.log("id", id, "updated", updated, "id in updated", id in updated);
      if (id in updated) {
        delete updated[id];
      }
      for (const key in updated) {
        if (updated[key].children) {
          updated[key] = {
            ...updated[key],
            children: processItem(updated[key].children),
          };
        }
      }
      return updated;
    };

    setDirectory((prev) => processItem(prev));
  };
  // To add new Item to the data.
  const addNewItem = (parentId, newData) => {
    // process the folder data;
    const processItem = (folderData) => {
      if (folderData.id === parentId) {
        const updatedChildren = { ...folderData.children };
        updatedChildren[newData.id] = newData;
        return {
          ...folderData,
          children: updatedChildren,
        };
      }
      if (folderData.children) {
        const updatedChildren = { ...folderData.children };
        for (const key in updatedChildren) {
          updatedChildren[key] = processItem(updatedChildren[key]);
        }
        return {
          ...folderData,
          children: updatedChildren,
        };
      }
    };

    const updateData = (prev) => {
      const update = { ...prev };
      for (const key in update) {
        update[key] = processItem(update[key]);
      }
      return update;
    };
    setDirectory((prev) => updateData(prev));
  };
  return (
    <Folder
      directory={directory}
      editItem={editItem}
      deleteItem={deleteItem}
      addNewItem={addNewItem}
    />
  );
}

export default Directory;
