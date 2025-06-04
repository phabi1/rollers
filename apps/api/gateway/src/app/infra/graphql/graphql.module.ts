import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { readFile } from 'fs/promises';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useFactory: async (configService: ConfigService) => {
        const config = JSON.parse(
          await readFile(
            configService.get('app.data') + '/graphql.json',
            'utf8'
          )
        );

        return {
          gateway: {
            supergraphSdl: new IntrospectAndCompose({
              subgraphs: config.subgraphs,
            }),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class GraphqlModule {}
