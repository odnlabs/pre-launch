import {
  HydratedDocument,
  Schema,
  SchemaTimestampsConfig,
  model,
} from 'mongoose';

import { IEmail } from '@/typings/core';

export interface EmailSchema extends IEmail, SchemaTimestampsConfig {}

export type EmailDocument = HydratedDocument<EmailSchema>;

export const EmailModel = model<EmailDocument>(
  'Email',
  new Schema<EmailSchema>(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 100,
        test: 'email',
      },
    },

    { timestamps: true }
  )
);
