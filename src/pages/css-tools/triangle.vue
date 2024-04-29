<template>
  <div class="page">
    <div class="page-container" flex="cross:center">
      <div class="editor">
        <div class="editor-row" flex>
          <div class="editor-item">
            <div class="label">方向</div>
            <div class="dir">
              <div class="square" flex="wrap:wrap">
                <div
                  class="square-item"
                  :class="{ active: form.dir == item.dir }"
                  v-for="(item, index) in cornerList"
                  :key="index"
                  @click="choseDir(item)"
                ></div>
              </div>
              <div class="square rotate" flex="wrap:wrap">
                <div
                  class="square-item"
                  :class="{ active: form.dir == item.dir }"
                  v-for="(item, index) in directList"
                  :key="index"
                  @click="choseDir(item)"
                ></div>
              </div>
              <div class="placeholder"></div>
            </div>
          </div>
          <div class="editor-item">
            <div class="label">颜色</div>
            <input type="color" v-model="color" />
          </div>
        </div>
        <div class="editor-row">
          <div class="label">类型</div>
          <el-radio-group v-model="form.type">
            <el-radio v-if="form.dir < 5" :label="1">等边</el-radio>
            <el-radio v-if="form.dir < 5" :label="2">等腰</el-radio>
            <el-radio v-if="form.dir < 5" :label="3">不等边</el-radio>
            <el-radio v-if="form.dir > 4" :label="4">任意直角</el-radio>
          </el-radio-group>
        </div>
        <div class="editor-row">
          <div class="label">尺寸</div>
          <el-row>
            <el-tag type="info">宽度</el-tag>
          </el-row>
          <el-row>
            <el-input-number
              v-model="form.width"
              :min="1"
              :max="200"
              :disabled="
                (form.type == 1 &&
                  (form.dir == Dir.Left || form.dir == Dir.Right)) ||
                (form.type == 3 &&
                  (form.dir == Dir.Top || form.dir == Dir.Bottom))
              "
            ></el-input-number>
          </el-row>
          <div flex="main:between">
            <div class="w50">
              <el-row>
                <el-tag type="info">左</el-tag>
              </el-row>
              <el-row>
                <el-input-number
                  v-model="form.left"
                  :min="1"
                  :max="200"
                  :disabled="
                    form.type == 1 ||
                    form.type == 2 ||
                    (form.type == 3 &&
                      (form.dir == Dir.Left || form.dir == Dir.Right)) ||
                    form.type == 4
                  "
                ></el-input-number>
              </el-row>
            </div>
            <div class="w50">
              <el-row>
                <el-tag type="info">右</el-tag>
              </el-row>
              <el-row>
                <el-input-number
                  v-model="form.right"
                  :min="1"
                  :max="200"
                  :disabled="
                    form.type == 1 ||
                    form.type == 2 ||
                    (form.type == 3 &&
                      (form.dir == Dir.Left || form.dir == Dir.Right)) ||
                    form.type == 4
                  "
                ></el-input-number>
              </el-row>
            </div>
          </div>
          <el-row>
            <el-tag type="info">高度</el-tag>
          </el-row>
          <el-row>
            <el-input-number
              v-model="form.height"
              :min="1"
              :max="200"
              :disabled="
                (form.type == 1 &&
                  (form.dir == Dir.Top || form.dir == Dir.Bottom)) ||
                (form.type == 3 &&
                  (form.dir == Dir.Left || form.dir == Dir.Right))
              "
            ></el-input-number>
          </el-row>
          <div flex="main:between">
            <div class="w50">
              <el-row>
                <el-tag type="info">上</el-tag>
              </el-row>
              <el-row>
                <el-input-number
                  v-model="form.top"
                  :min="1"
                  :max="200"
                  :disabled="
                    form.type == 1 ||
                    form.type == 2 ||
                    (form.type == 3 &&
                      (form.dir == Dir.Top || form.dir == Dir.Bottom)) ||
                    form.type == 4
                  "
                ></el-input-number>
              </el-row>
            </div>
            <div class="w50">
              <el-row>
                <el-tag type="info">下</el-tag>
              </el-row>
              <el-row>
                <el-input-number
                  v-model="form.bottom"
                  :min="1"
                  :max="200"
                  :disabled="
                    form.type == 1 ||
                    form.type == 2 ||
                    (form.type == 3 &&
                      (form.dir == Dir.Top || form.dir == Dir.Bottom)) ||
                    form.type == 4
                  "
                ></el-input-number>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="preview">
        <div class="label">预览</div>
        <div class="preview-container">
          <div class="triangle" :style="style"></div>
        </div>
        <br />
        <div class="label">Css</div>
        <div class="preview-css" v-if="style">
          <highlightjs :language="'css'" :code="styleFormat"></highlightjs>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
enum Dir {
  Top = 1,
  Right,
  Left,
  Bottom,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
}

const color = ref("#ff1493");
const directList = reactive([
  {
    dir: Dir.Top,
  },
  {
    dir: Dir.Right,
  },
  {
    dir: Dir.Left,
  },
  {
    dir: Dir.Bottom,
  },
]);
const cornerList = reactive([
  {
    dir: Dir.TopLeft,
  },
  {
    dir: Dir.TopRight,
  },
  {
    dir: Dir.BottomLeft,
  },
  {
    dir: Dir.BottomRight,
  },
]);
const form = reactive({
  type: 1,
  width: 100,
  height: 100,
  left: 20,
  right: 20,
  top: 20,
  bottom: 20,
  dir: 1,
});

// 等边三角形
const buildStyle1 = (dir: Dir) => {
  let width: number | string = 0;
  let height: number | string = 0;
  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;
  switch (dir) {
    case Dir.Top: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = Math.sqrt(Math.pow(width, 2) - Math.pow(left, 2)).toFixed(1);
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent transparent ${color.value} transparent;`;
    }
    case Dir.Bottom: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = Math.sqrt(Math.pow(width, 2) - Math.pow(left, 2)).toFixed(1);
      return `border-style: solid;border-width: ${height}px ${right}px 0 ${left}px;border-color: ${color.value} transparent transparent transparent;`;
    }
    case Dir.Left: {
      height = form.height;
      top = height / 2;
      bottom = height / 2;
      form.top = top;
      form.bottom = bottom;
      width = Math.sqrt(Math.pow(height, 2) - Math.pow(top, 2)).toFixed(1);
      return `border-style: solid;border-width: ${top}px ${width}px ${bottom}px 0;border-color:  transparent ${color.value} transparent transparent;`;
    }
    case Dir.Right: {
      height = form.height;
      top = height / 2;
      bottom = height / 2;
      form.top = top;
      form.bottom = bottom;
      width = Math.sqrt(Math.pow(height, 2) - Math.pow(top, 2)).toFixed(1);
      return `border-style: solid;border-width: ${top}px 0 ${bottom}px ${width}px ;border-color: transparent transparent transparent ${color.value};`;
    }
    default: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = Math.sqrt(Math.pow(width, 2) - Math.pow(left, 2)).toFixed(1);
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent ${color.value} transparent transparent;`;
    }
  }
};

// 等腰三角形
const buildStyle2 = (dir: Dir) => {
  let width: number | string = 0;
  let height: number | string = 0;
  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;
  switch (dir) {
    case Dir.Top: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = form.height;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent transparent ${color.value} transparent;`;
    }
    case Dir.Bottom: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = form.height;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: ${height}px ${right}px 0 ${left}px;border-color: ${color.value} transparent transparent transparent;`;
    }
    case Dir.Left: {
      height = form.height;
      top = height / 2;
      bottom = height / 2;
      form.top = top;
      form.bottom = bottom;
      width = form.width;
      form.left = width / 2;
      form.right = width / 2;
      return `border-style: solid;border-width: ${top}px ${width}px ${bottom}px 0;border-color:  transparent ${color.value} transparent transparent;`;
    }
    case Dir.Right: {
      height = form.height;
      top = height / 2;
      bottom = height / 2;
      form.top = top;
      form.bottom = bottom;
      width = form.width;
      form.left = width / 2;
      form.right = width / 2;
      return `border-style: solid;border-width: ${top}px 0 ${bottom}px ${width}px ;border-color: transparent transparent transparent ${color.value};`;
    }
    default: {
      width = form.width;
      left = width / 2;
      right = width / 2;
      form.left = left;
      form.right = right;
      height = form.height;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent transparent ${color.value} transparent;`;
    }
  }
};
// 不等边
const buildStyle3 = (dir: Dir) => {
  let width: number | string = 0;
  let height: number | string = 0;
  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;
  switch (dir) {
    case Dir.Top: {
      height = form.height;
      right = form.right;
      left = form.left;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent transparent ${color.value} transparent;`;
    }
    case Dir.Bottom: {
      height = form.height;
      right = form.right;
      left = form.left;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: ${height}px ${right}px 0 ${left}px;border-color: ${color.value} transparent transparent transparent;`;
    }
    case Dir.Left: {
      width = form.width;
      top = form.top;
      bottom = form.bottom;
      form.left = width / 2;
      form.right = width / 2;
      return `border-style: solid;border-width: ${top}px ${width}px ${bottom}px 0;border-color:  transparent ${color.value} transparent transparent;`;
    }
    case Dir.Right: {
      width = form.width;
      top = form.top;
      bottom = form.bottom;
      form.left = width / 2;
      form.right = width / 2;
      return `border-style: solid;border-width: ${top}px 0 ${bottom}px ${width}px ;border-color: transparent transparent transparent ${color.value};`;
    }
    default: {
      height = form.height;
      right = form.right;
      left = form.left;
      form.top = height / 2;
      form.bottom = height / 2;
      return `border-style: solid;border-width: 0 ${right}px ${height}px ${left}px;border-color: transparent transparent ${color.value} transparent;`;
    }
  }
};

const buildStyle4 = (dir: Dir) => {
  let width = form.width;
  let height = form.height;
  switch (dir) {
    case Dir.TopLeft: {
      return `border-style: solid;border-width: ${height}px ${width}px 0 0;border-color: ${color.value} transparent transparent  transparent;`;
    }
    case Dir.TopRight: {
      return `border-style: solid;border-width: 0 ${width}px ${height}px 0;border-color: transparent ${color.value}  transparent  transparent;`;
    }
    case Dir.BottomLeft: {
      return `border-style: solid;border-width: ${height}px 0 0 ${width}px ;border-color:  transparent  transparent  transparent ${color.value}  ; `;
    }
    case Dir.BottomRight: {
      return `border-style: solid;border-width:  ${height}px ${width}px 0 0 ;border-color: transparent ${color.value} transparent transparent ;`;
    }
    default: {
      return `border-style: solid;border-width: ${height}px ${width}px 0 0;border-color: ${color.value} transparent transparent  transparent;`;
    }
  }
};

const style = ref("");
const styleFormat = computed(() => {
  if (style.value) {
    return style.value.replace(/;/g, ";\u000d");
  }
  return [];
});

watch(color, () => {
  if (form.type == 1) {
    style.value = buildStyle1(form.dir);
  } else if (form.type == 2) {
    style.value = buildStyle2(form.dir);
  } else if (form.type == 3) {
    style.value = buildStyle3(form.dir);
  } else {
    style.value = buildStyle4(form.dir);
  }
});
watch(
  () => form.type,
  (type) => {
    if (type == 1) {
      style.value = buildStyle1(form.dir);
    } else if (type == 2) {
      style.value = buildStyle2(form.dir);
    } else if (type == 3) {
      style.value = buildStyle3(form.dir);
    } else {
      style.value = buildStyle4(form.dir);
    }
  },
  { immediate: true }
);

watch(
  () => form.dir,
  (dir) => {
    if (form.type == 1) {
      style.value = buildStyle1(dir);
    } else if (form.type == 2) {
      style.value = buildStyle2(dir);
    } else if (form.type == 3) {
      style.value = buildStyle3(dir);
    } else {
      style.value = buildStyle4(dir);
    }
  }
);

watch(
  () => form.width,
  () => {
    console.log(form.width);
    if (form.type == 1 && (form.dir == Dir.Top || form.dir == Dir.Bottom)) {
      style.value = buildStyle1(form.dir);
    } else if (form.type == 2) {
      style.value = buildStyle2(form.dir);
    } else if (form.type == 3) {
      style.value = buildStyle3(form.dir);
    } else {
      style.value = buildStyle4(form.dir);
    }
  }
);

watch(
  () => form.height,
  () => {
    if (form.type == 1 && (form.dir == Dir.Left || form.dir == Dir.Right)) {
      style.value = buildStyle1(form.dir);
    } else if (form.type == 2) {
      style.value = buildStyle2(form.dir);
    } else if (
      form.type == 3 &&
      (form.dir == Dir.Top || form.dir == Dir.Bottom)
    ) {
      style.value = buildStyle3(form.dir);
    } else {
      style.value = buildStyle4(form.dir);
    }
  }
);
watch(
  () => form.left,
  () => {
    if (form.type == 3) {
      if (form.dir == Dir.Top || form.dir == Dir.Bottom) {
        form.width = form.left + form.right;
      }
    }
  }
);
watch(
  () => form.right,
  () => {
    if (form.type == 3) {
      if (form.dir == Dir.Top || form.dir == Dir.Bottom) {
        form.width = form.left + form.right;
      }
    }
  }
);
watch(
  () => form.top,
  () => {
    if (form.type == 3) {
      if (form.dir == Dir.Left || form.dir == Dir.Right) {
        form.height = form.top + form.bottom;
      }
    }
  }
);
watch(
  () => form.bottom,
  () => {
    if (form.type == 3) {
      if (form.dir == Dir.Left || form.dir == Dir.Right) {
        form.height = form.top + form.bottom;
      }
    }
  }
);
const choseDir = (item: { dir: Dir }) => {
  form.dir = item.dir;
  if (form.dir < 5) {
    if (form.type > 3) {
      form.type = 1;
    }
  } else {
    form.type = 4;
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 1000px;
  height: 100vh;
  margin: 0 auto;

  &-container {
    padding: 50px;
  }
}

.editor {
  width: 50%;
  flex: 0 0 50%;

  &-row {
    margin: 10px 0;
  }

  &-item {
    width: 50%;
    flex: 0 0 50%;
  }
}

.preview {
  width: 50%;
  flex: 0 0 50%;

  &-container {
    position: relative;
    width: 300px;
    height: 300px;
    background: #fff;
    background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.2) 25%,
        transparent 0,
        transparent 75%,
        rgba(0, 0, 0, 0.2) 0
      ),
      linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.2) 25%,
        transparent 0,
        transparent 75%,
        rgba(0, 0, 0, 0.2) 0
      );
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }

  &-css {
    margin: 10px auto;
    color: #fff;
    user-select: all;
  }
}

.label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.dir {
  position: relative;
  width: 200px;
  height: 240px;
}

.square {
  position: absolute;
  top: 40px;
  left: 40px;
  transform: translateX(-40px);

  &-item {
    width: 80px;
    height: 80px;
    flex: 0 0 80px;
    background: #ffc814;

    &.active {
      background: deeppink;
    }

    &:hover {
      background: deeppink;
    }
  }

  &.rotate {
    transform: translateX(-40px) rotate(45deg);

    .square-item {
      background: deepskyblue;

      &.active {
        background: deeppink;
      }

      &:hover {
        background: deeppink;
      }
    }
  }
}

.placeholder {
  width: 113px;
  height: 113px;
  position: absolute;
  z-index: 10;
  top: 63px;
  left: 22px;
  background: #fff;
}

.el-row {
  padding: 5px 0;
}

.w50 {
  width: 50%;
  flex: 0 0 50%;
}

.triangle {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all ease 0.5s;
}
</style>
