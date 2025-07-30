// app/page.tsx
import { cookies } from 'next/headers'

export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value

  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}
