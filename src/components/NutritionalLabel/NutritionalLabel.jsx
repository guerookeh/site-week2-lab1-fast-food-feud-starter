import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props}.item_name</h4>

      { nutritionFacts.map((fact) => {
            return <ul className="fact-list">{fact}</ul>
      })}

    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE CODE HERE */}</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */}</span>
    </li>
  )
}

export default NutritionalLabel
