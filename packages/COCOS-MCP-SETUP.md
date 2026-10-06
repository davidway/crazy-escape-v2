# Cocos MCP 2.x 接入（本工程）

工程：**Cocos Creator 2.4.13**  
插件：`packages/cocos-mcp-2x`（开源）  
Cursor 已写：`~/.cursor/mcp.json` 与本项目 `.cursor/mcp.json`

## 你必须做的 4 步（MCP 才能进 Cursor）

1. 用 **Creator 2.4.13** 打开本工程  
2. 菜单 **Cocos MCP → Open Panel**  
3. **Start Server** → **Connect**（绿点 = 桥接成功）  
4. Cursor：**Settings → MCP → Reload**，应出现 `cocos-mcp-2x` 工具

未 Connect 时，Python 端只在 `127.0.0.1:6020` 监听，Cursor 调工具会空转/超时。

## 验证

```bash
lsof -iTCP:6020 -sTCP:LISTEN
# 应有 Python；Connect 后还会有 Creator 相关连接
```

## 大厅区分度（不要靠蒙层）

V2 已改为：

- **关掉** 共用节点：`bg` / `Loong` / `shadow` / `role`
- **最底层** 放独立 `ArcadeStage` 背景（不盖 UI）
- 拆掉旧的 `ArcadeNightVeil` 全屏蒙层

改完脚本后需 **重新构建 web-mobile** 或用编辑器预览才能看到效果。
