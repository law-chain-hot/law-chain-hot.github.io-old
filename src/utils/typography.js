// import './global.css'

import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
import WordpressGithub from 'typography-theme-github'
// import WordpressGithub from 'typography-theme-wikipedia'



const typography = new Typography(WordpressGithub)

export const { scale, rhythm, options } = typography
export default typography