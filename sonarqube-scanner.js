const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: 'b47beb65b5eb774b21ab38bcee62b83245b4b864',
    options: {
      'sonar.projectName': 'dp_2p2022_t00057813_p1',
      'sonar.organization': 'iscodevutb',
      'sonar.projectKey': 'ISCODEVUTB_dp_2p2022_t00057813_p1',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.exclusions': '**/*.spec.ts',
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.spec.tsx,**/*.spec.ts',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
    },
  },
  () => process.exit()
);
