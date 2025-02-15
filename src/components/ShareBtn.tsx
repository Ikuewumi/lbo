import "../styles/share.scss";
import { type Component } from "solid-js"
import { share } from "../composables/share";

export const ShareBtn: Component<{ slug: string, title: string, text: string }> = (props) => {
	const shareData = async () => {
		share(props.title, props.text, props.slug)	
	}



	return <button onClick={shareData} data-share-link={props.slug} data-btn class="work-barbtn" title="share">
			<svg viewBox="0 0 24 24"><use href="#share"></use></svg>
				Share
		</button> 
}


export const WorkShareBtn: Component<{ slug: string, title: string, text: string }> = (props) => {
	const shareData = async () => {
		share(props.title, props.text, props.slug)	
	}


	return <button onClick={shareData} class="work-sharebtn" data-btn="">
		<svg viewBox="0 0 24 24"><use href="#share"></use></svg>
		Share
	</button>

}
