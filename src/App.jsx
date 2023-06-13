// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import { useState } from 'react'

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()

  const [activeCategory, activeCategorySetter] = useState(null)
  const [activeRestaurant, activeRestaurantSetter] = useState(null)
  const [activeItem, activeItemSetter] = useState(null)

  const [activeChipCategory, activeChipSetterCategory] = useState(null)
  const [activeChipRestaurant, activeChipSetterRestaurant] = useState(null)
  const [activeChipItem, activeChipSetterItem] = useState(null)

  let currentMenuItems = data.filter(item => (item.food_category == activeCategory) && (item.restaurant == activeRestaurant))

  function chipCategoryFunction(index, category) {
    activeCategorySetter(category)
    activeChipSetterCategory(index)
  }

  function chipRestaurantFunction(index, restaurant) {
    activeRestaurantSetter(restaurant)
    activeChipSetterRestaurant(index)
  }

  function chipItemFunction(index, item) {
    activeItemSetter(item)
    activeChipSetterItem(index)
  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>

          { categories.map((category, index) => {
            return <Chip key={index} label={category} isActive={(activeChipCategory == index) ? false : true} setChipFunc={() => {chipCategoryFunction(index, category)}}/>
          })}

        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">

          { restaurants.map((restaurant, index) => {
            return <Chip key={index} label={restaurant} isActive={(activeChipRestaurant == index) ? false : true} setChipFunc={() => {chipRestaurantFunction(index, restaurant)}}/>
          })}
      
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            
            { currentMenuItems.map((item, index) => {
              return <Chip key={index} label={item.item_name} isActive={(activeChipItem == index) ? false : true} setChipFunc={() => {chipItemFunction(index, item)}}/>
            })}

          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            <NutritionalLabel/>
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
