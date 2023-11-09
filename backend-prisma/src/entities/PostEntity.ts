import { UserEntity } from "./UserEntity";

export type PostEntity = {
  id: number;
  topico: string;
  criadoEm: Date;
  atualizadoEm: Date;
  usuario: UserEntity;
};
