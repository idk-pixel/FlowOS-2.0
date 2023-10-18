import icon from '../assets/icons/info.png'
import { App, PackageJSON } from '../types.ts'
import { FlowWindow } from '../wm.ts'

export default class SettingsApp implements App {
  name = 'Info'
  pkg = 'flow.info'
  icon = icon
  version = '1.0.0'
  canResize = true

  async open (): Promise<FlowWindow> {
    const packageJSON: PackageJSON = await import('../../package.json')
    const win = window.wm.createWindow({
      title: this.name,
      icon,
      width: 300,
      height: 400,
      canResize: false
    })

    win.content.style.padding = '10px'
    win.content.style.textAlign = 'center'
    win.content.style.display = 'flex'
    win.content.style.flexDirection = 'column'
    win.content.style.justifyContent = 'center'
    win.content.style.alignItems = 'center'
    win.content.innerHTML = `
        <div>
          <h1 style="margin:0;">FlowOS</h1>
          <p style="margin:0;">v${packageJSON.version}</p>
          <br/>
          <p>Created by ThinLiquid, 1nspird_, proudparot2, systemless_</p>
          <a class="discord" href="https://discord.gg/flowos">Discord</a>
         - 
        <a class="github" href="https://github.com/Flow-Works/FlowOS-2.0">Github</a>
        </div>
    `

    return win
  }
}
