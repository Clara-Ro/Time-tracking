

export default function Tracker({icon,title,hour,lastWeekHour}){
    return(
        <div className="time-tracker">
          <div className="image">
            <img src={`./assets/icons/icon-${icon}.svg`} alt={icon}/>
          </div>
          <div className="content">
            <div className="content-title">
              <strong className="title">{title}</strong>
              <img className="content-image" src="./assets/icons/icon-ellipsis.svg" />
            </div>
            <div className="dethails">
              <strong className="time">{hour}hrs</strong>
              <span className="last-time">Last Week - {lastWeekHour}hrs</span>
            </div>
          </div>
        </div>
    )
}