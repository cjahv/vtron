import { BrowserWindow, System } from 'vtron';
import VideoVue from '../components/apps/Video.vue';
import ImageVue from '../components/apps/Image.vue';

export function mountOpener(system: System) {
  system.registerFileOpener(['.mp4', '.mkv'], {
    name: '视频',
    icon: '',
    func: (path, content) => {
      new BrowserWindow({
        title: path,
        icon: '',
        width: 800,
        height: 600,
        resizable: true,
        center: true,
        content: VideoVue,
        config: {
          path: path,
          content: content,
        },
      }).show();
    },
  });

  system.registerFileOpener(['.jpg', '.png'], {
    name: '图片预览',
    icon: '',
    func: (path, content) => {
      new BrowserWindow({
        title: path,
        icon: '',
        width: 800,
        height: 600,
        resizable: true,
        center: true,
        content: ImageVue,
        config: {
          path: path,
          content: content,
        },
      }).show();
    },
  });
}
