import React, { useState } from 'react';
import { Banner } from './components/Banner';
import { SearchBar } from './components/SearchBar';
import { RecipeCard } from './components/RecipeCard';
import recipeApi from './services/api';
import type { Recipe } from './types/recipe';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const recipeData = await recipeApi.getRecipe(query);
      console.log(recipeData);
      
      const recipesWithImages = await Promise.all(
        recipeData.map(async (recipe: Recipe) => {
          const imageUrl = await recipeApi.getRecipeImage();
          return { ...recipe, imageUrl };
        })
      );
      setRecipes(recipesWithImages);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Banner />
      
      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-green-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        )}
        
        {!loading && recipes.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            Enter ingredients to discover delicious recipes!
          </p>
        )}
      </main>
    </div>
  );
}

export default App;