import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({activeItem}) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{(activeItem) ? activeItem.item_name : ""}</h4>

      { nutritionFacts.map((fact, index) => {
            return <ul key={index} className="fact-list">{NutritionalLabelFact(activeItem, fact)}</ul>
      })}

    </div>
  )
}

export function NutritionalLabelFact(activeItem, fact) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{fact.label}</span>{" "}
      <span className="fact-value">{(activeItem) ? activeItem[fact.attribute] : ""}</span>
    </li>
  )
}

export default NutritionalLabel
