import React, { useState } from "react";
import "./explorer.scss";

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

function FileItem({ id, type, name, addItem, children }) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newType, setNewType] = useState("");
  const [newName, setNewName] = useState("");

  const dataList = Object.values(children);
  const handleAddBtnClick = (type) => {
    setEditMode(true);
    setNewType(type);
  };

  const handleAddItem = () => {
    const newItem = {
      name: newName,
      type: newType,
      children: {},
      id: generateId(),
    };
    addItem(id, newItem);
    setEditMode(false);
    setExpanded(true);
  };
  return (
    <li style={{ listStyle: "none" }}>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          border: "1px solid black",
          padding: "2px",
          borderRadius: "5px",
        }}
      >
        <button
          style={{
            border: "none",
            cursor: "pointer",
            background: "none",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {type === "folder" ? (expanded ? "📂" : "📁") : "🗂️"}
          <span>{name}</span>
        </button>
        <div>
          <button
            style={{ border: "none", cursor: "pointer", background: "none" }}
            onClick={() => handleAddBtnClick("file")}
          >
            🗂️+
          </button>
          <button
            style={{ border: "none", cursor: "pointer", background: "none" }}
            onClick={() => handleAddBtnClick("folder")}
          >
            📁+
          </button>
          {editMode ? (
            <div>
              <input
                placeholder="Enter name"
                type="text"
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleAddItem}>Submit</button>
            </div>
          ) : null}
        </div>
      </div>

      {dataList?.length && expanded ? (
        <ul>
          {dataList?.map((item) => {
            const { id, name, type, children } = item;
            return (
              <FileItem
                id={id}
                name={name}
                type={type}
                addItem={addItem}
                children={children}
              />
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}

function FileExplorer({ data, addItem, editItem, deleteItem }) {
  return (
    <ul>
      {Object.values(data)?.map((item) => {
        const { id, name, type, children } = item;
        return (
          <FileItem
            id={id}
            name={name}
            type={type}
            addItem={addItem}
            children={children}
          />
        );
      })}
    </ul>
  );
}

function Explorer() {
  const [data, setData] = useState(initialData);

  const addItem = (parentId, newItem) => {
    console.log("parentId", parentId, "newItem", newItem, "data", data);
    const insertItem = (item) => {
      if (item.id === parentId) {
        return {
          ...item,
          children: {
            ...item.children,
            [newItem.id]: newItem,
          },
        };
      }
      const updatedChildren = {};
      if (item.children) {
        for (const childKey in item.children) {
          updatedChildren[childKey] = insertItem(item.children[childKey]);
        }
        return {
          ...item,
          children: updatedChildren,
        };
      }
    };
    const updateData = (items) => {
      const update = { ...items };
      for (const key in update) {
        update[key] = insertItem(update[key]);
      }
      console.log("updated", update);
      return update;
    };
    setData((prev) => updateData(prev));
  };

  const editItem = () => {};

  const deleteItem = () => {};

  return (
    <div>
      <FileExplorer
        data={data}
        addItem={addItem}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default Explorer;
