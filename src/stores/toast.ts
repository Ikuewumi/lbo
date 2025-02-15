import { map } from "nanostores";

let TIMER_ID = 0
const MESSAGE_DURATION = 3000
export const $toastData = map({
    message: "beatiful relentless brute force",
    open: false
})


export const showToastMessage = (message: string) => {
    clearTimeout(TIMER_ID)
    $toastData.setKey('message', message),
    $toastData.setKey('open', true)
    TIMER_ID = setTimeout(() => {
        $toastData.setKey('open', false)
        clearTimeout(TIMER_ID)
    }, MESSAGE_DURATION)
}
