const path = require('path');

module.exports = {

    webpack: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Features': path.resolve(__dirname, 'src/features'),
            '@Hooks': path.resolve(__dirname, 'src/hooks'),
            '@Redux': path.resolve(__dirname, 'src/redux'),
            '@Theme': path.resolve(__dirname, 'src/theme'),
            '@Types': path.resolve(__dirname, 'src/types'),
            '@Utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};
