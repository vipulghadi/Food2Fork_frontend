import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={recipe.imageUrl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352'}
        alt={recipe.recipeName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{recipe.recipeName}</h3>
        <p className="text-gray-400 mb-4">{recipe.cuisine} • {recipe.diet}</p>
        
        <div className="flex items-center gap-4 text-gray-300 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.cook_time} mins</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>4 servings</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-500">Ingredients:</h4>
          <p className="text-gray-400 text-sm line-clamp-2">{recipe.ingredients}</p>
        </div>
        
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}