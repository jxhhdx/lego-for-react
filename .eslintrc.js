module.exports =  {
  parser:  '@typescript-eslint/parser',  // 指定ESLint解析器
  extends:  [
    'plugin:react/recommended',  //  从@eslint-plugin-react推荐规则
    'plugin:@typescript-eslint/recommended',  // 使用@typescript-eslint/eslint-plugin推荐的规则
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // 允许解析现代ECMAScript特性
    sourceType:  'module',  // 允许使用 imports 导入
    ecmaFeatures:  {
      jsx:  true,  // 语序解析JSX
    },
  },
  rules:  {
    // 指定ESLint规则的位置。可以用来覆盖从扩展的配置中指定的规则。
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    semi: ['warn']
  },
  settings:  {
    react:  {
      version:  '16.14.0',  // 告诉eslint-plugin-react自动检测要使用的React版本
    },
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
};