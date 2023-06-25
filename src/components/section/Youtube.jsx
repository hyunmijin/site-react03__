import React from 'react'

const Youtube = (props) => {
  return (
    <section id="youtubeSection" className={props.attr}>
    <div className="youtube__inner container">
      <div className="youtube__text">
        <h3>유투버 추천</h3>
        <p>미니어처 유투브</p>
        <a href="/" className="button-red"> 자세히 보기 </a>
      </div>
      <div className="youtube__item">
        <div>
          <img src="./assets/images/youtube/Rectangle745.png" alt="" />
        </div>
        <div>
          <img src="./assets/images/youtube/Rectangle746.png" alt="" />
        </div>
        <div>
          <img src="./assets/images/youtube/Rectangle747.png" alt="" />
        </div>
        <div>
          <img src="./assets/images/youtube/Rectangle748.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Youtube
