import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, screen } from '@testing-library/vue'

import { getActivePinia, type Pinia, type Store } from 'pinia'

import { renderSuspended } from 'vitest-environment-nuxt/utils'

import StoreComponent from '~/components/StoreComponent.vue'
import { useNavigationStore } from '~/store/navigation'

interface ExtendedPinia extends Pinia {
  _s: Map<string, Store>
}

describe('StoreComponent', () => {
  afterEach(() => {
    cleanup()

    // Reset a specific store
    // useNavigationStore().$reset()

    // Reset all stores, can be added to a global afterEach
    // https://github.com/vuejs/pinia/discussions/911
    ;(getActivePinia() as unknown as ExtendedPinia)?._s.forEach(store =>
      store.$reset()
    )
  })

  it.only('render with new value', async () => {
    const navigationStore = useNavigationStore()
    navigationStore.navState = 'opened'

    await renderSuspended(StoreComponent)
    expect(screen.getByText('opened')).toBeDefined()
  })

  it.only('render with default value', async () => {
    await renderSuspended(StoreComponent)
    expect(screen.getByText('closed')).toBeDefined()
  })
})
