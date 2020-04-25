/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import information from '~/store/information'
import Character from '~/store/character'
import Image from '~/store/image'
import Spec from '~/store/spec'
import Staff from '~/store/staff'
import Modal from '~/store/modal'
import View from '~/store/view'

let informationStore: information
let characterStore: Character
let imageStore: Image
let specStore: Spec
let staffStore: Staff
let modalStore: Modal
let viewStore: View

function initializeStores(store: Store<any>): void {
  informationStore = getModule(information, store)
  characterStore = getModule(Character, store)
  imageStore = getModule(Image, store)
  specStore = getModule(Spec, store)
  staffStore = getModule(Staff, store)
  modalStore = getModule(Modal, store)
  viewStore = getModule(View, store)
}

export {
  initializeStores,
  informationStore,
  characterStore,
  imageStore,
  specStore,
  staffStore,
  modalStore,
  viewStore,
}
