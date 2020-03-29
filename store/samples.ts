import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Sample } from '~/models/Sample'

@Module({ stateFactory: true, namespaced: true, name: 'samples' })
export default class Samples extends VuexModule {
  list: Array<Sample> = [
    {
      id: 1,
      text: 'hello'
    },
    {
      id: 2,
      text: 'bye'
    }
  ]

  @Mutation
  add(sample: Sample) {
    this.list.push(sample)
  }

  get getSampleById() {
    return (id: number) => {
      return this.list.find((sample: Sample) => sample.id === id)
    }
  }
}
