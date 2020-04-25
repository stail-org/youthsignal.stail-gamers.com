import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export interface WindowSize {
  width: number
  height: number
}

@Module({ stateFactory: true, namespaced: true, name: 'view' })
export default class View extends VuexModule {
  windowSize: WindowSize = {
    width: 0,
    height: 0,
  }

  /**
   * Window の width, height を保管する
   * @param payload.width 横幅
   * @param payload.height 高さ
   */
  @Mutation
  setWindowSize(payload: {
    width: WindowSize['width']
    height: WindowSize['height']
  }) {
    const { width, height } = payload
    this.windowSize.width = width
    this.windowSize.height = height
  }
}
