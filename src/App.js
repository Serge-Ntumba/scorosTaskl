import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstfile, setFirstfile] = useState("");
  const [secondFile, setsecondFile] = useState("");
  const [firstOutput, setFirstOutput] = useState();
  const [secondOutput, setSecondOutput] = useState();

  // transform string into an array of sorted unicode
  const getCharCodes = (string) => {
    let charCodeArr = [];
    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      charCodeArr.push(code);
    }
    return charCodeArr.sort(function (a, b) {
      return a - b;
    });
  };

  //convert array of unicode to string
  const codeToString = (arr) => {
    return String.fromCharCode(...arr);
  };

  //compare two string
  const findUncommon = (str1, str2) => {
    let res = [];
    for (let i = 0; i < str1.length; i++) {
      if (!str2.includes(str1[i])) {
        res.push(str1[i]);
      }
    }
    return res.join("");
  };

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstfile("");
    setsecondFile("");
    const firstTextInputToString = codeToString(
      getCharCodes(firstfile.toLowerCase())
    );
    const secondTextInputToString = codeToString(
      getCharCodes(secondFile.toLowerCase())
    );

    setFirstOutput(
      findUncommon(firstTextInputToString, secondTextInputToString)
    );

    setSecondOutput(
      findUncommon(secondTextInputToString, firstTextInputToString)
    );
  };

  return (
    <div class="mt-14 ml-9 mr-9">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Text file 1
          </label>
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the first file string"
            value={firstfile}
            onChange={(e) => setFirstfile(e.target.value)}
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Text file 2
          </label>
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the second file string"
            value={secondFile}
            onChange={(e) => setsecondFile(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div class="mt-14">
        <p>
          The text file 1 output:{" "}
          <span class="text-blue-700">{`${firstOutput || "..."}`}</span>
        </p>
        <p>
          The text file 2 output:{" "}
          <span class="text-blue-700">{` ${secondOutput || "..."}`}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
