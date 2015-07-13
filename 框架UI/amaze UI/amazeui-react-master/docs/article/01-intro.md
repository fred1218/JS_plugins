`<Article>` 组件，用于显示文章内容，属性列表：

- `title`: `node` - 文章标题
- `meta`: `node` - 文章元数据（作者、日期等）

**子组件 `<Article.Child>`**:

- `role`: `string` - 子组件角色：
  - `title`: 渲染为标题
  - `meta`: 渲染为元数据
  - `lead`: 渲染为导读
  - `divider`: 渲染为分割线
