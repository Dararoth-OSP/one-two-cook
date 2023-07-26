import React, { useRef, useState } from "react";
import { BiImageAdd, BiPlusCircle } from "react-icons/bi";

const NewRecipeForm = (props) => {
  const [selectedOrigin, setSelectedOrigin] = useState("asean");
  const [selectedType, setSelectedType] = useState("food");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const originOptions = ["asean", "europe", "south-america", "north-america"];
  const typeOptions = ["food", "drink", "dessert"];
  const difficultyOptions = ["easy", "medium", "hard"];

  const originChangeHandler = (event) => {
    setSelectedOrigin(event.target.value);
  };
  const typeChangeHandler = (event) => {
    setSelectedType(event.target.value);
  };
  const difficultyChangeHandler = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const enteredTitle = useRef("");
  const enteredDescription = useRef("");
  const enteredNotice = useRef("");
  const enteredPreparation = useRef(30);
  const enteredCalories = useRef(120);

  const enteredImgUrl = useRef("");
  const enteredKitchenWare = useRef("");

  const enteredInstuction = useRef("");
  const enteredIngredients = useRef("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: enteredTitle.current.value,
      description: enteredDescription.current.value,
      notice: enteredNotice.current.value,
      prepTime: enteredPreparation.current.value,
      calories: enteredCalories.current.value,
      imgURL: enteredImgUrl.current.value,
      kitWare: enteredKitchenWare.current.value,
      instruction: enteredInstuction.current.innerText,
      ingredient: enteredIngredients.current.innerText,
      origin: selectedOrigin,
      type: selectedType,
      difficulty: selectedDifficulty,
    };

    props.onAddRecipe(formData);
  };

  return (
    <div>
      <form
        onSubmit={formSubmitHandler}
        className="max-w-[1150px] px-4 mx-auto"
      >
        <h1 className="font-bold text-4xl my-8">Create Recipe</h1>
        <div className="grid grid-cols-4 gap-6 my-10">
          <div className="flex flex-col">
            <label
              htmlFor="origin"
              className="border-b-[3px] py-1 border-zinc-500"
            >
              Choose Origin
            </label>
            <select
              name="origin"
              id="origin"
              value={selectedOrigin}
              onChange={originChangeHandler}
            >
              {originOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="type"
              className="border-b-[3px] py-1 border-zinc-500"
            >
              Choose Type<span className="text-red-600">*</span>
            </label>
            <select
              name="type"
              id="type"
              value={selectedType}
              onChange={typeChangeHandler}
            >
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="difficulty"
              className="border-b-[3px] py-1 border-zinc-500"
            >
              Choose Difficulty
            </label>
            <select
              name="difficulty"
              id="difficulty"
              value={selectedDifficulty}
              onChange={difficultyChangeHandler}
            >
              {difficultyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-3 flex flex-col">
            <label htmlFor="title" className="font-bold ">
              Title<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="title"
              className="border border-zinc-400 rounded-lg mb-4 py-1 px-3"
              ref={enteredTitle}
            />
          </div>
          <div>
              <label htmlFor="prep-time" className="font-bold ">
                Preparation Time
              </label>
              <div className="relative">
                <span className="absolute font-medium top-1 left-2">
                  Minutes
                </span>
                <input
                  type="number"
                  id="prep-time"
                  className="border pl-28 w-48 border-zinc-400 rounded-lg mb-4 py-1 px-3"
                  ref={enteredPreparation}
                />
              </div>
            </div>
          <div className="col-span-3 flex flex-col">
            <label htmlFor="description" className="font-bold ">
              Description<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="description"
              className="border border-zinc-400 rounded-lg mb-4 py-1 px-3"
              ref={enteredDescription}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="calories" className="font-bold ">
              Calories
            </label>
            <input
              type="number"
              id="calories"
              className="border w-48 border-zinc-400 rounded-lg mb-4 py-1 px-3"
              ref={enteredCalories}
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <label htmlFor="notice" className="font-bold ">
              Notice
            </label>
            <input
              type="text"
              id="notice"
              className="border border-zinc-400 rounded-lg mb-4 py-1 px-3"
              ref={enteredNotice}
            />
          </div>

        </div>

        <div className="flex gap-10 my-10"></div>

        {/* Input fields for the photo URL and kitchen ware photo */}
        <label className="font-bold">Add Photo</label>
        <div className="grid grid-cols-5 grid-rows-2 h-[400px] my-3">
          <label
            htmlFor="photo"
            className="col-span-3 row-span-2 border cursor-pointer border-zinc-400 border-r-0 flex items-center justify-center"
          >
            <BiImageAdd className="w-32 h-32 text-zinc-300" />
          </label>
          <label
            htmlFor="photo"
            className="border cursor-pointer border-zinc-400 flex items-center justify-center"
          >
            <BiPlusCircle className="w-32 h-32 text-zinc-300" />
          </label>
          <label
            htmlFor="photo"
            className="border cursor-pointer border-zinc-400 flex items-center justify-center"
          >
            <BiPlusCircle className="w-32 h-32 text-zinc-300" />
          </label>
          <label
            htmlFor="photo"
            className="border cursor-pointer border-zinc-400 flex items-center justify-center"
          >
            <BiPlusCircle className="w-32 h-32 text-zinc-300" />
          </label>
          <label
            htmlFor="photo"
            className="border cursor-pointer border-zinc-400 flex items-center justify-center"
          >
            <BiPlusCircle className="w-32 h-32 text-zinc-300" />
          </label>
          <input
            type="text"
            id="photo"
            className="outline-none"
            ref={enteredImgUrl}
          />
        </div>

        <label className="font-bold block mb-3 mt-8">
          Required kitchen Ware
        </label>
        <label
          htmlFor="kit-ware-photo"
          className="border w-[220px] h-[220px] cursor-pointer border-zinc-400 flex items-center justify-center"
        >
          <BiPlusCircle className="w-32 h-32 text-zinc-300" />
        </label>
        <input
          type="text"
          id="kit-ware-photo"
          className="outline-none"
          ref={enteredKitchenWare}
        />

        <div className="flex flex-col">
          <label htmlFor="instruction" className="font-bold mb-3 mt-10">
            Instructions<span className="text-red-600">*</span>
          </label>
          <div
            id="instruction"
            ref={enteredInstuction}
            contentEditable
            className="border border-zinc-400 p-4 outline-none min-h-[200px] max-h-[450px] overflow-y-scroll"
          ></div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="ingredients" className="font-bold mb-3 mt-10">
            Ingredients<span className="text-red-600">*</span>
          </label>
          <div
            id="instruction"
            contentEditable
            ref={enteredIngredients}
            className="border border-zinc-400 p-4 outline-none min-h-[200px] max-h-[450px] overflow-y-scroll"
          ></div>
        </div>
        <div className=" flex justify-end my-10 mb-28 space-x-4">
          <button
            type="button"
            className="border border-[#f56040] text-[#f56040] font-bold   rounded-xl px-8 py-2"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className=" border border-[#f56040] bg-[#f56040] rounded-xl text-white font-bold px-8 py-2"
          >
            {props.isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRecipeForm;
