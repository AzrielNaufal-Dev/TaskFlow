import Button from "./Button"

export default function Footer({onClearAll, onCounter}) {

  return (
    <>
      <p><span className="task-counter">{onCounter}</span> Tasks remaining</p>
      <Button className="clear-btn" value="Clear All" onClick={() => onClearAll()}/>
    </>
  )
}