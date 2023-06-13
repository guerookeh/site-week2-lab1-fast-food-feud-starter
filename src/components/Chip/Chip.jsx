import "./Chip.css"

export function Chip({ keyIdx = 0, label = "", isActive = false, setChipFunc }) {
  let buttonClassName = (isActive) ? "chip" : "chip active"
  return ( 
    <button className={buttonClassName} onClick={setChipFunc}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
