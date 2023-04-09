function SectionTitle(props) {
    return (
        <div className="section-title-box">
          <span className={`pin-text ${props?.colorVerient}`}>{props?.pinText}</span>
          <h2 className="title">{props?.title}</h2>
          <p className="desc">{props?.desc}</p>
        </div>
    )
}

export default SectionTitle