import {GraphQLDate, GraphQLDateTime, GraphQLTime} from "graphql-iso-date";
import {getRepository, MoreThanOrEqual, LessThanOrEqual, Between} from "typeorm";
import {User} from "../entity/User";

export const Resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    user_by_id: async (_: any, args: any) => {
      const id = args.id;
      const userRepository = getRepository(User);
      return await userRepository.findOne({ where: {id: id}});
    },
  },
  Mutation: {
    async addUsers(_: any, input: any) {
      console.log(input);
      const userRepository = getRepository(User);
      await userRepository.save(input.users);

      return 0;
    }
  }
};
