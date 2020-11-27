import { SHOW_MENU, HIDE_MENU, FILTER_PROJECTS} from "./types"

import {projetsList} from './projects'

const initialState={
    menu: false,
    projects: projetsList,
    filterItem: "All"
}

export const appReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SHOW_MENU:
            return {...state, menu: true}
        case HIDE_MENU:
            return {...state, menu: false}
        case FILTER_PROJECTS:
            return {...state, filterItem: action.payload}

        default:
            return state
    }
}

