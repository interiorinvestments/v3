import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url)
  .then((r) => r.json())
  .then((data) => ({ user: data?.user || null }));

// eslint-disable-next-line import/prefer-default-export
export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/auth/user', fetcher);
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser)
      // If redirectIfFound is also set, redirect if the user was found
      || (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  return error ? null : user;
}
