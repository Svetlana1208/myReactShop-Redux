export function selectTypeAction(state, action) {
    state.value = action.payload.value;
}