module.exports = {
   extends: ['@commitlint/config-conventional'],
   rules: {
      //   TODO Add Scope Enum Here
      // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
      'type-enum': [
         2,
         'always',
         [
            'feat',
            'fix',
            'docs',
            'chore',
            'style',
            'refactor',
            'build',
            'ci',
            'test',
            'revert',
            'perf'
         ]
      ],
      'subject-case': [
         2,
         'never',
         [
            'upper-case',
            'pascal-case',
            'start-case'
         ]
      ]
   }
};
