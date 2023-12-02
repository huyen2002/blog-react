import { ReadList, ReadListUtils } from './ReadList'
import { Topic, TopicUtils } from './Topic'
import { User, UserUtils } from './User'

export interface Post {
  id: number
  title: string
  topics: Topic[]
  readLists: ReadList[]
  author: User
  description: string
  content: string
  createAt: Date
  updateAt: Date
  published: boolean
  reactionCount: number
}
export const PostUtils = {
  init: () => {
    return {
      id: null,
      topics: [],
      readLists: [],
      author: null,
      title: '',
      description: '',
      content: '',
      createAt: new Date(),
      updateAt: new Date(),
      published: false,
      reactionCount: 0,
    } as unknown as Post
  },
  toEntity: (dto: any) => {
    const topics = dto.topics
      ? dto.topics.map((topic: any) => TopicUtils.toEntity(topic))
      : null
    const readLists = dto.readLists
      ? dto.readLists.map((readList: any) => ReadListUtils.toEntity(readList))
      : null
    const author = dto.author ? UserUtils.toEntity(dto.author) : null
    return {
      id: dto.id,
      title: dto.title,
      topics: topics,
      readLists: readLists,
      author: author,
      description: dto.description,
      content: dto.content,
      creatAt: new Date(dto.createAt),
      updateAt: new Date(dto.updateAt),
      published: dto.published,
      reactionCount: dto.reactionCount,
    } as unknown as Post
  },
  toEntities: (dtos: any[]) => {
    return dtos.map((dto) => PostUtils.toEntity(dto))
  },
}
