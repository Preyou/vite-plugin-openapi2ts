import { PathsApi } from "./swagger";
import axios from "axios";
import { axiosAdapter } from '@1szx1/vite-plugin-swagger2ts/adapters'

const instance = axios.create()

const { request } = axiosAdapter<PathsApi>(instance)
