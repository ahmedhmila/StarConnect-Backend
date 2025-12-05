export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage-v5',
      providerOptions: {
        account: env('AZURE_STORAGE_ACCOUNT'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        containerName: env('AZURE_STORAGE_CONTAINER'),
        defaultPath: env('AZURE_STORAGE_DEFAULT_PATH', 'assets'),
        serviceBaseURL: env(
          'AZURE_STORAGE_URL',
          `https://${env('AZURE_STORAGE_ACCOUNT')}.blob.core.windows.net`
        ),
      },
    },
  },
});
