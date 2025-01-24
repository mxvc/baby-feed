
export function showSuccess(msg){
    uni.showToast({
        icon: 'success',
        title: msg
    })
}
export function showError(msg){
    uni.showToast({
        icon: 'error',
        title: msg
    })
}
