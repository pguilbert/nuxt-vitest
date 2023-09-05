import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, screen } from '@testing-library/vue'

import { createTestingPinia } from '@pinia/testing'

import { renderSuspended } from 'vitest-environment-nuxt/utils'

import StoreComponent from '~/components/StoreComponent.vue'

describe('StoreComponent', () => {
  afterEach(() => {
    cleanup()
  })
  it.only('render using create testing pinia', async () => {
    await renderSuspended(StoreComponent, {
      global: {
        plugins: [
          createTestingPinia({
            fakeApp: true,
            initialState: {
              navigation: 'opened',
            },
          }),
        ],
      },
    })
    expect(screen.getByText('opened')).toBeDefined()
  })
})
