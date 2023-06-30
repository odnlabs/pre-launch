'use client';

import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import config from '@config';
import { ToastType } from '@typings/core';
import { Schema } from 'builder-validation';
import { addToast } from 'src/store';

export default function EmailForm() {
  const dispatch = useDispatch();

  const input = useRef<HTMLInputElement>(null);

  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const schema = new Schema().addString({
    name: 'email',
    required: true,
    min: 5,
    max: 100,
    test: 'email',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const result = await schema.validate({ email });

    if (typeof result === 'string') {
      dispatch(
        addToast({
          title: 'Error',
          description: result,
          type: ToastType.Error,
          time: 5000,
        })
      );

      setSubscribed(false);
      setLoading(false);
      setTimeout(() => {
        input.current?.focus();
      }, 10);

      return;
    }

    try {
      const res = await axios.post(
        `${config.PUBLIC_API_URL}/notify`,
        {
          email,
        },
        {
          timeout: 5000,
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        dispatch(
          addToast({
            title: 'Success',
            description: (res.data as { message: string }).message,
            type: ToastType.Success,
            time: 5000,
          })
        );
      }

      setSubscribed(true);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if ((error.response?.data as { exists?: boolean }).exists) {
          dispatch(
            addToast({
              title: 'Email Exists',
              description: 'Email already added to notify list!',
              type: ToastType.Success,
              time: 5000,
            })
          );
        } else {
          // convert Axios error to string
          const errorString =
            (error.response?.data as { message?: string }).message ??
            error.message;

          console.error(errorString);
          dispatch(
            addToast({
              title: 'Error',
              description: errorString,
              type: ToastType.Error,
              time: 5000,
            })
          );
        }
      } else {
        // convert other error to string
        const errorString = (error as string).toString();
        console.error(errorString);
        dispatch(
          addToast({
            title: 'Error',
            description: 'Something went wrong!',
            type: ToastType.Error,
            time: 5000,
          })
        );
      }

      setSubscribed(false);
      setLoading(false);
      setTimeout(() => {
        input.current?.focus();
      }, 10);
    }
  };

  return (
    <form
      className="relative mx-auto mt-12 h-16 w-full max-w-md"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        type="email"
        className={`absolute left-0 top-0 h-14 w-full rounded-lg bg-gray-900 p-5 pr-32 ring-gray-700 transition ${
          subscribed || loading ? 'opacity-50' : 'focus:ring-4'
        }`}
        placeholder="Enter your email address"
        onChange={(event) => setEmail(event.target.value)}
        disabled={subscribed || loading}
        min={5}
        max={100}
        ref={input}
        required
      />
      <button
        className={`absolute right-2 my-2 h-10 rounded-lg px-5 py-2 font-medium ${
          subscribed
            ? 'bg-green-500 text-white'
            : `bg-gray-300 text-black ${
                loading ? 'opacity-75' : 'hover:bg-white active:bg-gray-400'
              }`
        }`}
        type="submit"
        disabled={subscribed || loading}
      >
        {subscribed ? 'Subscribed!' : loading ? 'Sending...' : 'Notify Me'}
      </button>
    </form>
  );
}
