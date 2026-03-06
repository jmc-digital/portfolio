'use strict';

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isGitHubPages = phase === PHASE_PRODUCTION_BUILD && process.env.GITHUB_PAGES === 'true';

  return {
    assetPrefix: isGitHubPages ? '/portfolio/' : '',
    basePath: isGitHubPages ? '/portfolio' : '',

    // Additional Next.js configurations can go here
  };
};
