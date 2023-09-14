import { Paths供应链平台服务 } from "./yapi";
import axios from "axios";
import { axiosAdapter } from '@1szx1/vite-plugin-swagger2ts/adapters'

const instance = axios.create()

const { request } = axiosAdapter<Paths供应链平台服务>(instance)
