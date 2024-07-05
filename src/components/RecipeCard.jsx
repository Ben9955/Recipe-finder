import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const gettwoValuesFromArray = (array) => {
  return [array[0], array[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = gettwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favoritesRecipes")?.includes(recipe.label)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favoritesRecipes")) || [];

    const isRecipeInFavorites = favorites.some(
      (fav) => fav.label === recipe.label
    );
    if (isRecipeInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem("favoritesRecipes", JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        className="relative h-32 "
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="recipe image"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.opacity = 0;
          }}
        />
        <div
          className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer 
            flex items-center gap-1 text-sm"
        >
          <Soup size={16} /> {recipe.yield} servings
        </div>
        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}

          {isFavorite && (
            <Heart
              size={20}
              className="fill-red-500 text-red-500 hover:fill-white"
            />
          )}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide ">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
      </p>

      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, i) => (
          <div
            key={i}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
