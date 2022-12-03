import { Module, VuexModule } from 'vuex-module-decorators'

export interface ImageData {
  title: string
  fileName: string
}

@Module({ stateFactory: true, namespaced: true, name: 'image' })
export default class Image extends VuexModule {
  largeImage: ImageData = {
    title: 'YouthSignal 教室',
    fileName: 'image-1.jpg',
  }

  smallImages: ImageData[] = [
    {
      title: 'YouthSignal 校門',
      fileName: 'image-2.jpg',
    },
    {
      title: 'YouthSignal 生徒会室',
      fileName: 'image-3.jpg',
    },
    {
      title: 'YouthSignal 廊下',
      fileName: 'image-4.jpg',
    },
    {
      title: 'YouthSignal 教室',
      fileName: 'image-5.jpg',
    },
  ]
}
