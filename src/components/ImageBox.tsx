import type { Component } from "solid-js"
import "../styles/imagebox.scss"
import { useStore } from "@nanostores/solid"
import { $imageBoxData, imageBoxActions } from "../stores/image"
import { showToastMessage } from "../stores/toast"

const ImageBox: Component = () => {

let el = null as unknown as HTMLDivElement;
const imageBoxData = useStore($imageBoxData);
const checkToClose = (e:any) => {
	const target = e.target as unknown as HTMLDivElement;
	if (el === target) {
		imageBoxActions.close()
	}
}

return <section ref={el} onClick={checkToClose} class="imgbox" hidden={!imageBoxData().open} inert={!imageBoxData().open}>
	<button class="imgbox-close" data-btn onClick={imageBoxActions.close}>Close</button>
	<figure class="imgbox-figure">
		<img src={imageBoxData().img} alt="" class="imgbox-img" />
		<figcaption class="imgbox-caption">{imageBoxData().caption}</figcaption>
	</figure>
</section>


}

export default ImageBox
