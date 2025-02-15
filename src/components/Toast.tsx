import type { Component } from "solid-js";
import "../styles/toast.scss"
import { useStore } from "@nanostores/solid";
import { $toastData } from "../stores/toast";

export const Toast: Component = () => {
	const toastData = useStore($toastData);

	return <div data-open={toastData().open} inert={!toastData().open} aria-hidden={!toastData().open} class="toast">
		{toastData().message}
	</div>
}	



