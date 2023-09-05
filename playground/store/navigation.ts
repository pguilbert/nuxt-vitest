import { defineStore } from 'pinia'

type State = {
  navState: 'opened' | 'closed'
}

export const useNavigationStore = defineStore('navigation', {
  state: (): State => ({
    navState: 'closed',
  }),
  actions: {
    openNavigation() {
      this.navState = 'opened'
    },

    closeNavigation() {
      this.navState = 'closed'
    },
    toggleNavigation() {
      if (this.navState === 'opened') {
        this.navState = 'closed'
      } else {
        this.navState = 'opened'
      }
    },
    setNavigationState(navigationState: State['navState']) {
      this.navState = navigationState
    },
  },
  getters: {
    isNavigationOpened: state => state.navState === 'opened',
    isNavigationClosed: state => state.navState === 'closed',
  },
})
