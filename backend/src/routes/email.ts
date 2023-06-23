import config from '@/config';
import { EmailModel } from '@/models/Email';
import axios from 'axios';
import { Endpoint } from 'express-custom';

export const addEmail = new Endpoint({
  name: 'Add Email',
  description: 'Add an email to the database.',
  path: '/add',
  method: 'POST',
  errorResponse: {
    status: 500,
    message: 'An error occurred while adding the email to the database.',
  },
})
  .setBodySchema((schema) =>
    schema.addString({
      name: 'email',
      required: true,
      min: 5,
      max: 100,
      test: 'email',
    })
  )
  .setController<{ body: { email: string } }>(async (req, res) => {
    console.log(req.body.email);
    const exists = await EmailModel.exists({ email: req.body.email });

    if (exists)
      return res.status(400).json({
        status: 400,
        message: 'Email already added to notify list.',
        exists: true,
      });

    await EmailModel.create({ email: req.body.email });

    res.json({
      status: 200,
      message: 'Thanks for signing up!',
    });

    axios.post(config.env.D_WEBHOOK, {
      content: `<t:${(Date.now() / 1000).toFixed(0)}:R> A new ${
        req.body.email.split('@')[1]
      } email has been added to the notify list. Total: ${await EmailModel.countDocuments()}`,
    });
  });
