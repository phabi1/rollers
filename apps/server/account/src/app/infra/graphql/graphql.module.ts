import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { MeResolver } from './resolvers/me/me.resolver';
import { AuthResolver } from './resolvers/auth/auth.resolver';
import { AuthModule } from '../../domain/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      introspection: true,
    }),
    forwardRef(() => AuthModule),
  ],
  providers: [MeResolver, AuthResolver],
})
export class GraphqlModule {}
