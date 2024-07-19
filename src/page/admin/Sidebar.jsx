import "../../assets/css/admin.css"

const MENUS = [
  { title: "수거함 위치 등록", iconPath: "" },
  { title: "신청하기", iconPath: "" },
  { title: "모니터링", iconPath: "" },
]

function Sidebar(props) {
  return (
    <article className="sidebar">
      <div className="sidebar-menu">
        {MENUS.map((menu, index) => (
          <Menu key={index} {...menu} setHeader={props.setHeader} />
        ))}
      </div>
    </article>
  )
}

const Menu = (props) => {
  return (
    <div className="menu-item" onClick={() => props.setHeader(props.title)}>
      {/* <img src={props.iconPath} alt={props.title} /> */}
      {props.title}
    </div>
  )
}

export default Sidebar
