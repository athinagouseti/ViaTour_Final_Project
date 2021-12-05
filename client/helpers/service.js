import auth from '@react-native-firebase/auth'

const getToken = () => {
  return auth().currentUser?.getIdToken()
}

const service = (url) => ({
  get: async () => {
    const token = await getToken()
    return fetch(url, { headers: { "Auth-Token": token }}).then((res) => res.json());
  },
  delete: async () => {
    const token = await getToken()
    return fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Auth-Token": token },
    });
  },
  post: async ( payload) => {
    const token = await getToken()
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Auth-Token": token },
      body: JSON.stringify(payload),
    });
  },
  patch: async (payload) => {
    const token = await getToken()

    return fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "Auth-Token": token },
      body: JSON.stringify(payload),
    });
  }
})

export default service;
