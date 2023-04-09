
function Heading({ variant, text }) {
    return (
        <>
            {   variant === "h1" && <h1>{text}</h1> ||
                variant === "h2" && <h2>{text}</h2> ||
                variant === "h3" && <h3>{text}</h3> ||
                variant === "h4" && <h4>{text}</h4>
            }
        </>
    )
}

export default Heading