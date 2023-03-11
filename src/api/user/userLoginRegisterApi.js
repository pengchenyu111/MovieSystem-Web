import httpFetch from "@/api/httpFetch";

/**
 * 用户登录
 */
export const login = (phone, password) => {
  const url = '/uaa/login'
  const request = {phone: phone , password: password}

  return httpFetch.post(url, request)
}

/**
 * 用户注册
 */
export const register = (request) => {
  const url = '/movieUser/register'
  return httpFetch.post(url, request)
}
