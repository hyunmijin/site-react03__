import React from 'react'

const Movie = (props) => {
  return (
    <section id="movieSection" className={props.attr}>
    <div className="movie__inner container">
      <div className="move__text">
        <h3>영화 추천</h3>
        <p>러빙 빈센트, 호크니, 뱅크시, 진주 귀걸이를 한 소녀</p>
        <a href="/" className="button-red"> 자세히 보기 </a>
      </div>
      <div className="movie__item">
        <div>
          <img src="./assets/images/movie/01.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/movie/02.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/movie/03.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/movie/04.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Movie
