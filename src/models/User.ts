export interface User {
  id: number
  username: string
  email: string
  createAt: Date
  updateAt: Date
  role: string
}
export const UserUtils = {
  toEntity: (dto: any) => {
    return {
      id: dto.id,
      username: dto.username,
      email: dto.email,
      createAt: new Date(dto.createAt),
      updateAt: new Date(dto.updateAt),
      role: dto.role,
    } as User
  },
  toEntities: (dtos: any[]) => {
    return dtos.map((dto) => UserUtils.toEntity(dto))
  },
}
