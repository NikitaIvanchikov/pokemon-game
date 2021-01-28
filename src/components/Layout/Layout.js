import React from 'react'
import s from './style.module.css'

const Layout = (props) => {
    console.log(props)
    const styleLayout = props.Bg ? {background : props.urlBg} : { background: props.colorBg}
	return (
		<section className={s.root} id={props.id} >
            <div className={s.wrapper} style ={styleLayout}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc} className = {s.full}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
		)
}

export default Layout
