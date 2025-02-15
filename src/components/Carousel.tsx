import { For, onCleanup, onMount, type Component } from "solid-js"
import "../styles/carousel.scss"



export const Carousel: Component<{images: string[]}> = (props) => {

	let timer_id = 0;
	let current_image = 0;
	let el = null as unknown as HTMLUListElement;

	const setThings = () => {
			const current_el = el.children[current_image].children[0]
			current_el.setAttribute('data-open', 'true')
	}

	onMount(async () => {
		clearInterval(timer_id);

		setThings()

		timer_id = setInterval(() => {
			
			for (let i = 0; i < props.images.length; i++) {
				const img = el.children[i].children[0]
				img.setAttribute('data-open', 'false')
			}
		
			setThings()
			current_image = (current_image + 1) % props.images.length
			
		}, 4000)

		
	})

	onCleanup(() => clearInterval(timer_id))

	return <div class="carousel" data-count={props.images.length}>
	<ul class="carousel-list" ref={el}>
		
		<For each={props.images}>
		{(image, index) => <li class="carousel-li">
			<img class="carousel-img" src={image} data-open={true} data-index={index()} alt=""/>
		</li>}
		</For>

	</ul>

</div>


}
