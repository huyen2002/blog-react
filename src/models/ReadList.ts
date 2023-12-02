export interface ReadList {
  id: number
  name: string
  createAt: Date
  updateAt: Date
  postCount: number
}
export const ReadListUtils = {
  init: () => {
    return {
      id: 0,
      name: '',
      createAt: new Date(),
      updateAt: new Date(),
      postCount: 0,
    } as ReadList
  },
  toEntity: (dto: any) => {
    return {
      id: dto.id,
      name: dto.name,
      createAt: new Date(dto.createAt),
      updateAt: new Date(dto.updateAt),
      postCount: dto.postCount,
    } as ReadList
  },
  toEntities: (dtos: any[]) => {
    return dtos.map((dto) => ReadListUtils.toEntity(dto))
  },
}
