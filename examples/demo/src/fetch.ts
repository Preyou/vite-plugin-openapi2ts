import { Paths_Intersection } from './api/openApi';
import axios from "axios";
import { axiosAdapter } from '@1szx1/vite-plugin-swagger2ts/adapters'

const instance = axios.create()

export const { request } = axiosAdapter<Paths_Intersection>(instance)