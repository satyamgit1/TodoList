"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Check if title and description are not empty strings
    if (title.trim() !== "" && desc.trim() !== "") {
      setmainTask([...mainTask, { title, desc }]);
    }
    // Reset title and description input fields
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytasks = [...mainTask];
    copytasks.splice(i, 1);
    setmainTask(copytasks);
  };
  let renderTask = <h2> No Task Availabe </h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            {/* <div className="flex items-center justify-between mb-5 w-2/3">  to make the title and description in same line */}

            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => { // we have called deletehandler in function beacuse of it will be called immediately
              deleteHandler(i); 
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todolist
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter the Title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter the Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
