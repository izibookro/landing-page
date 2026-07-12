export const analyticsConfig = {
  gaMeasurementId:
    import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? 'G-MCLP8NWRP6',
  clarityProjectId: import.meta.env.PUBLIC_CLARITY_PROJECT_ID ?? '',
} as const;
