<template>
  <div
    class="wrapper mb-3 border-t border-solid p-2"
    :class="isDark ? 'border-black' : 'border-gray-lighter'"
  >
    <div class="emoji-view-header flex justify-between">
      <span class="font-name">{{ family }}</span>
      <fa
        icon="download"
        class="cursor-pointer"
        :class="isDark ? 'text-white' : 'text-black'"
        @click="onClickDownload"
      />
    </div>
    <div class="emoji-view-body mt-3">
      <emoji-canvas
        ref="canvas"
        class="s128"
        :text="text"
        :size="calculatedSize"
        :family="family"
        :color="color"
        :weight="weight"
        :view-size="128"
      />
      <emoji-canvas
        class="s32 mx-1"
        :text="text"
        :size="calculatedSize"
        :family="family"
        :color="color"
        :weight="weight"
        :view-size="32"
      />
      <emoji-canvas
        class="s22 mx-1"
        :text="text"
        :size="calculatedSize"
        :family="family"
        :color="color"
        :weight="weight"
        :view-size="22"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import EmojiCanvas from '~/components/EmojiCanvas.vue'

@Component({
  components: { EmojiCanvas }
})
export default class EmojiView extends Vue {
  @Prop({ type: String })
  text!: string

  @Prop({ type: String })
  color!: string

  @Prop({ type: String })
  family!: string

  @Prop({ type: String })
  weight!: string

  @Prop({ type: Boolean })
  isDark!: boolean

  onClickDownload() {
    ;(this.$refs.canvas as EmojiCanvas).download()
  }

  get calculatedSize() {
    if (this.text.length === 1) {
      return 512
    }
    return 256
  }
}
</script>

<style scoped>
.wrapper {
  width: 280px;
}

.s128 {
  margin-bottom: 1px;
}
.s32 {
  margin-bottom: 1px;
}
.s22 {
  margin-bottom: 1px;
}
</style>
