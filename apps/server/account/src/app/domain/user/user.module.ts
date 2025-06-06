import { Module } from '@nestjs/common';
import { PASSWORD_ENCODER } from './constants';
import { BcryptPasswordEncoder } from './password-encoders/bcrypt';
import { PasswordEncoderService } from './services/password-encoder/password-encoder.service';

@Module({
  providers: [
    PasswordEncoderService,
    { provide: PASSWORD_ENCODER, useClass: BcryptPasswordEncoder },
  ],
  exports: [PasswordEncoderService],
})
export class UserModule {}
