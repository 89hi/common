## Code Modules（代码模块）

### Modules List（模块列表）
- [ParseUrl](./parseUrl) (将URL参数转化为JSON对象)
- [DateUtil](./dateUtil) (将日期值按格式转换)
### How to contribute（如何贡献代码）

```bash
module_name
    ├── demo #演示目录（非必须）
    │   └── index.html
    ├── lib #模块资源目录（非必须）
    │   └── index.js
    ├── test #测试资源目录（非必须）
    │   └── index.js
    ├── index.js #资源入口文件（必须）
    ├── index.test.js #测试入口文件（必须）
    └── README.md #使用说明（必须）
```