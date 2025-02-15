import { showToastMessage } from "../stores/toast"

export const share = async (title: string, text: string, slug: string) => {
	const shareData =  {
		title: title,
		text: text,
		url: `${window.location.origin}/work/${slug}`
	}

		console.log(shareData)
		try {
			if (!navigator?.share) {
			throw Error("cannot share this link")
			}
			await navigator.share(shareData)
			showToastMessage("link shared successfully")
		} catch (e) {
			console.log(e)
			showToastMessage(String(e))
		}
	}
