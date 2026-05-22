import { useSupabaseClient, useSupabaseUser } from '#imports'

export function useAuth() {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  async function signInWithOtp(email: string) {
    const redirectTo = import.meta.client
      ? `${window.location.origin}/confirm`
      : undefined

    return await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    })
  }

  async function signOut() {
    return await supabase.auth.signOut()
  }

  return { user, signInWithOtp, signOut }
}
