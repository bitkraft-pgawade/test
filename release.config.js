module.exports = {
  branches: [
    { name: 'dev', tagFormat: '${version}-dev' },
    { name: 'main', tagFormat: '${version}' } // Default tag format for main branch
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/exec'
  ],
  };
