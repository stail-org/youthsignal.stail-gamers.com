/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Samples from '~/store/samples'

let samplesStore: Samples

function initializeStores(store: Store<any>): void {
  samplesStore = getModule(Samples, store)
}

export { initializeStores, samplesStore }
