import React, { useEffect, useMemo, useRef, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos/";

const LIMIT = 10;

function useMediaQuery() {
  const [screen, setScreen] = useState("");
  const screenSize = useMemo(() => {
    return window.innerWidth;
  }, []);
  useEffect(() => {
    if (screenSize > 1400) {
      setScreen("xl");
    } else if (screenSize > 1200) {
      setScreen("lg");
    } else if (screenSize > 1024) {
      setScreen("md");
    } else if (screenSize > 768) {
      setScreen("sm");
    } else {
      setScreen("xs");
    }
  }, []);
  return [screen];
}

function TodoList({
  dropHandler,
  dragOverHandler,
  dragStartHandler,
  todos,
  listEnd,
  listRoot,
}) {
  return (
    <ul
      ref={listRoot}
      style={{
        height: "300px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        padding: "0",
      }}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    >
      {todos?.map((item) => (
        <li
          style={{
            listStyle: "none",
            border: "1px solid grey",
            padding: "4px",
            cursor: "pointer",
          }}
          key={item.id}
          draggable
          onDragStart={() => dragStartHandler(item.id)}
        >
          {item.title}
        </li>
      ))}
      {listEnd ? (
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "red",
            flexShrink: "0",
          }}
          ref={listEnd}
        ></div>
      ) : null}
    </ul>
  );
}

function TodoBoard() {
  const [todos, setTodos] = useState([]);
  const [dragItemId, setDragItemId] = useState(null);
  const selectedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );
  const [screen] = useMediaQuery();
  console.log("screen------>", screen);
  const page = useRef(0);
  const listEnd = useRef(null);
  const listRoot = useRef(null);
  const observer = useRef(null);

  const fetchTodos = async () => {
    try {
      const url = `${URL}?_limit=${LIMIT}&_start=${page.current * LIMIT}`;
      const result = await fetch(url);
      const data = await result.json();
      if (data) {
        const updateTodos = (prevTodos) => {
          const len = prevTodos.length;
          const updatedNewTodos = data.map((todo) => {
            todo.id = todo.id + len;
            return todo;
          });
          return [...prevTodos, ...updatedNewTodos];
          //(prevData) => [...prevData, ...data]
        };
        setTodos(updateTodos);
        page.current++;
      }
    } catch (err) {
      console.error("Error on fetching todos!.", err);
    }
  };

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchTodos();
      }
    });
  };

  const dragStartHandler = (id) => {
    setDragItemId(id);
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = (isCompleted) => {
    const updateTodos = (prevTodos) => {
      const copy = [...prevTodos];
      if (isCompleted) {
        return copy.map((todo) => {
          if (todo.id === dragItemId) {
            todo.completed = true;
            return todo;
          }
          return todo;
        });
      } else {
        return copy.map((todo) => {
          if (todo.id === dragItemId) {
            todo.completed = false;
            return todo;
          }
          return todo;
        });
      }
    };
    setTodos(updateTodos);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(cb, {
      // root: listRoot.current ?? null, // observe within the scrollable UL
      rootMargin: "0px 0px 200px 0px", // prefetch a bit earlier
      threshold: 0,
    });

    const target = listEnd.current;
    if (target && observer?.current) {
      observer.current.observe(target);
    }
    return () => {
      if (target && observer?.current) {
        observer.unobserve(target);
        observer.disconnect();
      }
    };
  }, []);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h3>Total todos</h3>
        <TodoList
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          todos={todos}
          listEnd={listEnd}
          listRoot={listRoot}
        />
      </div>
      <div>
        <h3>Selected todos</h3>
        <TodoList
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={() => dropHandler(true)}
          todos={selectedTodos}
          listRoot={null}
          listEnd={null}
          isCompleted
        />
      </div>
    </div>
  );
}

function TestApp1() {
  return (
    <div>
      Test app
      <TodoBoard />
    </div>
  );
}

function withAuth(Wrapper, { adminRoles }) {
  const isAdmin = adminRoles.some((role) => userRoles);
  return function AuthComponent(props) {
    return <Wrapper {...props} />;
  };
}

export default function TestApp1Util() {
  return <TestApp1 />;
}

// 1. intersectionObserver DONE
// 2. drag and drop
// 3. useCallback
// 4. useMemo DONE
// 5. customeHook
// 6. HOC
// 7. useContext, useReducer

//
