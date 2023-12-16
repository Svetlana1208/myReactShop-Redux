export function toggleSuccessVisibleAction(state) {
    if(state.value === false) {
        state.value = true
    }
    else {
        state.value = false
    }
} 