import {
    ApolloFederationDriver,
    ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LibsServerGraphqlDataloaderModule } from '@rollers/libs-server-graphql-dataloader';
import { DATALOADERS } from './loaders';
import { EventResolver } from './resolvers/event/event.resolver';
import { MeResolver } from './resolvers/me/me.resolver';
import { Me } from './types/me.type';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Me]
      }
    }),
    LibsServerGraphqlDataloaderModule,
  ],
  providers: [EventResolver, MeResolver, ...DATALOADERS],
})
export class GraphqlModule {}
