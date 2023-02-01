import React from "react";
import { Link } from "react-router-dom";

const DetailTodos = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4 grow h-fit bg-[#f8f9fa] p-4 border rounded-lg w-[1024px]">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-center text-2xl font-bold">Todos List</h2>
          <div>
            <Link to={"/edittodos/:id"}>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#9475EA] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#725ab4] focus:outline-none focus:ring-2 focus:ring-[#725ab4] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Edit
              </button>
            </Link>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#9475EA] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#725ab4] focus:outline-none focus:ring-2 focus:ring-[#725ab4] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Hapus
            </button>
          </div>
        </div>
        <div className="h-80 w-full overflow-hidden rounded-lg drop-shadow-md bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <div className="m-4 text-xl flex justify-between">
            <h1>TES</h1>
            <h1>28-03-2003</h1>
          </div>
          <p className="m-4 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate veniam ducimus similique nostrum praesentium dolore, natus, quo libero ipsa modi, accusantium eius obcaecati eos facilis adipisci? Voluptates quae natus voluptas.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailTodos;
