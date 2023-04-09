

const Button = (props) => {

  const onClick = (text) => {
    props?.handleFilter(text)
  }
  return (
    <>
      {props?.click ?
        <button onClick={() => onClick(props?.btnText)} className={`button-style ${props?.butVerient}`}>{props?.btnText} <span className="btns-icon">{props?.btnsIcon}</span></button> :
        <button className={`button-style ${props?.butVerient}`}>{props?.btnText} <span className="btns-icon">{props?.btnsIcon}</span></button>
      }
    </>
  )
}

export default Button