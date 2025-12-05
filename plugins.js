// Path: config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('AZURE_STORAGE_ACCOUNT'),
        accountKey: env('AZURE_STORAGE_ACCESS_KEY'),
        serviceBaseURL: `https://${env('AZURE_STORAGE_ACCOUNT')}.blob.core.windows.net`,
        containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
        defaultPath: 'assets',
        cdnBaseURL: `https://${env('AZURE_STORAGE_ACCOUNT')}.blob.core.windows.net`,
      },
    },
  },
});