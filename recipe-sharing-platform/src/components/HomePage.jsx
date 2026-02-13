import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
                <Link
  to="/add-recipe"
  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-green-500 transition"
>
  + Add New Recipe
</Link>


              <Link
  to={`/recipe/${recipe.id}`}
  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
>
  View Recipe →
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
