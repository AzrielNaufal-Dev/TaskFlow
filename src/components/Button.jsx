export default function Button({isSubmit = false, value, className, onClick, isDisable}) {
  return (
    <button type={isSubmit? "submit": "button"} className={className} onClick={onClick} disabled={isDisable}>
      {value}
    </button>
  )
}