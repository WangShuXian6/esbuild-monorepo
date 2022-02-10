export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',// centered: 使组件在 Canvas 中水平和垂直居中 // fullscreen: 允许组件扩展到 Canvas 的全宽和全高 // padded：（默认）在组件周围添加额外的填充
}