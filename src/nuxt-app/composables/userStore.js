export const userStore = () => {
  const isLoggedIn = useState('is_logged_in', () => null)
  const userData = useState('is_logged_in', () => {})
  const state = {
    isLoggedIn,
    userData
  }
  const updatingLoginState = (bool) => {
    isLoggedIn.value = bool
  }

  return { state, updatingLoginState }
}