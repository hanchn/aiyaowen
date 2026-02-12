const [major, minor, patch] = process.versions.node.split('.').map(Number);

const required = { major: 20, minor: 19, patch: 4 };

const isOk =
  major > required.major ||
  (major === required.major &&
    (minor > required.minor || (minor === required.minor && patch >= required.patch)));

if (!isOk) {
  process.stderr.write(
    [
      `当前 Node 版本: ${process.versions.node}`,
      `Expo SDK 54 / Metro 0.83 需要 Node >= ${required.major}.${required.minor}.${required.patch}`,
      `请升级 Node 后重新安装依赖：`,
      `  1) 升级 Node 到 20.19.4+`,
      `  2) rm -rf node_modules package-lock.json`,
      `  3) npm install`,
      `  4) npm run ios`,
      ``,
    ].join('\n')
  );
  process.exit(1);
}

