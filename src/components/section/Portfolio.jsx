import React from 'react'

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
        <h3>MINIATURE CALENDAR</h3>
    <div className="port__inner container">
        <div className="port__btn"></div>
        <div className="port__cont">
            <div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230511thu.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Sydney Opera Mask</h4>
                            <p>-230511thu</p>
                        </div>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230512fri.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Brush of the Wild</h4>
                            <p>-230512fri</p>
                        </div>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230522mon1.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Breathing</h4>
                            <p>-230522mon1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230414fri1.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Fuku1 Grand Prix</h4>
                            <p>-230414fri1</p>
                        </div>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230421fri1.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Sweet Mario Bros</h4>
                            <p>-230421fri1</p>
                        </div>
                    </div>
                </div>
                <div className="port">
                    <figure className="port__header">
                        <img src="./assets/images/port/230307tue.jpg" alt="" />
                    </figure>
                    <div className="port__body">
                        <div>
                            <h4>Barrel Sauna</h4>
                            <p>-230307tue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Portfolio
