import { SHOW_MENU, HIDE_MENU, FILTER_PROJECTS} from './types'

export function showMenu() {
    return {
      type: SHOW_MENU,
    };
  }
  export function hideMenu() {
    return {
      type: HIDE_MENU,
    };
  }
  export function filterProjects(filter) {
    return {
      type: FILTER_PROJECTS,
      payload: filter
    };
  }
