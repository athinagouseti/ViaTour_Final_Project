import auth from '@react-native-firebase/auth'

// Gets current Firebase auth token
const getToken = () => {
  return auth().currentUser?.getIdToken()
}

const service = (url) => ({
  get: async () => {
    const token = await getToken() // Get new token each time a request is made
    return fetch(url, { headers: { "auth-token": token }}); // Add token to HTTP header
  },
  delete: async () => {
    const token = await getToken()
    return fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "auth-token": token },
    });
  },
  post: async ( payload) => {
    const token = await getToken()
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "auth-token": token },
      body: JSON.stringify(payload),
    });
  },
  patch: async (payload) => {
    const token = await getToken()

    return fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "auth-token": token },
      body: JSON.stringify(payload),
    });
  }
})

export default service;
