import type { Component } from "solid-js"
import { imageBoxActions } from "../stores/image"
import "../styles/workpage.scss"

export const WorkImage:Component<{img: string, caption: string}> = (props) => {
	const imgClick = () => {
		imageBoxActions.close()
		imageBoxActions.enterData(props.img, props.caption)	
		imageBoxActions.open()
	}
	return <img onClick={imgClick} src={props.img} alt={props.caption} class="work-img" />
}
