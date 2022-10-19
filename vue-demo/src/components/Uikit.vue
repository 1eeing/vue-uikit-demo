<template>
  <div ref="wrapper" class="wrapper">
  </div>
</template>
<script lang="ts">
// 从打包好的 js 中引入 render 和 unmount
import { render, unmount } from '../lib/uikit.js';

import '@xkit-yx/im-kit-ui/es/style';
import 'antd/dist/antd.less';

export default {
  mounted() {
      // 调用 render，传入 props
      render(this.$refs.wrapper as any, {
        appkey: import.meta.env.VITE_APP_APPKEY,
        account: import.meta.env.VITE_APP_ACCOUNT,
        token: import.meta.env.VITE_APP_TOKEN,
        lbsUrls: import.meta.env.VITE_APP_IM_LBS_URL,
        linkUrl: import.meta.env.VITE_APP_IM_DEFAULT_LINK,
        debugLevel: 'debug',
        needReconnect: true,
        reconnectionAttempts: 5,
      });
  },

  beforeDestroy() {
      // vue 组件销毁时调用 unmount
    unmount(this.$refs.wrapper)
  },
}
</script>
<style scoped>
.wrapper {
    width: 100%;
    height: 90vh;
}
</style>
