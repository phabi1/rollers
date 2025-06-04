import { DiscoveryService } from "@nestjs/core";

export const Loader = DiscoveryService.createDecorator<string>()
