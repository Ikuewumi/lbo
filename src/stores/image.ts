import { map } from "nanostores";

export const $imageBoxData = map({
    img: "",
    caption: "",
    open: false
})

export const imageBoxActions = {
    close: () => {
        $imageBoxData.setKey('open', false)
        const rootEl = globalThis.document.querySelector("#root")
        rootEl?.removeAttribute('data-toast')
    },

    open: () => {
        if ($imageBoxData.get().img === "") throw Error("no image, nothing to open!")
        $imageBoxData.setKey('open', true)
        const rootEl = globalThis.document.querySelector("#root")
        rootEl?.setAttribute('data-toast', "")
    },

    enterData: (img: string, caption: string) => {
        $imageBoxData.setKey("img", img)
        $imageBoxData.setKey("caption", caption)
    }


}
