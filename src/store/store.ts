import { createStore, Commit } from 'vuex'
import axios from 'axios'
// import { testPosts, testData } from '@/testData'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface ResponseType<P = {}> {
  code: number
  msg: string
  data: P
}
export interface UserProps {
  isLogin: boolean
  nickName?: string
  _id?: number
  column?: number
  email?: string
}
export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
}
interface ColumnProps {
  _id?: string
  title?: string
  avatar?: ImageProps
  description?: string
}
// export interface PostProps {
//   _id: string
//   title: string
//   excerpt?: string
//   content?: string
//   image?: ImageProps
//   createdAt: string
//   column: string
// }
export interface PostProps {
  _id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}
export interface GlobalErrorProps {
  status: boolean
  message?: string
}
export interface GlobalDataProps {
  error: GlobalErrorProps
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
  loading: boolean
  token: string
}

// export interface ResponseType {}

// export interface ImageProps {}

const getAndCommit = async (
  url: string,
  mutationName: string,
  commit: Commit
) => {
  const res = await axios.get(url)
  commit(mutationName, res)
  console.log('数据', res)
  return res
}

const postAndCommit = async (
  url: string,
  mutationName: string,
  commit: Commit,
  payLoad: any
) => {
  const res = await axios.post(url, payLoad)
  commit(mutationName, res)
  return res
}

const store = createStore<GlobalDataProps>({
  state: {
    error: {
      status: false
    },
    columns: [],
    // columns: testPosts,
    posts: [],
    // posts: testData,
    user: { isLogin: false },
    loading: false,
    token: localStorage.token || ''
  },
  mutations: {
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      console.log('列表数据', rawData)
      state.columns = rawData.data.list
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list
    },
    setLoading(state, status) {
      state.loading = status
    },
    fetchCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
    login(state, rawData) {
      const { token } = rawData.data
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    setError(state, e: GlobalErrorProps) {
      state.error = e
    },
    logout(state) {
      state.token = ''
      localStorage.remove('token')
      delete axios.defaults.headers.common.Authorization
    }
  },
  actions: {
    async fetchColumns({ commit }) {
      return getAndCommit('columns', 'fetchColumns', commit)
    },
    async fetchColumn({ commit }, cid) {
      return getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
    },
    async fetchPosts({ commit }, cid) {
      return getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
    },
    fetchCurrentUser({ commit }) {
      return getAndCommit('/user/current', 'fetchCurrentUser', commit)
    },
    async login({ commit }, payLoad) {
      return postAndCommit('/user/login', 'login', commit, payLoad)
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    },
    async createPost({ commit }, payLoad) {
      return postAndCommit('/posts', 'createPost', commit, payLoad)
    }
  },
  getters: {
    getColumnById: (state) => (id: string) => {
      return state.columns.find((c) => c._id === id)
    },
    getPostsBycid: (state) => (cid: string) => {
      console.log(state.posts, cid)
      return state.posts.filter((post) => post.column === cid)
    }
  }
})

export default store
