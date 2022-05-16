# 2021 必修：React + React Hook + TS 最佳实践仿 Jira 企业级项目

Hi，同学们好，感谢大家的信任购买这个课程。查看课程对应代码请 checkout 到对应的 commit

这里是配套课件的链接：[点击我查看配套课件](https://www.notion.so/React-491ad0643476437cafde50bee4dde6ed)

TS 是鸭子类型：面向接口编程 而不是面向对象编程


# git 提交规范
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests


# json server 启动脚本
"json-server": "json-server __json_server_mock__/db.json --watch --port 4000 --middlewares ./__json_server_mock__/middleware.js",