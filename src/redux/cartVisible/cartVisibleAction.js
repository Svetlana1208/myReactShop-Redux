export function toggleCartVisibleAction(state) {
    if(state.value === false) {
        state.value = true
    }
    else {
        state.value = false
    }
} 