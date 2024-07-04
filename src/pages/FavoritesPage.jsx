import { Search } from "lucide-react";

const FavoritesPage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form className="">
          <label htmlFor="" className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:textmd grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-5xl mt-4 ">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight ">
          Popular choices
        </p>
      </div>
    </div>
  );
};

export default FavoritesPage;
