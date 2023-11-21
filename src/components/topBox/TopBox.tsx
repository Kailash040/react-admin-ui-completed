import "./topBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h4 style={{"marginBottom":"20px"}}>PEOPLE LEADERBOARD</h4>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="username">{user.progress}</span>
            <span className="amount">${user.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox