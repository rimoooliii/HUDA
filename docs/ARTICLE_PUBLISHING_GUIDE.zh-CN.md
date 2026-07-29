# HUDA 手动上传与发布文章指南

这份指南写给以后负责发布文章的人。你不需要会编程，也不需要在电脑上安装任何软件；只要能够登录 GitHub，并且拥有 `rimoooliii/HUDA` 仓库的写入权限，就可以完全通过 GitHub 网页完成发布。

仓库地址：<https://github.com/rimoooliii/HUDA>

网站地址：<https://rimoooliii.github.io/HUDA/>

## 先了解三件事

1. 每篇文章都是一个 Markdown 文件，放在 `src/content/writing/` 目录。
2. 文件名决定文章的永久网址。例如 `the-memory-of-cities.md` 会发布到：

   `https://rimoooliii.github.io/HUDA/writing/the-memory-of-cities/`

3. 提交到 `main` 分支后，GitHub Actions 会自动检查并更新网站。通常几分钟内完成。

> **最重要的规则：**文章公开后，尽量不要修改文件名。文件名一旦改变，文章网址也会改变，旧链接会失效；由于评论系统按网址识别文章，原来的 Discussion 评论也不会自动跟随到新网址。

## 最快发布流程

如果你已经熟悉 GitHub，只需完成以下步骤：

1. 打开 [`src/content/writing/`](https://github.com/rimoooliii/HUDA/tree/main/src/content/writing)。
2. 点击 **Add file** → **Create new file**。
3. 输入英文文件名，例如 `the-memory-of-cities.md`。
4. 复制本文后面的“完整文章模板”，替换元数据和正文。
5. 点击 **Preview**，粗略检查 Markdown。
6. 点击 **Commit changes...**。
7. 提交说明填写 `Publish the memory of cities` 一类简短文字。
8. 选择直接提交到 `main`，再次点击 **Commit changes**。
9. 到仓库的 **Actions** 页面等待 `Deploy HUDA to GitHub Pages` 变成绿色对勾。
10. 打开文章网址和网站首页做最后检查。

下面是每一步的详细说明。

## 一、准备文章文件

### 1. 给文章确定一个文件名

文件名使用文章的简短英文名称，并遵守以下规则：

- 只使用小写英文字母、数字和连字符 `-`；
- 不要使用空格、中文、重音符号、下划线或括号；
- 文件扩展名必须是 `.md`；
- 名称应当简短、清晰、能够长期使用；
- 不要在文件名里加入日期，除非日期本身对文章有意义。

推荐：

```text
the-memory-of-cities.md
law-and-the-tragic-form.md
reading-benjamin-after-midnight.md
notes-on-bresson.md
```

不推荐：

```text
新文章.md
My New Essay.md
final_version_2.md
2026-07-29-article.md
```

即使正文使用德语、法语或中文，文件名仍建议使用简短的英文或拉丁字母转写。不同语言版本应使用不同文件名，例如：

```text
the-memory-of-cities.md
the-memory-of-cities-de.md
the-memory-of-cities-fr.md
the-memory-of-cities-zh.md
```

### 2. 通过 GitHub 网页创建文件

1. 登录 GitHub，打开 [`rimoooliii/HUDA`](https://github.com/rimoooliii/HUDA)。
2. 依次进入 `src` → `content` → `writing`。
3. 点击文件列表右上方的 **Add file**。
4. 选择 **Create new file**。
5. 在文件名输入框中填写刚才确定的名称，例如：

   ```text
   the-memory-of-cities.md
   ```

6. 在下面的大文本框中粘贴文章模板和正文。

GitHub 官方的网页建文件说明见：[Creating new files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)。

## 二、复制完整文章模板

每篇文章都必须以两行 `---` 包围的元数据开头。这个区域叫作 front matter。可以直接复制下面的模板，再逐项修改。

```md
---
title: "The Memory of Cities"
description: "A short account of ruins, archives, and the politics of remembrance."
date: 2026-07-29
author: RIMO
language: en
kind: essay
topics:
  - History
  - Philosophy
tags:
  - memory
  - ruins
  - archive
period: "Nineteenth and twentieth centuries"
places:
  - Paris
  - Berlin
terms:
  - collective memory
  - historical consciousness
sources:
  - label: "Walter Benjamin, The Arcades Project"
    note: "Cited edition and background reading."
  - label: "Stanford Encyclopedia of Philosophy: Collective Memory"
    url: "https://plato.stanford.edu/"
    note: "Introductory reference."
featured: false
start_here: false
draft: false
---

Begin the article here. The opening paragraph should not repeat the description
word for word.

## The first section

Ordinary Markdown may be used for the body. A claim can carry a footnote.[^1]

## The second section

Continue the argument here.

[^1]: Write the source, qualification, or explanatory note here.
```

注意：

- 开头和结尾的 `---` 都不能删；
- 冒号后面必须有一个空格；
- 带有冒号、引号或其他标点的值，最好放在英文双引号中；
- 列表项前使用两个空格和一个连字符；
- 不要使用 Tab 键缩进；
- 正文必须写在第二个 `---` 之后。

## 三、元数据字段详解

### 必填或建议始终填写

| 字段 | 写法 | 用途 |
| --- | --- | --- |
| `title` | `"Article Title"` | 页面标题、文章列表标题和浏览器标题。最多 180 个字符。 |
| `description` | `"One concise sentence."` | 首页摘要、文章页副标题和搜索引擎摘要。最多 360 个字符。 |
| `date` | `2026-07-29` | 首次公开日期，格式必须是 `YYYY-MM-DD`。 |
| `author` | `RIMO` | 本站固定作者名，不要改成其他值。 |
| `language` | `en` | 正文语言。英文 `en`、德语 `de`、法语 `fr`、中文 `zh-CN`。 |
| `kind` | `essay` | 文章类型，只能使用下表列出的五种值。 |
| `topics` | 多行列表 | 较宽的学科或主题分类，例如 `History`、`Literature`。 |
| `tags` | 多行列表或 `[]` | 更具体的关键词，例如人物、作品、概念或流派。 |
| `draft` | `false` | `false` 表示公开；`true` 表示不生成文章页。 |

`kind` 只能是：

| 值 | 适合的内容 |
| --- | --- |
| `essay` | 有完整论点和结构的长文 |
| `note` | 较短的研究笔记或阅读札记 |
| `review` | 书评、影评、乐评等 |
| `fragment` | 片段、随想或未充分展开的文字 |
| `link` | 以外部资料和简短评注为主的条目 |

`topics` 建议保持少而稳定，通常填写一至三个。为了避免同一分类被拆成两类，请统一使用以下大小写：

```text
History
Literature
Film
Philosophy
Music
Law
Sociology
```

如果没有标签，写：

```yaml
tags: []
```

### 可选字段

| 字段 | 示例 | 用途 |
| --- | --- | --- |
| `updated` | `2026-08-03` | 文章实质修改的日期，不能早于 `date`。 |
| `period` | `"Classical Greece"` | 涉及的历史时期。 |
| `places` | `["Athens", "Thebes"]` | 涉及的地点，也可以写成多行列表。 |
| `terms` | `["mimesis", "recognition"]` | 文章着重讨论的术语。 |
| `sources` | 见下文 | 在正文后自动生成“Sources and further reading”。 |
| `featured` | `true` 或 `false` | `true` 可让文章成为首页主推文章。 |
| `start_here` | `true` 或 `false` | 为将来的“从这里开始读”功能预留；目前不会改变页面。 |

如果没有内容，数组字段统一写成 `[]`：

```yaml
places: []
terms: []
sources: []
```

### `sources` 的正确格式

每条来源至少需要 `label`。`url` 和 `note` 可以省略：

```yaml
sources:
  - label: "Author, Book Title"
    note: "The edition used in this essay."
  - label: "A reliable online edition"
    url: "https://example.org/source"
  - label: "Further reading"
    url: "https://example.org/reading"
    note: "Useful historical background."
```

`sources` 适合放主要版本、资料库和延伸阅读。针对某一句话的精确出处，更适合写成脚注。

### `featured` 应当谨慎使用

首页会选择最新的一篇 `featured: true` 文章作为主推内容；如果没有主推文章，就使用最新文章。因此：

- 普通文章通常写 `featured: false`；
- 只有确实希望占据首页主要位置时才改成 `true`；
- 更换主推文章时，最好把旧文章的 `featured` 改回 `false`。

## 四、正文的常用写法

HUDA 使用标准 Markdown。标题、斜体、链接、引用、列表和表格都可以直接书写。

### 标题

文章题目已经由 `title` 自动显示，正文里不要再写一个一级标题 `#`。正文从二级标题开始：

```md
## First section

### A subsection
```

### 斜体、粗体和作品名

```md
Use *italics* for emphasis and titles such as *King Lear*.

Use **bold** sparingly for a term that truly needs emphasis.
```

### 超链接

```md
Read the [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/).
```

链接文字要说明目标内容，尽量避免只写“点击这里”。

### 引文

短引文可以留在段落中。较长引文使用 `>`：

```md
> The quoted passage begins here. Each line belongs to the same block quotation.
```

如果引文需要来源，把来源写进同一处脚注，而不是只留下无法核查的人名。

### 列表

```md
- First item
- Second item
- Third item
```

```md
1. First step
2. Second step
3. Third step
```

### 表格

```md
| Concept | Meaning |
| --- | --- |
| Closure | The action reaches an intelligible end |
| Repair | Damage is undone or made bearable |
```

### 分隔线

```md
---
```

正文中的分隔线前后都要留空行，以免被误解为元数据的一部分。

## 五、脚注与桌面侧注

HUDA 的脚注会自动适配阅读设备：

- 桌面宽屏上，它们显示在正文右侧，并尽量与引用位置对齐；
- 手机和平板上，点击脚注编号即可展开，再点击 **Close** 收起；
- 如果浏览器禁用了 JavaScript，它们仍会作为普通文末脚注显示。

### 最基本的脚注

正文：

```md
Recognition arrives only after the decisive action has become irreversible.[^1]
```

文章末尾：

```md
[^1]: Aristotle, *Poetics*, chapters 11 and 14.
```

脚注名称不必是数字，也可以使用便于辨认的短名称：

```md
The institution redirects violence rather than simply abolishing it.[^oresteia]

[^oresteia]: Aeschylus, *Eumenides*, especially the trial and final procession.
```

### 脚注中加入链接

```md
The text is available in a public edition.[^text]

[^text]: Sophocles, [*Antigone*](https://classics.mit.edu/Sophocles/antigone.html), translated by R. C. Jebb.
```

### 脚注写作建议

- 脚注编号紧跟相关句子的标点；
- 一条脚注只承担一个清楚的任务；
- 尽量提供作者、标题、章节或页码；
- 在线来源尽量链接到具体页面，而不是网站首页；
- 不要把决定文章论证成败的重要内容全部藏进脚注；
- 文末脚注定义的顺序最好与正文第一次出现的顺序一致。

## 六、上传和插入图片

图片统一放在：

[`public/images/writing/`](https://github.com/rimoooliii/HUDA/tree/main/public/images/writing)

### 1. 图片文件名

图片名也使用小写英文字母、数字和连字符。建议在前面加入文章文件名，避免不同文章的图片重名：

```text
the-memory-of-cities-arcade.jpg
the-memory-of-cities-map.png
notes-on-bresson-frame-01.webp
```

推荐格式：

- 照片：`.jpg` 或 `.webp`
- 图表、线稿、扫描文字：`.png`
- 尽量避免超大的原始图片；一般把最长边控制在约 2000 像素以内
- 上传前确认拥有使用权，并保留作者、馆藏、作品名或许可证信息

### 2. 通过 GitHub 网页上传图片

1. 打开 `public/images/writing/`。
2. 点击 **Add file** → **Upload files**。
3. 把图片拖入上传区域，或点击 **choose your files**。
4. 等待文件名出现在列表里。
5. 在提交说明中填写例如 `Add images for the memory of cities`。
6. 直接提交到 `main`。

图片和文章可以分别提交。为了避免正文暂时出现破图，建议先上传图片，等图片提交完成后再发布文章。

### 3. 在文章中插入图片

由于网站托管在 GitHub Pages 的 `/HUDA/` 子路径下，图片地址必须包含 `/HUDA/`：

```md
![A concise description of the image](/HUDA/images/writing/the-memory-of-cities-arcade.jpg)
```

不要写成：

```md
![Image](/images/writing/the-memory-of-cities-arcade.jpg)
```

后一种写法会漏掉 `/HUDA`，部署后可能显示为破图。

### 4. 带图注的图片

需要正式图注时，使用下面的 HTML：

```html
<figure>
  <img
    src="/HUDA/images/writing/the-memory-of-cities-arcade.jpg"
    alt="An interior view of a nineteenth-century Parisian arcade"
  />
  <figcaption>
    Passage des Panoramas, Paris. Photograph by Example Author, 2025.
  </figcaption>
</figure>
```

`alt` 是图片无法显示时以及屏幕阅读器使用的替代文字；它应描述图片的实际信息。版权、馆藏和来源信息放在 `figcaption` 中。

## 七、保存为草稿

如果文章还不准备公开，把元数据写成：

```yaml
draft: true
```

草稿文件可以提交到仓库，但它不会出现在首页、Writing 列表、RSS 或独立文章网址中。

准备发布时：

1. 打开文章文件；
2. 点击右上角的铅笔图标；
3. 把 `draft: true` 改为 `draft: false`；
4. 检查 `date` 是否为实际发布日期；
5. 点击 **Commit changes...** 并提交到 `main`。

注意：GitHub 的 **Preview** 只能预览普通 Markdown，不能完整模拟 HUDA 的字体、侧注、元数据、文章页和评论框。最终效果仍要以上线页面为准。

## 八、提交并触发自动发布

文章检查完成后：

1. 点击页面右上方的 **Commit changes...**。
2. 在第一个输入框填写简短、明确的提交说明，例如：

   ```text
   Publish the memory of cities
   ```

3. 说明框可以留空；如果文章有特殊情况，也可以补充一句。
4. 选择 **Commit directly to the `main` branch**。
5. 点击最后的 **Commit changes**。

GitHub 会把这次保存记为一次 commit，并自动启动网站构建。GitHub 官方的网页编辑步骤见：[Editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)。

## 九、检查自动发布是否成功

1. 打开仓库顶部的 [**Actions**](https://github.com/rimoooliii/HUDA/actions)。
2. 点击左侧的 **Deploy HUDA to GitHub Pages**。
3. 打开最上方、与刚才提交说明相同的运行记录。
4. 等待状态结束：

   - 绿色对勾：检查、构建和部署成功；
   - 黄色圆点：仍在运行，稍后刷新；
   - 红色叉号：发布失败，需要查看错误。

GitHub 官方说明见：[Viewing workflow run history](https://docs.github.com/en/actions/how-tos/monitoring-and-troubleshooting-workflows/monitoring-workflows/viewing-workflow-run-history)。

部署成功后，根据文件名拼出文章网址：

```text
文件：src/content/writing/the-memory-of-cities.md
网址：https://rimoooliii.github.io/HUDA/writing/the-memory-of-cities/
```

如果刚显示绿色对勾但网页仍是旧内容，等待一两分钟后强制刷新浏览器。

## 十、上线后的人工检查

至少用电脑和手机各检查一次。

### 首页和文章列表

- 新文章是否出现在首页或 Writing 页面；
- 标题、摘要、日期和类型是否正确；
- Topic 的拼写和大小写是否与旧文章一致；
- 如果设置了 `featured: true`，首页主推是否符合预期。

### 文章页

- 文章网址是否正确；
- 段落、标题、斜体、引文和列表是否正常；
- 所有外部链接是否能打开；
- 图片是否显示，图注和替代文字是否准确；
- 桌面端脚注是否出现在右侧；
- 手机端点击脚注编号是否可以展开和收起；
- `Sources and further reading` 是否完整；
- 页面底部是否显示 **Discussion** 评论框。

评论框按文章网址建立独立线程。第一次评论或回应后，相应的 GitHub Discussion 会自动建立。若后来修改文章文件名，旧评论不会自动迁移。

## 十一、修改已经发布的文章

1. 在 `src/content/writing/` 中打开文章文件。
2. 点击铅笔图标进入编辑。
3. 修改正文或元数据。
4. 如果是实质性修改，加入或更新：

   ```yaml
   updated: 2026-08-03
   ```

5. 点击 **Preview** 检查 Markdown。
6. 点击 **Commit changes...**。
7. 提交说明写清修改内容，例如：

   ```text
   Correct citations in the tragedy essay
   ```

8. 提交到 `main`，再到 Actions 等待部署成功。

小的错别字修正可以不改 `updated`；改变论点、增加章节、替换重要资料时应当更新它。

## 十二、常见错误与处理

### Actions 显示 `InvalidContentEntryDataError` 或字段校验失败

通常是 front matter 写法不符合要求。检查：

- `author` 是否严格写成 `RIMO`；
- `kind` 是否为五个允许值之一；
- `date` 和 `updated` 是否使用 `YYYY-MM-DD`；
- `updated` 是否不早于 `date`；
- `title` 和 `description` 是否存在；
- 列表缩进是否一致；
- `sources` 的每一项是否都有 `label`；
- `true` 和 `false` 是否使用小写且没有引号。

### 文章没有出现在网站上

依次检查：

1. 文件是否确实位于 `src/content/writing/`；
2. 扩展名是否为 `.md`；
3. `draft` 是否仍然为 `true`；
4. Actions 是否已经出现绿色对勾；
5. 日期和元数据是否通过检查。

### 图片显示为破图

检查：

- 图片是否上传到了 `public/images/writing/`；
- 文件名的大小写是否完全一致；
- Markdown 中是否包含 `/HUDA/images/writing/`；
- 图片提交是否已经成功部署；
- 文件名中是否误用了空格或中文标点。

### 脚注没有变成侧注

检查：

- 正文是否写了 `[^name]`；
- 文末是否有完全同名的 `[^name]:`；
- 是否在桌面宽屏中查看；窄屏设计本来就是点击展开；
- 浏览器是否启用了 JavaScript；
- 同一个脚注名称是否有拼写或大小写差异。

### 评论框没有出现

- 等待页面加载数秒；
- 确认浏览器允许 JavaScript；
- 关闭可能拦截 `giscus.app` 的内容拦截扩展后重试；
- 确认 Actions 部署已经完成。

### 发布失败但看不懂错误

不要反复随意修改。保留红色 Actions 运行记录，把该记录的网址发给维护者；运行记录会指出失败发生在哪个文件和字段。

## 十三、发布前检查清单

复制下面的清单，在提交前逐项确认：

- [ ] 文件位于 `src/content/writing/`
- [ ] 文件名为稳定的小写英文 slug，并以 `.md` 结尾
- [ ] `title` 与 `description` 已填写
- [ ] `date` 为实际发布日期
- [ ] `author: RIMO`
- [ ] `language` 与正文语言一致
- [ ] `kind` 使用允许值
- [ ] `topics` 大小写与既有分类一致
- [ ] 不使用的数组字段写成 `[]`
- [ ] 准备公开时为 `draft: false`
- [ ] 图片已先上传，并使用 `/HUDA/images/writing/...`
- [ ] 外部链接和脚注都可以核查
- [ ] GitHub Preview 中没有明显的 Markdown 错位
- [ ] Actions 最终显示绿色对勾
- [ ] 电脑端与手机端都检查过
- [ ] Discussion 评论框正常显示

## 一页式最小模板

不需要复杂元数据时，可以直接从这个版本开始：

```md
---
title: "Article Title"
description: "One sentence that tells the reader what this article argues or examines."
date: 2026-07-29
author: RIMO
language: en
kind: essay
topics:
  - History
tags: []
period: ""
places: []
terms: []
sources: []
featured: false
start_here: false
draft: false
---

Opening paragraph.[^1]

## First section

Write the article here.

## Conclusion

Conclude the argument here.

[^1]: Source or explanatory note.
```

如果没有历史时期，建议直接删除 `period: ""` 这一行；其余空列表可以保留。

