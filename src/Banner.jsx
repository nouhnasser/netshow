import React from 'react'
import "./Banner.css"

function Banner() {

  function truncate(string, num) {
    return string?.length > num ? string.substr(0, num - 1) + '...' : string
  }
  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
      backgroundPosition: "center center"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          Movie Name
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
         {truncate(`this is a test description`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner