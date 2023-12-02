export interface Topic {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}
export const TopicUtils = {
  toEntity: (dto: any) => {
    return {
      id: dto.id,
      name: dto.name,
      createAt: new Date(dto.createAt),
      updateAt: new Date(dto.updateAt),
    } as Topic
  },
  toEntities: (dtos: any[]) => {
    return dtos.map((dto) => TopicUtils.toEntity(dto))
  },
}
