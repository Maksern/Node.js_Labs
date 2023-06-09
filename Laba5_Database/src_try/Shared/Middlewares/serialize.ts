import { ClassConstructor, plainToInstance } from "class-transformer";

export function serializeRes<Serializer extends ClassConstructor<unknown>>(serializer: Serializer, plain: unknown){
      return plainToInstance(serializer, plain, {strategy: 'excludeAll'})
}