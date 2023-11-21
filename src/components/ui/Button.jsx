const Button = (props) => {
  const { text } = props

  return (
    <button className="bg-blue-600 active:bg-blue-700 text-white">
      {text}
    </button>
  )
}

export default Button
