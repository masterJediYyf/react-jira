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


# fetch
在 fetch api 里，fetch里返回的服务端异常, fetch并不会为了这个状态抛出异常, 只有在网络连接断开的时候才会抛出异常