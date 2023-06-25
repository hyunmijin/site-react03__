import React from 'react'

const Unsplash = (props) => {
  return (
    <section id="unsplashSection" className={props.attr}>
    <div className="unsplash__inner container">
      <div className="unsplash__text">
        <h3>이미지 추천</h3>
        <p>서울 전시 작품</p>
        <a href="/" className="button-blue"> 자세히 보기 </a>
      </div>
      <div className="unsplash__item">
        <div>
          <img src="./assets/images/unsplash/01.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/unsplash/02.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/unsplash/3.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/unsplash/04.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Unsplash
