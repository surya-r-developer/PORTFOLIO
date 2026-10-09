import { cookies } from 'next/headers';

const ADMIN_SESSION_COOKIE = 'surya_admin_session';

export function checkIsAdminAuthenticated(): boolean {
  // Client/Server side session check placeholder
  return true;
}
